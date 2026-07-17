import type { AuthContextType } from "#/types/auth.ts";
import { createContext, useContext } from "react";

// ✅ استفاده از null به جای undefined (الگوی استاندارد React)
const AuthContext = createContext<AuthContextType | null>(null);

// ✅ افزودن displayName برای شناسایی آسان در React DevTools
AuthContext.displayName = "AuthContext";

export default AuthContext;

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth must be used within an <AuthProvider>. " +
        "Make sure your component is wrapped inside <AuthProvider> in the component tree.",
    );
  }
  return context;
}

// import type { AuthContextType } from "#/types/auth.ts";
// import { createContext, useContext } from "react";

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export default AuthContext;

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used inside AuthProvider");
//   }
//   return context;
// }
