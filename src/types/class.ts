import type { ID, Nullable } from "./common";

export type ClassStatus = "active" | "inactive";

export interface ClassItem {
  readonly id: ID;
  title: string;
  teacherId: Nullable<ID>;
  studentIds: ID[];
  capacity: number;
  status: ClassStatus;
  description?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}

export interface ClassFormValues {
  title: string;
  teacherId: Nullable<ID>;
  studentIds: ID[];
  capacity: number;
  status: ClassStatus;
  description?: string;
}

// import type { ID } from "./common";

// export type ClassStatus = "active" | "inactive";

// export interface ClassItem {
//   id: ID;
//   title: string;
//   teacherId: ID | null;
//   studentIds: ID[];
//   capacity: number;
//   status: ClassStatus;
//   description?: string;
//   createdAt?: string;
//   updatedAt?: string;
// }

// export interface ClassFormValues {
//   title: string;
//   teacherId: ID | null;
//   studentIds: ID[];
//   capacity: number;
//   status: ClassStatus;
//   description?: string;
// }
