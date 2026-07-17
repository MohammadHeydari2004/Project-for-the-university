import Button from "#/components/ui/Button.tsx";
import Modal from "#/components/ui/Modal.tsx";
import type { ReactNode } from "react";

interface ConfirmDialogProps {
  isOpen: boolean;
  title?: string;
  message?: ReactNode; // تغییر به ReactNode برای پشتیبانی از HTML و کامپوننت‌ها
  onConfirm: () => void;
  onClose: () => void;
  confirmText?: string; // امکان سفارشی‌سازی متن دکمه تأیید
  cancelText?: string; // امکان سفارشی‌سازی متن دکمه انصراف
  variant?: "danger" | "primary" | "warning"; // تغییر رنگ دکمه تأیید
  isLoading?: boolean; // جلوگیری از کلیک‌های مکرر در عملیات Async
  icon?: ReactNode; // آیکون هشدار سفارشی
}

function ConfirmDialog({
  isOpen,
  title = "تأیید عملیات",
  message = "آیا از انجام این عملیات مطمئن هستید؟",
  onConfirm,
  onClose,
  confirmText = "تأیید",
  cancelText = "انصراف",
  variant = "danger",
  isLoading = false,
  icon,
}: ConfirmDialogProps) {
  // آیکون پیش‌فرض هشدار (در صورت عدم ارسال آیکون سفارشی)
  const defaultIcon = (
    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
      <svg
        className="h-6 w-6 text-red-600"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    </div>
  );

  return (
    <Modal isOpen={isOpen} title={title} onClose={onClose}>
      <div className="text-center sm:text-right">
        <div className="flex justify-center sm:justify-start">
          {icon ?? defaultIcon}
        </div>

        <div className="mb-6 text-sm leading-relaxed text-gray-600">
          {message}
        </div>
      </div>

      <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
        <Button
          variant="secondary"
          onClick={onClose}
          disabled={isLoading}
          autoFocus // فوکوس روی انصراف برای جلوگیری از تایید تصادفی با Enter
        >
          {cancelText}
        </Button>
        <Button variant={variant} onClick={onConfirm} isLoading={isLoading}>
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
}

export default ConfirmDialog;
// import Button from "#/components/ui/Button.tsx";
// import Modal from "#/components/ui/Modal.tsx";

// interface ConfirmDialogProps {
//   isOpen: boolean;
//   title?: string;
//   message?: string;
//   onConfirm: () => void;
//   onClose: () => void;
// }

// function ConfirmDialog({
//   isOpen,
//   title = "تأیید عملیات",
//   message = "آیا از انجام این عملیات مطمئن هستید؟",
//   onConfirm,
//   onClose,
// }: ConfirmDialogProps) {
//   return (
//     <Modal isOpen={isOpen} title={title} onClose={onClose}>
//       <p className="mb-6 text-sm text-gray-600">{message}</p>
//       <div className="flex justify-end gap-2">
//         <Button variant="secondary" onClick={onClose}>
//           انصراف
//         </Button>
//         <Button variant="danger" onClick={onConfirm}>
//           تأیید
//         </Button>
//       </div>
//     </Modal>
//   );
// }

// export default ConfirmDialog;
