# 🎓 EduConnect - سامانه مدیریت آموزشی

<div align="center">

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38B2AC?style=for-the-badge&logo=tailwind-css)

**سامانه جامع مدیریت ارتباط اساتید و دانشجویان**

[ویژگی‌ها](#features) • [نصب و راه‌اندازی](#install) • [ساختار پروژه](#structure) • [درباره پروژه](#about)

</div>

---

<a id="about"></a>

## 📖 درباره پروژه

**EduConnect** یک پلتفرم مدیریت آموزشی مدرن و واکنش‌گرا است که با استفاده از جدیدترین تکنولوژی‌های وب توسعه یافته است. این سامانه امکان مدیریت کلاس‌ها، تکالیف، حضور و غیاب و اطلاعیه‌ها را برای سه نقش اصلی **مدیر**، **استاد** و **دانشجو** فراهم می‌کند.

---

<a id="features"></a>

## ✨ ویژگی‌ها

### 🎯 مدیریت نقش‌ها (RBAC)

- **مدیر (Admin)**: دسترسی کامل به تمام بخش‌ها، مدیریت کاربران و کلاس‌ها
- **استاد (Teacher)**: مدیریت کلاس‌ها، تکالیف، حضور و غیاب و نمره‌دهی
- **دانشجو (Student)**: مشاهده تکالیف، ارسال پاسخ و پیگیری وضعیت حضور

### 📚 مدیریت کلاس‌ها

- ایجاد، ویرایش و حذف کلاس‌ها
- تخصیص استاد و دانشجو به کلاس
- مدیریت ظرفیت و وضعیت کلاس (فعال/غیرفعال)
- مشاهده جزئیات کامل هر کلاس

### 📝 سیستم تکالیف

- ایجاد تکالیف با ددلاین مشخص
- ارسال پاسخ توسط دانشجویان
- نمره‌دهی و بازخورد توسط اساتید
- پیگیری وضعیت تکالیف (ارسال شده، نمره داده شده، در انتظار)

### ✅ حضور و غیاب

- ثبت حضور و غیاب برای هر جلسه
- عملیات گروهی (حاضر/غایب کردن همه)
- مشاهده آمار حضور هر دانشجو
- نمودار وضعیت حضور و غیاب

### 📢 سیستم اطلاعیه‌ها

- ارسال اطلاعیه‌های عمومی و کلاسی
- هدف‌گذاری بر اساس نقش یا کلاس خاص
- پیگیری وضعیت مشاهده اطلاعیه‌ها
- فیلتر هوشمند اطلاعیه‌ها بر اساس دسترسی کاربر

### 📊 داشبورد تحلیلی

- داشبورد اختصاصی برای هر نقش
- نمودارهای تعاملی با Recharts و Nivo
- آمار کلی سیستم، کلاس‌ها، تکالیف و جلسات
- نمودار توزیع نقش‌ها و وضعیت حضور

### 🎨 رابط کاربری مدرن

- طراحی کاملاً واکنش‌گرا (Responsive)
- پشتیبانی کامل از RTL (راست‌چین)
- فونت فارسی Vazirmatn
- تاریخ شمسی با فرمت‌دهی خودکار
- دسترسی‌پذیری (a11y) مطابق استانداردهای WCAG

### 🔐 امنیت و اعتبارسنجی

- سیستم احراز هویت با JWT-ready architecture
- اعتبارسنجی سمت کلاینت با React Hook Form
- محافظت از مسیرها با Protected Routes و Role Guards
- مدیریت خطاهای سراسری با Error Boundary

---

## 🛠 تکنولوژی‌ها

### Frontend

| تکنولوژی           | نسخه | کاربرد            |
| ------------------ | ---- | ----------------- |
| ⚛️ React           | 19.2 | کتابخانه UI       |
| 🔷 TypeScript      | 6.0  | Type Safety       |
| ⚡ Vite            | 8.0  | Build Tool        |
| 🎨 Tailwind CSS    | 4.3  | Styling           |
| 🧭 React Router    | 7.16 | Routing           |
| 📊 Recharts        | 3.8  | نمودارها          |
| 📈 Nivo            | 0.99 | نمودارهای پیشرفته |
| 📝 React Hook Form | 7.77 | مدیریت فرم‌ها     |
| 🌐 Axios           | 1.16 | HTTP Client       |

### Backend (Development)

| تکنولوژی       | نسخه     | کاربرد                 |
| -------------- | -------- | ---------------------- |
| 🗄️ JSON Server | 1.0-beta | REST API شبیه‌سازی شده |

### ابزارهای توسعه

| ابزار        | کاربرد          |
| ------------ | --------------- |
| 🔍 ESLint 10 | Linting کد      |
| 🎨 Prettier  | Format کد       |
| 📦 npm       | Package Manager |

---

<a id="install"></a>

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها

- **Node.js** نسخه 20.19 یا بالاتر
- **npm** نسخه 10 یا بالاتر

### مراحل نصب

```bash
# 1. کلون کردن پروژه
git clone git clone https://github.com/MohammadHeydari2004/Project-for-the-university.git
cd educonnect

# 2. نصب وابستگی‌ها
npm install

# 3. تنظیم متغیرهای محیطی
cp .env.example .env

# 4. اجرای JSON Server (در یک ترمینال جداگانه)
npm run server

# 5. اجرای Development Server (در ترمینال دیگر)
npm run dev
```

پس از اجرای موفق، اپلیکیشن در آدرس `http://localhost:5173` در دسترس خواهد بود.

### حساب‌های آزمایشی پیش‌فرض

| نقش       | ایمیل              | رمز عبور |
| --------- | ------------------ | -------- |
| 👑 مدیر   | `admin@edu.com`    | `123456` |
| 👨‍🏫 استاد  | `teacher1@edu.com` | `123456` |
| 🎓 دانشجو | `student1@edu.com` | `123456` |

---

<a id="structure"></a>

## 📁 ساختار پروژه

```
educonnect/
├── public/                    # فایل‌های استاتیک
├── src/
│   ├── components/           # کامپوننت‌های قابل استفاده مجدد
│   │   ├── common/          # کامپوننت‌های عمومی (Header, Sidebar, Loading)
│   │   └── ui/              # کامپوننت‌های UI (Button, Card, Modal, Table)
│   ├── configs/             # تنظیمات سراسری
│   ├── contexts/            # Context API (Auth, Toast)
│   ├── hooks/               # Custom Hooks
│   ├── layouts/             # Layout اصلی اپلیکیشن
│   ├── pages/               # صفحات اپلیکیشن
│   │   ├── announcements/   # اطلاعیه‌ها
│   │   ├── assignments/     # تکالیف و پاسخ‌ها
│   │   ├── attendance/      # حضور و غیاب
│   │   ├── classes/         # کلاس‌ها و جلسات
│   │   ├── dashboard/       # داشبوردهای نقش‌ها
│   │   ├── errors/          # صفحات خطا (404, 403)
│   │   ├── profile/         # پروفایل کاربر
│   │   └── users/           # مدیریت کاربران
│   ├── routes/              # Protected Routes و Role Guards
│   ├── services/            # لایه API و ارتباط با Backend
│   │   └── api/            # Axios Instance و Base API
│   ├── types/               # TypeScript Type Definitions
│   ├── utils/               # توابع کمکی
│   ├── App.tsx             # کامپوننت اصلی و Routing
│   ├── main.tsx            # نقطه ورود اپلیکیشن
│   └── index.css           # استایل‌های سراسری
├── db.json                  # دیتابیس JSON Server
├── .env.example            # نمونه متغیرهای محیطی
├── eslint.config.js        # تنظیمات ESLint
├── postcss.config.js       # تنظیمات PostCSS
├── tsconfig.json           # تنظیمات TypeScript
├── tsconfig.app.json       # تنظیمات TypeScript برای App
├── tsconfig.node.json      # تنظیمات TypeScript برای Node
├── vite.config.ts          # تنظیمات Vite
└── package.json            # وابستگی‌ها و اسکریپت‌ها
```

---

## 🎭 نقش‌ها و دسترسی‌ها

### 👑 مدیر (Admin)

- ✅ مشاهده و مدیریت تمام کاربران
- ✅ ایجاد، ویرایش و حذف کلاس‌ها
- ✅ تخصیص استاد به کلاس
- ✅ مدیریت حضور و غیاب تمام کلاس‌ها
- ✅ ارسال اطلاعیه‌های عمومی با هدف‌گذاری نقش
- ✅ مشاهده داشبورد تحلیلی کامل

### 👨‍🏫 استاد (Teacher)

- ✅ مشاهده کلاس‌های تحت تدریس
- ✅ ایجاد و مدیریت تکالیف برای کلاس‌های خود
- ✅ نمره‌دهی و بازخورد به پاسخ‌های دانشجویان
- ✅ ثبت حضور و غیاب برای جلسات کلاس‌های خود
- ✅ ارسال اطلاعیه برای کلاس‌های تحت تدریس
- ✅ مشاهده داشبورد اختصاصی

### 🎓 دانشجو (Student)

- ✅ مشاهده کلاس‌های ثبت‌نام شده
- ✅ مشاهده تکالیف و ارسال پاسخ
- ✅ ویرایش پاسخ تا قبل از ددلاین
- ✅ مشاهده وضعیت حضور و غیاب خود
- ✅ مشاهده اطلاعیه‌های مرتبط
- ✅ مشاهده داشبورد اختصاصی با نمودار حضور

---

## 📊 ویژگی‌های فنی برجسته

### 🎯 Performance Optimization

- استفاده از `useMemo` و `useCallback` برای جلوگیری از re-render های غیرضروری
- استفاده از `Map` و `Set` برای دسترسی O(1) به جای آرایه‌ها
- Code Splitting خودکار با Vite
- Optimistic UI Updates برای تجربه کاربری روان

### 🔒 Security Best Practices

- اعتبارسنجی سمت کلاینت با React Hook Form
- محافظت از مسیرها با Role-Based Access Control
- حذف اطلاعات حساس (مانند رمز عبور) قبل از ذخیره در LocalStorage
- مدیریت خطاهای سراسری با Error Boundary

### ♿ Accessibility (a11y)

- استفاده از Semantic HTML
- پشتیبانی کامل از صفحه‌خوان‌ها با `aria-*` attributes
- مدیریت Focus برای مودال‌ها و dropdown ها
- پشتیبانی از کیبورد برای تمام تعاملات

### 🎨 UI/UX Excellence

- طراحی کاملاً RTL با فونت Vazirmatn
- تاریخ شمسی با فرمت‌دهی خودکار
- انیمیشن‌ها و transitions روان
- واکنش‌گرا برای تمام اندازه‌های صفحه
- Dark mode ready architecture

---

## 🔧 اسکریپت‌های موجود

```bash
# اجرای Development Server
npm run dev

# اجرای JSON Server (Backend)
npm run server

# Build برای Production
npm run build

# پیش‌نمایش Build Production
npm run preview

# بررسی Lint
npm run lint
```

---

## 🌐 متغیرهای محیطی

فایل `.env.example` را به `.env` کپی کنید و مقادیر را تنظیم کنید:

```bash
# آدرس API
VITE_API_BASE_URL=http://localhost:4003

# محیط اجرا (development | production | test)
VITE_APP_ENV=development

# پیشوند ذخیره‌سازی در LocalStorage
VITE_STORAGE_PREFIX=educonnect_dev_
```

---

<!-- ## 📸 اسکرین‌شات‌ها

<details>
<summary>📷 مشاهده اسکرین‌شات‌ها</summary>

### صفحه ورود

![Login Page](docs/screenshots/login.png)

### داشبورد مدیر

![Admin Dashboard](docs/screenshots/admin-dashboard.png)

### داشبورد استاد

![Teacher Dashboard](docs/screenshots/teacher-dashboard.png)

### داشبورد دانشجو

![Student Dashboard](docs/screenshots/student-dashboard.png)

### مدیریت کلاس‌ها

![Classes Management](docs/screenshots/classes.png)

### حضور و غیاب

![Attendance](docs/screenshots/attendance.png)

### تکالیف

![Assignments](docs/screenshots/assignments.png)

### اطلاعیه‌ها

![Announcements](docs/screenshots/announcements.png)

</details> -->

---

## 🗺️ نقشه راه (Roadmap)

### نسخه فعلی (v3.0.0)

- ✅ سیستم کامل مدیریت کلاس‌ها
- ✅ سیستم تکالیف و نمره‌دهی
- ✅ حضور و غیاب با نمودارهای تحلیلی
- ✅ سیستم اطلاعیه‌ها با فیلتر هوشمند
- ✅ داشبوردهای اختصاصی برای هر نقش

### نسخه‌های آینده

- 🔜 سیستم چت بین استاد و دانشجو
- 🔜 آپلود فایل برای تکالیف
- 🔜 تقویم آموزشی
- 🔜 سیستم آزمون آنلاین
- 🔜 Dark Mode

---

## 🤝 مشارکت در پروژه

مشارکت شما بسیار ارزشمند است! برای مشارکت:

1. پروژه را Fork کنید
2. یک Branch جدید ایجاد کنید (`git checkout -b feature/AmazingFeature`)
3. تغییرات خود را Commit کنید (`git commit -m 'Add some AmazingFeature'`)
4. Branch را Push کنید (`git push origin feature/AmazingFeature`)
5. یک Pull Request باز کنید

### راهنمای توسعه

- از **TypeScript** برای تمام کدهای جدید استفاده کنید
- از **ESLint** و **Prettier** برای فرمت کد استفاده کنید
- برای کامپوننت‌های جدید از الگوی **Functional Components** استفاده کنید
- تمام متون رابط کاربری باید **فارسی** باشند
- از **کامنت‌های فارسی** برای توضیح منطق پیچیده استفاده کنید

---

## 👥 تیم توسعه

- **توسعه‌دهنده اصلی**: [محمد حیدری](https://github.com/MohammadHeydari2004)
- **طراح UI/UX**: [محمد حیدری](https://github.com/MohammadHeydari2004)

---

## 📞 پشتیبانی

اگر سوالی دارید یا با مشکلی مواجه شدید:

- 📧 ایمیل: [mh419421@gmail.com](mailto:mh419421@gmail.com)
- 🐛 گزارش باگ: [GitHub Issues](https://github.com/MohammadHeydari2004/Project-for-the-university/issues)

---

<div align="center">

**ساخته شده با ❤️ برای جامعه آموزشی ایران**

[⭐ Star this repo](https://github.com/MohammadHeydari2004/Project-for-the-university) اگر این پروژه برایتان مفید بود!

</div>
