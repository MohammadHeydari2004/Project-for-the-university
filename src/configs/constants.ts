// استفاده از ?? برای مدیریت دقیق‌تر مقادیر undefined و null
const PREFIX = import.meta.env.VITE_STORAGE_PREFIX ?? "educonnect_";

export const STORAGE_KEYS = {
  authUser: `${PREFIX}auth_user`,
  theme: `${PREFIX}theme`,
  language: `${PREFIX}language`,
} as const; // افزودن as const برای Immutability و Literal Types

// const PREFIX = import.meta.env.VITE_STORAGE_PREFIX || "educonnect_";

// export const STORAGE_KEYS = {
//   authUser: `${PREFIX}auth_user`,
//   theme: `${PREFIX}theme`,
//   language: `${PREFIX}language`,
// };
