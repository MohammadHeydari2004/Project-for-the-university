import Header from "#/components/common/Header.tsx";
import Sidebar from "#/components/common/Sidebar.tsx";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  // ✅ ۱. بستن خودکار سایدبار در موبایل هنگام تغییر مسیر (Route Change)
  // الگوی استاندارد React 19: تنظیم State در زمان Render به جای useEffect
  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setIsSidebarOpen(false);
  }

  // ✅ ۲. قفل کردن اسکرول Body زمانی که سایدبار در موبایل باز است
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ✅ ۳. لینک پرش به محتوا برای دسترسی‌پذیری (a11y) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:right-2 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        پرش به محتوای اصلی
      </a>

      <Header
        isSidebarOpen={isSidebarOpen}
        // ✅ ۴. استفاده از prevState برای جلوگیری از Stale Closure
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
      />

      <div className="flex min-h-[calc(100vh-64px)]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <main
          id="main-content"
          className="flex-1 p-3 sm:p-4 md:p-6"
          tabIndex={-1} // برای فوکوس شدن توسط لینک Skip
        >
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}

export default MainLayout;

// import Header from "#/components/common/Header.tsx";
// import Sidebar from "#/components/common/Sidebar.tsx";
// import type { ReactNode } from "react";
// import { useState } from "react";

// interface MainLayoutProps {
//   children: ReactNode;
// }

// function MainLayout({ children }: MainLayoutProps) {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header
//         isSidebarOpen={isSidebarOpen}
//         onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
//       />
//       <div className="flex min-h-[calc(100vh-64px)]">
//         <Sidebar
//           isOpen={isSidebarOpen}
//           onClose={() => setIsSidebarOpen(false)}
//         />
//         <main className="flex-1 p-3 sm:p-4 md:p-6">
//           <div className="mx-auto max-w-7xl">{children}</div>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default MainLayout;
