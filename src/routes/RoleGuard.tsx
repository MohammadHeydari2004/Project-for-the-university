import type { UserRole } from "#/types/common.ts";
// ✅ ۱. Import صحیح ReactNode برای Type Safety
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
// ✅ ۲. استفاده از Path Alias پروژه (#/) و افزودن پسوند .ts
import { useAuth } from "#/contexts/AuthContext.ts";

interface RoleGuardProps {
  children: ReactNode;
  allowedRoles: UserRole[];
}

function RoleGuard({ children, allowedRoles }: RoleGuardProps) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
}

export default RoleGuard;

// import type { UserRole } from "#/types/common.ts";
// import { Navigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// interface RoleGuardProps {
//   children: React.ReactNode;
//   allowedRoles: UserRole[];
// }

// function RoleGuard({ children, allowedRoles }: RoleGuardProps) {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to="/login" replace />;
//   }
//   if (!allowedRoles.includes(user.role)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return <>{children}</>;
// }

// export default RoleGuard;
