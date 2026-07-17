import type { ID, Nullable, SubmissionStatus } from "#/types/common.ts";

export interface Submission {
  readonly id: ID;
  readonly assignmentId: ID;
  readonly studentId: ID;
  content: string;
  readonly submittedAt: string;
  status: SubmissionStatus;
  grade?: Nullable<number>;
  feedback?: Nullable<string>;
  readonly updatedAt?: string;
}

// import type { ID, SubmissionStatus } from "#/types/common.ts";

// export interface Submission {
//   id: ID;
//   assignmentId: ID;
//   studentId: ID;
//   content: string;
//   submittedAt: string;
//   status: SubmissionStatus;
//   grade?: number | null;
//   feedback?: string | null;
//   updatedAt?: string;
// }
