import Button from "#/components/ui/Button.tsx";
import Input from "#/components/ui/Input.tsx";
import Modal from "#/components/ui/Modal.tsx";
import Select from "#/components/ui/Select.tsx";
import type {
  CreateUserPayload,
  UpdateUserPayload,
  User,
} from "#/types/user.ts";
import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import {
  validateEmail,
  validateName,
  validatePassword,
  validateRole,
  validateStatus,
} from "./validators";

type UserFormValues = {
  name: string;
  email: string;
  password?: string;
  role: "admin" | "teacher" | "student";
  status: "active" | "inactive";
};

interface UserFormProps {
  isOpen: boolean;
  mode: "create" | "edit";
  user?: User | null;
  onClose: () => void;
  onCreate: (values: CreateUserPayload) => Promise<void>;
  onUpdate: (values: UpdateUserPayload) => Promise<void>;
}

function UserForm({
  isOpen,
  mode,
  user,
  onClose,
  onCreate,
  onUpdate,
}: UserFormProps) {
  const defaultValues = useMemo<UserFormValues>(
    () =>
      mode === "create"
        ? {
            name: "",
            email: "",
            password: "",
            role: "student",
            status: "active",
          }
        : {
            name: user?.name ?? "",
            email: user?.email ?? "",
            role: user?.role ?? "student",
            status: user?.status ?? "active",
          },
    [mode, user],
  );

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UserFormValues>({
    defaultValues,
    // ✅ ۱. اعتبارسنجی همزمان با تایپ برای UX بهتر
    mode: "onChange",
  });

  useEffect(() => {
    if (isOpen) {
      reset(defaultValues);
    }
  }, [isOpen, defaultValues, reset]);

  const mapServerErrorToField = (
    message: string,
  ): { field: keyof UserFormValues | "root"; message: string } => {
    if (message.includes("ایمیل")) return { field: "email", message };
    if (message.includes("نام")) return { field: "name", message };
    if (message.includes("رمز")) return { field: "password", message };
    return { field: "root", message };
  };

  const onSubmit = async (values: UserFormValues) => {
    try {
      if (mode === "create") {
        await onCreate({
          name: values.name.trim(),
          email: values.email.trim(),
          password: values.password?.trim() ?? "",
          role: values.role,
          status: values.status,
        });
      } else {
        await onUpdate({
          name: values.name.trim(),
          email: values.email.trim(),
          role: values.role,
          status: values.status,
        });
      }
      onClose();
    } catch (err) {
      if (err instanceof Error) {
        const { field, message } = mapServerErrorToField(err.message);
        if (field === "root") {
          setError("root", { type: "server", message });
        } else {
          setError(field, { type: "server", message });
        }
      } else {
        setError("root", {
          type: "server",
          message: "خطای غیرمنتظره‌ای رخ داد.",
        });
      }
    }
  };

  const title = mode === "create" ? "ایجاد کاربر جدید" : "ویرایش اطلاعات کاربر";

  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {errors.root && (
          // ✅ ۲. افزودن role="alert" برای دسترسی‌پذیری
          <div
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            role="alert"
          >
            {errors.root.message}
          </div>
        )}

        <Input
          label="نام"
          // ✅ ۳. افزودن autoFocus و autoComplete
          autoFocus
          autoComplete="name"
          required
          {...register("name", { validate: validateName })}
          error={errors.name?.message}
        />

        <Input
          label="ایمیل"
          type="email"
          autoComplete="email"
          required
          {...register("email", { validate: validateEmail })}
          error={errors.email?.message}
        />

        {mode === "create" && (
          <Input
            label="رمز عبور"
            type="password"
            autoComplete="new-password"
            required
            {...register("password", { validate: validatePassword })}
            error={errors.password?.message}
          />
        )}

        <Select
          label="نقش"
          required
          {...register("role", { validate: validateRole })}
          // ✅ ۴. یکپارچگی زبانی با سایر بخش‌های پروژه
          options={[
            { label: "مدیر", value: "admin" },
            { label: "استاد", value: "teacher" },
            { label: "دانشجو", value: "student" },
          ]}
          error={errors.role?.message}
        />

        <Select
          label="وضعیت"
          required
          {...register("status", { validate: validateStatus })}
          options={[
            { label: "فعال", value: "active" },
            { label: "غیرفعال", value: "inactive" },
          ]}
          error={errors.status?.message}
        />

        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="secondary" onClick={onClose}>
            انصراف
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "در حال ذخیره..." : "ذخیره"}
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default UserForm;

