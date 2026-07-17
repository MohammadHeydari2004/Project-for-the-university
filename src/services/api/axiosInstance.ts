import axios from "axios";

// ✅ ۱. اصلاح پورت پیش‌فرض برای هم‌خوانی با اسکریپت json-server در package.json
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:4003";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // ✅ ۲. افزودن Timeout برای جلوگیری از معلق ماندن درخواست‌ها
  timeout: 10000, // ۱۰ ثانیه
});

// ✅ ۳. Request Interceptor: لاگ کردن درخواست‌ها در محیط Development
if (import.meta.env.VITE_APP_ENV === "development") {
  axiosInstance.interceptors.request.use(
    (config) => {
      console.log(
        `🚀 [API Request] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
        config.data || config.params,
      );
      return config;
    },
    (error) => Promise.reject(error),
  );
}

// ✅ ۴. Response Interceptor: مدیریت سراسری خطاها و تولید پیام فارسی
axiosInstance.interceptors.response.use(
  (response) => {
    if (import.meta.env.VITE_APP_ENV === "development") {
      console.log(
        `✅ [API Response] ${response.status} ${response.config.url}`,
        response.data,
      );
    }
    return response;
  },
  (error) => {
    let errorMessage = "خطای ناشناخته‌ای در ارتباط با سرور رخ داد.";

    if (error.code === "ECONNABORTED" || error.message?.includes("timeout")) {
      errorMessage =
        "زمان درخواست به پایان رسید. لطفاً اتصال اینترنت خود را بررسی کنید.";
    } else if (error.code === "ERR_NETWORK" || !error.response) {
      errorMessage =
        "سرور در دسترس نیست. لطفاً از اجرای json-server مطمئن شوید.";
    } else if (error.response) {
      // خطاهای HTTP (مثل 404, 500)
      const status = error.response.status;
      const serverMessage =
        error.response.data?.message || error.response.data?.error;

      if (serverMessage) {
        errorMessage = serverMessage;
      } else if (status === 404) {
        errorMessage = "منبع موردنظر در سرور یافت نشد.";
      } else if (status === 500) {
        errorMessage = "خطای داخلی سرور رخ داد. لطفاً بعداً تلاش کنید.";
      } else if (status === 400) {
        errorMessage = "درخواست ارسال‌شده نامعتبر است.";
      }
    }

    if (import.meta.env.VITE_APP_ENV === "development") {
      console.error(
        `❌ [API Error] ${error.config?.url}:`,
        errorMessage,
        error,
      );
    }

    // تبدیل خطا به یک Error object استاندارد با پیام فارسی
    return Promise.reject(new Error(errorMessage));
  },
);

export default axiosInstance;

// import axios from "axios";

// const API_BASE_URL =
//   import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

// const axiosInstance = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// if (import.meta.env.VITE_APP_ENV === "development") {
//   // تنظیمات خاص محیط توسعه (مثلاً لاگ کردن درخواست‌ها)
// }

// export default axiosInstance;
