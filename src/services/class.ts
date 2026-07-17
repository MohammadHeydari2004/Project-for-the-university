// src/services/class.ts
import { baseApi } from "#/services/api/baseApi.ts";
import { assignmentService } from "#/services/assignment.ts";
import type { Assignment } from "#/types/assignment.ts";
import type { Attendance } from "#/types/attendance.ts";
import type { ClassFormValues, ClassItem } from "#/types/class.ts";
import type { ID } from "#/types/common.ts";
import type { Session } from "#/types/session.ts";

const endpoint = "/classes";

export const classService = {
  getAll: () => baseApi.getAll<ClassItem>(endpoint),
  getById: (id: ID) => baseApi.getById<ClassItem>(endpoint, id),

  create: (data: ClassFormValues) =>
    baseApi.create<ClassItem>(endpoint, {
      ...data,
      createdAt: new Date().toISOString(),
    }),

  update: (id: ID, data: Partial<ClassFormValues>) =>
    baseApi.update<ClassItem>(endpoint, id, {
      ...data,
      updatedAt: new Date().toISOString(),
    }),

  delete: async (id: ID) => {
    // ✅ دریافت فقط رکوردهای مرتبط با این کلاس
    const [relatedAttendances, relatedSessions, relatedAssignments] =
      await Promise.all([
        baseApi.getAll<Attendance>("/attendance", { classId: id }),
        baseApi.getAll<Session>("/sessions", { classId: id }),
        baseApi.getAll<Assignment>("/assignments", { classId: id }),
      ]);

    // ✅ حذف موازی تمام وابستگی‌ها
    await Promise.all([
      ...relatedAttendances.map((a) => baseApi.delete("/attendance", a.id)),
      ...relatedSessions.map((s) => baseApi.delete("/sessions", s.id)),
      ...relatedAssignments.map((a) => assignmentService.delete(a.id)),
    ]);

    await baseApi.delete(endpoint, id);
  },

  deactivate: (id: ID) =>
    baseApi.update<ClassItem>(endpoint, id, {
      status: "inactive",
      updatedAt: new Date().toISOString(),
    }),

  activate: (id: ID) =>
    baseApi.update<ClassItem>(endpoint, id, {
      status: "active",
      updatedAt: new Date().toISOString(),
    }),
};
// import { baseApi } from "#/services/api/baseApi.ts";
// import { assignmentService } from "#/services/assignment.ts";
// import type { Assignment } from "#/types/assignment.ts";
// import type { Attendance } from "#/types/attendance.ts";
// import type { ClassFormValues, ClassItem } from "#/types/class.ts";
// import type { ID } from "#/types/common.ts";
// import type { Session } from "#/types/session.ts";

// const endpoint = "/classes";

// export const classService = {
//   getAll: () => baseApi.getAll<ClassItem>(endpoint),
//   getById: (id: ID) => baseApi.getById<ClassItem>(endpoint, id),
//   create: (data: ClassFormValues) =>
//     baseApi.create<ClassItem>(endpoint, {
//       ...data,
//       createdAt: new Date().toISOString(),
//     }),
//   update: (id: ID, data: Partial<ClassFormValues>) =>
//     baseApi.update<ClassItem>(endpoint, id, {
//       ...data,
//       updatedAt: new Date().toISOString(),
//     }),
//   delete: async (id: ID) => {
//     const [attendances, sessions, assignments] = await Promise.all([
//       baseApi.getAll<Attendance>("/attendance"),
//       baseApi.getAll<Session>("/sessions"),
//       baseApi.getAll<Assignment>("/assignments"),
//     ]);

//     const relatedAttendances = attendances.filter((att) => att.classId === id);
//     await Promise.all(
//       relatedAttendances.map((a) => baseApi.delete("/attendance", a.id)),
//     );

//     const relatedSessions = sessions.filter((ses) => ses.classId === id);
//     await Promise.all(
//       relatedSessions.map((s) => baseApi.delete("/sessions", s.id)),
//     );

//     const relatedAssignments = assignments.filter((ass) => ass.classId === id);
//     await Promise.all(
//       relatedAssignments.map((a) => assignmentService.delete(a.id)),
//     );

//     await baseApi.delete(endpoint, id);
//   },
//   deactivate: (id: ID) =>
//     baseApi.update<ClassItem>(endpoint, id, {
//       status: "inactive",
//       updatedAt: new Date().toISOString(),
//     }),
//   activate: (id: ID) =>
//     baseApi.update<ClassItem>(endpoint, id, {
//       status: "active",
//       updatedAt: new Date().toISOString(),
//     }),
// };
