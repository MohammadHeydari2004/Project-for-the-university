import axiosInstance from "#/services/api/axiosInstance.ts";
import type { LoginPayload } from "#/types/auth.ts";
import type { User } from "#/types/user.ts";

export async function loginUser(payload: LoginPayload): Promise<User> {
  const email = payload.email.trim().toLowerCase();
  const password = payload.password; // ✅ حذف trim - فضای خالی می‌تواند بخشی از رمز باشد

  if (!email || !password) {
    throw new Error("لطفاً ایمیل و رمز عبور را وارد کنید.");
  }

  // ✅ استفاده از تایپ User (که password?: string دارد)
  const response = await axiosInstance.get<User[]>("/users", {
    params: { email },
  });

  const users = response.data;

  // ✅ چک یکپارچه برای وجود کاربر
  if (!users || users.length === 0) {
    throw new Error("هیچ حساب کاربری با این ایمیل یافت نشد.");
  }

  const user = users[0];

  if (!user) {
    throw new Error("هیچ حساب کاربری با این ایمیل یافت نشد.");
  }

  // ✅ بررسی رمز عبور
  if (user.password !== password) {
    throw new Error("رمز عبور وارد شده صحیح نیست.");
  }

  // ✅ بررسی وضعیت حساب
  if (user.status !== "active") {
    throw new Error("این حساب کاربری غیرفعال است. با مدیر سیستم تماس بگیرید.");
  }

  // ✅ حذف رمز عبور قبل از برگرداندن به اپلیکیشن (امنیت)

  const { password: _, ...safeUser } = user;

  return safeUser as User;
}

// import axiosInstance from "#/services/api/axiosInstance.ts";
// import type { LoginPayload } from "#/types/auth.ts";
// import type { User } from "#/types/user.ts";

// export async function loginUser(payload: LoginPayload): Promise<User> {
//   const email = payload.email.trim().toLowerCase();
//   const password = payload.password.trim();

//   if (!email || !password) {
//     throw new Error("لطفاً ایمیل و رمز عبور را وارد کنید.");
//   }

//   const response = await axiosInstance.get<User[]>("/users", {
//     params: { email },
//   });

//   const users = response.data;

//   if (!users || users.length === 0) {
//     throw new Error("هیچ حساب کاربری با این ایمیل یافت نشد.");
//   }

//   if (users.length > 1) {
//     throw new Error(
//       "خطای سیستمی: چندین حساب کاربری با این ایمیل یافت شد. لطفاً با مدیر سیستم تماس بگیرید.",
//     );
//   }

//   const user = users[0];

//   if (!user) {
//     throw new Error("هیچ حساب کاربری با این ایمیل یافت نشد.");
//   }

//   if (user.password !== password) {
//     throw new Error("رمز عبور وارد شده صحیح نیست.");
//   }

//   if (user.status !== "active") {
//     throw new Error("این حساب کاربری غیرفعال است. با مدیر سیستم تماس بگیرید.");
//   }

//   return user;
// }
