import { forwardRef, useId, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  description?: string; // برای نمایش متن راهنما زیر اینپوت
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      description,
      className = "",
      id: propId,
      required,
      ...props
    },
    ref,
  ) => {
    // تولید خودکار ID برای ارتباط بین label و input
    const generatedId = useId();
    const id = propId || generatedId;

    // تولید IDهای منحصر به فرد برای aria-describedby
    const errorId = error ? `${id}-error` : undefined;
    const descId = description ? `${id}-desc` : undefined;

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
            {required && (
              <span className="mr-1 text-red-500" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          aria-invalid={!!error}
          aria-describedby={
            [errorId, descId].filter(Boolean).join(" ") || undefined
          }
          required={required}
          className={`w-full rounded-lg border px-3 py-2 text-sm transition-colors outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-100"
              : "border-gray-300 focus:border-blue-500 focus:ring-blue-100"
          } ${
            props.disabled
              ? "cursor-not-allowed bg-gray-100 text-gray-500"
              : "bg-white text-gray-900"
          } ${className}`}
          {...props}
        />

        {/* نمایش پیام خطا با role="alert" برای اطلاع‌رسانی به صفحه‌خوان‌ها */}
        {error && (
          <span id={errorId} className="text-xs text-red-600" role="alert">
            {error}
          </span>
        )}

        {/* نمایش متن راهنما در صورت عدم وجود خطا */}
        {!error && description && (
          <span id={descId} className="text-xs text-gray-500">
            {description}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
// import { forwardRef, type InputHTMLAttributes } from "react";

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//   label?: string;
//   error?: string;
// }

// const Input = forwardRef<HTMLInputElement, InputProps>(
//   ({ label, error, className = "", ...props }, ref) => {
//     return (
//       <div className="flex flex-col gap-1">
//         {label && (
//           <label className="text-sm font-medium text-gray-700">{label}</label>
//         )}
//         <input
//           ref={ref}
//           className={`rounded-lg border px-3 py-2 text-sm outline-hidden focus:border-blue-500 ${error ? "border-red-500" : "border-gray-300"} ${className}`}
//           {...props}
//         />
//         {error && <span className="text-xs text-red-600">{error}</span>}
//       </div>
//     );
//   },
// );

// Input.displayName = "Input";

// export default Input;
