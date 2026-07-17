import Card from "#/components/ui/Card.tsx";
import StatusChip from "#/components/ui/StatusChip.tsx";
import { useAuth } from "#/contexts/AuthContext.ts";
// ✅ ۱. Import توابع از Utils برای رعایت اصل DRY
import { getRoleLabel } from "#/utils/user.ts";

function ProfilePage() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-4 sm:space-y-6">
      <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">پروفایل</h1>

      {/* ✅ ۲. کارت هدر با آواتار و اطلاعات اصلی */}
      <Card>
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
          {/* آواتار */}
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700 shadow-inner">
            {user.name.charAt(0)}
          </div>

          {/* اطلاعات اصلی */}
          <div className="flex-1 text-center sm:text-right">
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            <p className="mt-1 text-sm text-gray-500 break-all">{user.email}</p>

            {/* بج‌های نقش و وضعیت */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
              <span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-800 ring-1 ring-inset ring-gray-200">
                {getRoleLabel(user.role)}
              </span>
              {/* ✅ ۳. استفاده از StatusChip برای یکپارچگی Design System */}
              <StatusChip status={user.status} />
            </div>
          </div>
        </div>
      </Card>

      {/* ✅ ۴. استفاده از Description List (dl/dt/dd) برای Semantic HTML و a11y بهتر */}
      <Card title="اطلاعات تکمیلی حساب کاربری">
        <dl className="divide-y divide-gray-100">
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              شناسه کاربری
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 break-all font-mono bg-gray-50 p-2 rounded inline-block">
              {user.id}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              نام و نام خانوادگی
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {user.name}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              آدرس ایمیل
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 break-all">
              {user.email}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              نقش در سیستم
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {getRoleLabel(user.role)}
            </dd>
          </div>
          <div className="px-2 py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              وضعیت حساب
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <StatusChip status={user.status} />
            </dd>
          </div>
        </dl>
      </Card>
    </div>
  );
}

export default ProfilePage;

// import Card from "#/components/ui/Card.tsx";
// import { useAuth } from "#/contexts/AuthContext.ts";

// function ProfilePage() {
//   const { user } = useAuth();

//   if (!user) return null;

//   const getRoleLabel = (role: string) => {
//     switch (role) {
//       case "admin":
//         return "مدیر";
//       case "teacher":
//         return "استاد";
//       case "student":
//         return "دانشجو";
//       default:
//         return role;
//     }
//   };
//   const getStatusLabel = (status: string) => {
//     switch (status) {
//       case "active":
//         return "فعال";
//       case "inactive":
//         return "غیرفعال";
//       default:
//         return status;
//     }
//   };

//   return (
//     <div className="space-y-4 sm:space-y-6">
//       <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">پروفایل</h1>
//       <Card title="اطلاعات کاربری">
//         <div className="space-y-3 text-sm text-gray-700 sm:text-base">
//           <p className="flex flex-col gap-1 sm:flex-row sm:gap-2">
//             <span className="font-semibold">نام:</span>
//             <span>{user.name}</span>
//           </p>
//           <p className="flex flex-col gap-1 break-all sm:flex-row sm:gap-2">
//             <span className="font-semibold">ایمیل:</span>
//             <span>{user.email}</span>
//           </p>
//           <p className="flex flex-col gap-1 sm:flex-row sm:gap-2">
//             <span className="font-semibold">نقش:</span>
//             <span>{getRoleLabel(user.role)}</span>
//           </p>
//           <p className="flex flex-col gap-1 sm:flex-row sm:gap-2">
//             <span className="font-semibold">وضعیت:</span>
//             <span>{getStatusLabel(user.status)}</span>
//           </p>
//         </div>
//       </Card>
//     </div>
//   );
// }
// export default ProfilePage;
