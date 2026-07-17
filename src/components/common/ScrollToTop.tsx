import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * این کامپوننت هنگام تغییر مسیر (Route)، صفحه را به‌صورت خودکار به بالا اسکرول می‌کند.
 * این رفتار در اپلیکیشن‌های SPA استاندارد است و از حفظ شدن موقعیت اسکرول قبلی جلوگیری می‌کند.
 */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // اسکرول فوری به بالای صفحه با رفتار smooth برای UX بهتر
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // استفاده از instant به جای smooth برای جلوگیری از پرش بصری
    });
  }, [pathname]);

  return null;
}

export default ScrollToTop;
