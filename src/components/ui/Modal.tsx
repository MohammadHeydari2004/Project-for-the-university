import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  children: ReactNode;
  onClose: () => void;
}

function Modal({ isOpen, title, children, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // ۱. ذخیره عنصری که قبل از باز شدن مودال فوکوس داشته است
    previousActiveElement.current = document.activeElement as HTMLElement;

    // ۲. قفل کردن اسکرول صفحه
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // ۳. فوکوس کردن روی مودال برای دسترسی‌پذیری
    requestAnimationFrame(() => {
      modalRef.current?.focus();
    });

    // ۴. مدیریت کلید Escape
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);

      // ۵. برگرداندن فوکوس به عنصر قبلی پس از بسته شدن
      previousActiveElement.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // استفاده از Portal برای رندر کردن مودال در بدنه اصلی صفحه
  return createPortal(
    <div
      ref={modalRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? "modal-title" : undefined}
      tabIndex={-1}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 outline-none sm:p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="w-full max-w-lg rounded-xl bg-white p-4 shadow-lg sm:p-6">
        <div className="mb-4 flex items-center justify-between">
          {title && (
            <h2
              id="modal-title"
              className="text-base font-semibold text-gray-800 sm:text-lg"
            >
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
            aria-label="بستن"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>,
    document.body,
  );
}

export default Modal;
// import { useEffect, type ReactNode } from "react";

// interface ModalProps {
//   isOpen: boolean;
//   title?: string;
//   children: ReactNode;
//   onClose: () => void;
// }

// function Modal({ isOpen, title, children, onClose }: ModalProps) {
//   useEffect(() => {
//     if (!isOpen) return;
//     const originalOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     const handleEscape = (e: KeyboardEvent) => {
//       if (e.key === "Escape") {
//         onClose();
//       }
//     };
//     document.addEventListener("keydown", handleEscape);
//     return () => {
//       document.body.style.overflow = originalOverflow;
//       document.removeEventListener("keydown", handleEscape);
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-3 sm:p-4"
//       onClick={(e) => {
//         if (e.target === e.currentTarget) {
//           onClose();
//         }
//       }}
//     >
//       <div className="w-full max-w-lg rounded-xl bg-white p-4 shadow-lg sm:p-6">
//         <div className="mb-4 flex items-center justify-between">
//           {title && (
//             <h2 className="text-base font-semibold text-gray-800 sm:text-lg">
//               {title}
//             </h2>
//           )}
//           <button
//             onClick={onClose}
//             className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
//             aria-label="بستن"
//           >
//             <svg
//               className="h-5 w-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//         </div>
//         <div>{children}</div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
