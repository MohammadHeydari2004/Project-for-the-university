import Loading from "#/components/common/Loading.tsx";
import { useAuth } from "#/contexts/AuthContext.ts";
// ✅ ۱. Import صحیح ReactNode
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useAuth();

  // ✅ ۲. نمایش Loading فقط در صورتی که واقعاً در حال بارگذاری باشد
  // نکته: در حال حاضر isLoading همیشه false است (در AuthProvider)
  // اما این بخش برای آینده‌نگری (مثلاً بررسی JWT) حفظ شده است
  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;

// import Loading from "#/components/common/Loading.tsx";
// import { useAuth } from "#/contexts/AuthContext.ts";
// import { Navigate } from "react-router-dom";

// interface ProtectedRouteProps {
//   children: React.ReactNode;
// }

// function ProtectedRoute({ children }: ProtectedRouteProps) {
//   const { isAuthenticated, isLoading } = useAuth();

//   if (isLoading) {
//     return <Loading />;
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   return <>{children}</>;
// }

// export default ProtectedRoute;