// import Button from "#/components/ui/Button.tsx";
// import Input from "#/components/ui/Input.tsx";
// import Modal from "#/components/ui/Modal.tsx";
// import Select from "#/components/ui/Select.tsx";
// import type {
//   CreateUserPayload,
//   UpdateUserPayload,
//   User,
// } from "#/types/user.ts";
// import { useEffect, useMemo } from "react";
// import { useForm } from "react-hook-form";
// import {
//   validateEmail,
//   validateName,
//   validatePassword,
//   validateRole,
//   validateStatus,
// } from "./validators";

// type UserFormValues = {
//   name: string;
//   email: string;
//   password?: string;
//   role: "admin" | "teacher" | "student";
//   status: "active" | "inactive";
// };

// interface UserFormProps {
//   isOpen: boolean;
//   mode: "create" | "edit";
//   user?: User | null;
//   onClose: () => void;
//   onCreate: (values: CreateUserPayload) => Promise<void>;
//   onUpdate: (values: UpdateUserPayload) => Promise<void>;
// }

// function UserForm({
//   isOpen,
//   mode,
//   user,
//   onClose,
//   onCreate,
//   onUpdate,
// }: UserFormProps) {
//   const defaultValues = useMemo<UserFormValues>(
//     () =>
//       mode === "create"
//         ? {
//             name: "",
//             email: "",
//             password: "",
//             role: "student",
//             status: "active",
//           }
//         : {
//             name: user?.name ?? "",
//             email: user?.email ?? "",
//             role: user?.role ?? "student",
//             status: user?.status ?? "active",
//           },
//     [mode, user],
//   );

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setError,
//     formState: { errors, isSubmitting },
//   } = useForm<UserFormValues>({
//     defaultValues,
//   });
//   useEffect(() => {
//     if (isOpen) {
//       reset(defaultValues);
//     }
//   }, [isOpen, defaultValues, reset]);

//   const mapServerErrorToField = (
//     message: string,
//   ): { field: keyof UserFormValues | "root"; message: string } => {
//     if (message.includes("ایمیل")) return { field: "email", message };
//     if (message.includes("نام")) return { field: "name", message };
//     if (message.includes("رمز")) return { field: "password", message };
//     return { field: "root", message };
//   };

//   const onSubmit = async (values: UserFormValues) => {
//     try {
//       if (mode === "create") {
//         await onCreate({
//           name: values.name.trim(),
//           email: values.email.trim(),
//           password: values.password?.trim() ?? "",
//           role: values.role,
//           status: values.status,
//         });
//       } else {
//         await onUpdate({
//           name: values.name.trim(),
//           email: values.email.trim(),
//           role: values.role,
//           status: values.status,
//         });
//       }
//       onClose();
//     } catch (err) {
//       if (err instanceof Error) {
//         const { field, message } = mapServerErrorToField(err.message);
//         if (field === "root") {
//           setError("root", { type: "server", message });
//         } else {
//           setError(field, { type: "server", message });
//         }
//       } else {
//         setError("root", {
//           type: "server",
//           message: "خطای غیرمنتظره‌ای رخ داد.",
//         });
//       }
//     }
//   };

//   const title = mode === "create" ? "ایجاد کاربر جدید" : "ویرایش اطلاعات کاربر";

//   return (
//     <Modal isOpen={isOpen} title={title} onClose={onClose}>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         {errors.root && (
//           <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
//             {errors.root.message}
//           </div>
//         )}

//         <Input
//           label="نام"
//           {...register("name", { validate: validateName })}
//           error={errors.name?.message}
//         />

//         <Input
//           label="ایمیل"
//           type="email"
//           {...register("email", { validate: validateEmail })}
//           error={errors.email?.message}
//         />

//         {mode === "create" && (
//           <Input
//             label="رمز عبور"
//             type="password"
//             {...register("password", { validate: validatePassword })}
//             error={errors.password?.message}
//           />
//         )}

//         <Select
//           label="نقش"
//           {...register("role", { validate: validateRole })}
//           options={[
//             { label: "مدیر (Admin)", value: "admin" },
//             { label: "استاد (Teacher)", value: "teacher" },
//             { label: "دانشجو (Student)", value: "student" },
//           ]}
//           error={errors.role?.message}
//         />

//         <Select
//           label="وضعیت"
//           {...register("status", { validate: validateStatus })}
//           options={[
//             { label: "فعال (Active)", value: "active" },
//             { label: "غیرفعال (Inactive)", value: "inactive" },
//           ]}
//           error={errors.status?.message}
//         />

//         <div className="flex justify-end gap-2 pt-2">
//           <Button type="button" variant="secondary" onClick={onClose}>
//             انصراف
//           </Button>
//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "در حال ذخیره..." : "ذخیره"}
//           </Button>
//         </div>
//       </form>
//     </Modal>
//   );
// }

// export default UserForm;
