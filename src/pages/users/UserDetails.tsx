import Card from "#/components/ui/Card.tsx";
import Modal from "#/components/ui/Modal.tsx";
import StatusChip from "#/components/ui/StatusChip.tsx";
import type { User } from "#/types/user.ts";
// ✅ ۱. Import توابع از Utils برای رعایت اصل DRY
import { getRoleLabel } from "#/utils/user.ts";

interface UserDetailsProps {
  isOpen: boolean;
  user: User | null;
  onClose: () => void;
}

function UserDetails({ isOpen, user, onClose }: UserDetailsProps) {
  if (!user) return null;

  return (
    <Modal isOpen={isOpen} title="جزئیات کاربر" onClose={onClose}>
      <Card noPadding>
        {/* ✅ ۲. هدر با آواتار برای UX بهتر */}
        <div className="flex items-center gap-4 border-b border-gray-100 bg-gray-50/50 px-6 py-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
            {user.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
            <p className="text-sm text-gray-500 break-all">{user.email}</p>
          </div>
        </div>

        {/* ✅ ۳. استفاده از Description List برای Semantic HTML و a11y بهتر */}
        <dl className="divide-y divide-gray-100">
          <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">شناسه کاربری</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 break-all font-mono bg-gray-50 p-2 rounded">
              {user.id}
            </dd>
          </div>
          <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">
              نام و نام خانوادگی
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {user.name}
            </dd>
          </div>
          <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">آدرس ایمیل</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 break-all">
              {user.email}
            </dd>
          </div>
          <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">نقش در سیستم</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {getRoleLabel(user.role)}
            </dd>
          </div>
          <div className="px-6 py-4 sm:grid sm:grid-cols-3 sm:gap-4">
            <dt className="text-sm font-medium text-gray-500">وضعیت حساب</dt>
            <dd className="mt-1 sm:col-span-2 sm:mt-0">
              {/* ✅ ۴. استفاده از StatusChip برای یکپارچگی Design System */}
              <StatusChip status={user.status} />
            </dd>
          </div>
        </dl>
      </Card>
    </Modal>
  );
}

export default UserDetails;

// import Card from "#/components/ui/Card.tsx";
// import Modal from "#/components/ui/Modal.tsx";
// import type { User } from "#/types/user.ts";

// interface UserDetailsProps {
//   isOpen: boolean;
//   user: User | null;
//   onClose: () => void;
// }

// const getRoleLabel = (role: string) => {
//   switch (role) {
//     case "admin":
//       return "مدیر";
//     case "teacher":
//       return "استاد";
//     case "student":
//       return "دانشجو";
//     default:
//       return role;
//   }
// };

// const getStatusLabel = (status: string) => {
//   switch (status) {
//     case "active":
//       return "فعال";
//     case "inactive":
//       return "غیرفعال";
//     default:
//       return status;
//   }
// };

// function UserDetails({ isOpen, user, onClose }: UserDetailsProps) {
//   if (!user) return null;

//   return (
//     <Modal isOpen={isOpen} title="جزئیات کاربر" onClose={onClose}>
//       <Card>
//         <div className="space-y-3 text-sm text-gray-700">
//           <p>
//             <span className="font-semibold">نام:</span> {user.name}
//           </p>
//           <p>
//             <span className="font-semibold">ایمیل:</span> {user.email}
//           </p>
//           <p>
//             <span className="font-semibold">نقش:</span>{" "}
//             {getRoleLabel(user.role)}
//           </p>
//           <p>
//             <span className="font-semibold">وضعیت:</span>{" "}
//             {getStatusLabel(user.status)}
//           </p>
//         </div>
//       </Card>
//     </Modal>
//   );
// }

// export default UserDetails;
