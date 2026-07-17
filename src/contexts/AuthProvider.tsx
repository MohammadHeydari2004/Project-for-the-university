import { STORAGE_KEYS } from "#/configs/constants.ts";
import { loginUser } from "#/services/auth.ts";
import type { LoginPayload } from "#/types/auth.ts";
import type { User } from "#/types/user.ts";
import { useCallback, useMemo, useState, type ReactNode } from "react";
import AuthContext from "./AuthContext";

interface AuthProviderProps {
  children: ReactNode;
}

// ✅ Type Guard برای اعتبارسنجی ساختار کاربر ذخیره‌شده در LocalStorage
function isValidUser(obj: unknown): obj is User {
  if (typeof obj !== "object" || obj === null) return false;
  const u = obj as Record<string, unknown>;
  return (
    typeof u.id === "string" &&
    typeof u.name === "string" &&
    typeof u.email === "string" &&
    typeof u.role === "string" &&
    typeof u.status === "string"
  );
}

function getStoredUser(): User | null {
  try {
    const storedUser = localStorage.getItem(STORAGE_KEYS.authUser);
    if (!storedUser) return null;

    const parsed = JSON.parse(storedUser);
    // بررسی سلامت داده‌ها برای جلوگیری از کرش اپلیکیشن
    if (isValidUser(parsed)) {
      return parsed;
    }
    // در صورت نامعتبر بودن داده‌ها، آن‌ها را پاک می‌کنیم
    localStorage.removeItem(STORAGE_KEYS.authUser);
    return null;
  } catch {
    // در صورت خطای JSON.parse یا عدم دسترسی به localStorage
    return null;
  }
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => getStoredUser());
  // این state برای آینده‌نگری (مثلاً بررسی توکن JWT در شروع اپلیکیشن) حفظ شده است
  const [isLoading] = useState(false);

  const login = useCallback(async (payload: LoginPayload) => {
    const loggedInUser = await loginUser(payload);

    // ✅ بهبود امنیتی: حذف رمز عبور قبل از ذخیره در State و LocalStorage
    // توجه: در یک اپلیکیشن واقعی، بک‌اند هرگز رمز عبور را برنمی‌گرداند.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...safeUser } = loggedInUser;

    setUser(safeUser as User);

    try {
      localStorage.setItem(STORAGE_KEYS.authUser, JSON.stringify(safeUser));
    } catch (error) {
      console.error("خطا در ذخیره‌سازی اطلاعات کاربر در LocalStorage:", error);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    try {
      localStorage.removeItem(STORAGE_KEYS.authUser);
    } catch (error) {
      console.error("خطا در پاک‌سازی LocalStorage:", error);
    }
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: !!user,
      isLoading,
      login,
      logout,
    }),
    [user, isLoading, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
// import { STORAGE_KEYS } from "#/configs/constants.ts";
// import { loginUser } from "#/services/auth.ts";
// import type { LoginPayload } from "#/types/auth.ts";
// import type { User } from "#/types/user.ts";
// import { useCallback, useMemo, useState, type ReactNode } from "react";
// import AuthContext from "./AuthContext";

// interface AuthProviderProps {
//   children: ReactNode;
// }

// function getStoredUser(): User | null {
//   const storedUser = localStorage.getItem(STORAGE_KEYS.authUser);
//   if (!storedUser) return null;
//   try {
//     return JSON.parse(storedUser) as User;
//   } catch {
//     return null;
//   }
// }

// function AuthProvider({ children }: AuthProviderProps) {
//   const [user, setUser] = useState<User | null>(() => getStoredUser());
//   const [isLoading] = useState(false);

//   const login = useCallback(async (payload: LoginPayload) => {
//     const loggedInUser = await loginUser(payload);
//     setUser(loggedInUser);
//     localStorage.setItem(STORAGE_KEYS.authUser, JSON.stringify(loggedInUser));
//   }, []);

//   const logout = useCallback(() => {
//     setUser(null);
//     localStorage.removeItem(STORAGE_KEYS.authUser);
//   }, []);

//   const value = useMemo(
//     () => ({
//       user,
//       isAuthenticated: !!user,
//       isLoading,
//       login,
//       logout,
//     }),
//     [user, isLoading, login, logout],
//   );

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// export default AuthProvider;
