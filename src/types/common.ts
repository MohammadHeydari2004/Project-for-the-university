export type ID = string;

export type UserRole = "admin" | "teacher" | "student";
export type RecordStatus = "active" | "inactive";
export type AttendanceStatus = "present" | "absent" | "late";
export type SubmissionStatus = "submitted" | "graded" | "pending";

// ✅ تایپ‌های کمکی برای استفاده در کل پروژه

/** یک فیلد که می‌تواند null باشد */
export type Nullable<T> = T | null;

/** یک فیلد که می‌تواند undefined باشد */
export type Optional<T> = T | undefined;

/** یک فیلد که می‌تواند null یا undefined باشد */
export type Maybe<T> = T | null | undefined;

/** تمام فیلدهای یک آبجکت را optional می‌کند */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/** تمام فیلدهای یک آبجکت را readonly می‌کند */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};

// export type ID = string;
// export type UserRole = "admin" | "teacher" | "student";
// export type RecordStatus = "active" | "inactive";
// export type AttendanceStatus = "present" | "absent" | "late";
// export type SubmissionStatus = "submitted" | "graded" | "pending";
