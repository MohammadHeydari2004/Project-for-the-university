import App from "#/App.tsx";
import ErrorBoundary from "#/components/common/ErrorBoundary.tsx";
import ScrollToTop from "#/components/common/ScrollToTop.tsx";
import AuthProvider from "#/contexts/AuthProvider.tsx";
import { ToastProvider } from "#/contexts/ToastContext.tsx";
import "#/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// ✅ بررسی ایمن وجود عنصر root با پیام خطای واضح
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "عنصر root در صفحه یافت نشد. لطفاً فایل index.html را بررسی کنید.",
  );
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    {/* ۱. ErrorBoundary در بیرونی‌ترین لایه - همه خطاهای بحرانی را می‌گیرد */}
    <ErrorBoundary>
      {/* ۲. BrowserRouter برای مسیریابی */}
      <BrowserRouter>
        {/* ✅ ۳. ScrollToTop داخل Router - برای دسترسی به useLocation */}
        <ScrollToTop />
        {/* ✅ ۴. ToastProvider بیرون از AuthProvider - تا همه لایه‌ها به آن دسترسی داشته باشند */}
        <ToastProvider>
          {/* ۵. AuthProvider - برای مدیریت احراز هویت */}
          <AuthProvider>
            {/* ۶. App - اپلیکیشن اصلی */}
            <App />
          </AuthProvider>
        </ToastProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);

// import App from "#/App.tsx";
// import ErrorBoundary from "#/components/common/ErrorBoundary.tsx";
// import AuthProvider from "#/contexts/AuthProvider.tsx";
// import { ToastProvider } from "#/contexts/ToastContext.tsx";
// import "#/index.css";
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <ErrorBoundary>
//       <BrowserRouter>
//         <AuthProvider>
//           <ToastProvider>
//             <App />
//           </ToastProvider>
//         </AuthProvider>
//       </BrowserRouter>
//     </ErrorBoundary>
//   </React.StrictMode>,
// );
