import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title?: ReactNode; // تغییر به ReactNode برای امکان استفاده از کامپوننت‌های دیگر در عنوان
  actions?: ReactNode; // برای قرار دادن دکمه‌ها در کنار عنوان
  footer?: ReactNode; // برای فوتر کارت (مثل دکمه‌های Save/Cancel)
  className?: string; // کلاس‌های سفارشی برای کانتینر اصلی
  bodyClassName?: string; // کلاس‌های سفارشی برای بدنه کارت
  noPadding?: boolean; // حذف پدینگ بدنه (مناسب برای جدول‌ها)
}

function Card({
  children,
  title,
  actions,
  footer,
  className = "",
  bodyClassName = "",
  noPadding = false,
}: CardProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xs ${className}`}
    >
      {(title || actions) && (
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 px-5 py-4">
          {title && (
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          )}
          {actions && (
            <div className="flex shrink-0 items-center gap-2">{actions}</div>
          )}
        </div>
      )}

      <div className={noPadding ? "" : `p-5 ${bodyClassName}`}>{children}</div>

      {footer && (
        <div className="border-t border-gray-100 bg-gray-50/50 px-5 py-4 rounded-b-xl">
          {footer}
        </div>
      )}
    </div>
  );
}

export default Card;
// import type { ReactNode } from "react";

// interface CardProps {
//   children: ReactNode;
//   title?: string;
// }

// function Card({ children, title }: CardProps) {
//   return (
//     <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-xs">
//       {title && (
//         <h3 className="mb-4 text-lg font-semibold text-gray-800">{title}</h3>
//       )}
//       {children}
//     </div>
//   );
// }

// export default Card;
