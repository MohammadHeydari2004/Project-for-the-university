import type { ID, RecordStatus, UserRole } from "./common";

export interface User {
  readonly id: ID;
  name: string;
  email: string;
  password?: string; // ✅ برگرداندن این فیلد برای سازگاری با json-server
  role: UserRole;
  status: RecordStatus;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}

export interface CreateUserPayload {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  status: RecordStatus;
}

export interface UpdateUserPayload {
  name: string;
  email: string;
  role: UserRole;
  status: RecordStatus;
}

export interface UserFilters {
  searchName: string;
  searchEmail: string;
  role: "" | UserRole;
  status: "" | RecordStatus;
}

// import type { ID, RecordStatus, UserRole } from "./common";

// export interface User {
//   id: ID;
//   name: string;
//   email: string;
//   password?: string; // اختیاری شود تا حذف آن در AuthProvider خطای تایپ ندهد
//   role: UserRole;
//   status: RecordStatus;
// }

// export interface CreateUserPayload {
//   name: string;
//   email: string;
//   password: string;
//   role: UserRole;
//   status: RecordStatus;
// }

// export interface UpdateUserPayload {
//   name: string;
//   email: string;
//   role: UserRole;
//   status: RecordStatus;
// }

// export interface UserFilters {
//   searchName: string;
//   searchEmail: string;
//   role: "" | UserRole;
//   status: "" | RecordStatus;
// }
