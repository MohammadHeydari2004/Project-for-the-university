export interface AnnouncementFormErrors {
  title?: string;
  content?: string;
  form?: string;
}

export function validateAnnouncementForm(values: {
  title: string;
  content: string;
}): AnnouncementFormErrors {
  const errors: AnnouncementFormErrors = {};
  const title = values.title.trim();
  const content = values.content.trim();

  // ✅ ۱. اعتبارسنجی دقیق عنوان
  if (!title) {
    errors.title = "عنوان اطلاعیه الزامی است.";
  } else if (title.length < 3) {
    errors.title = "عنوان باید حداقل ۳ کاراکتر باشد.";
  } else if (title.length > 100) {
    errors.title = "عنوان نباید بیشتر از ۱۰۰ کاراکتر باشد.";
  }

  // ✅ ۲. اعتبارسنجی دقیق محتوا
  if (!content) {
    errors.content = "محتوای اطلاعیه الزامی است.";
  } else if (content.length < 10) {
    errors.content = "محتوا باید حداقل ۱۰ کاراکتر باشد.";
  }

  // ✅ ۳. تولید پیام خطای کلی (برای سازگاری با کد فعلی AnnouncementForm.tsx)
  if (errors.title || errors.content) {
    errors.form = "لطفاً خطاهای فرم را برطرف کنید.";
  }

  return errors;
}

// export interface AnnouncementFormErrors {
//   title?: string;
//   content?: string;
//   form?: string;
// }

// export function validateAnnouncementForm(values: {
//   title: string;
//   content: string;
// }): AnnouncementFormErrors {
//   const errors: AnnouncementFormErrors = {};
//   const title = values.title.trim();
//   const content = values.content.trim();

//   // ✅ ۱. اعتبارسنجی دقیق عنوان
//   if (!title) {
//     errors.title = "عنوان اطلاعیه الزامی است.";
//   } else if (title.length < 3) {
//     errors.title = "عنوان باید حداقل ۳ کاراکتر باشد.";
//   } else if (title.length > 100) {
//     errors.title = "عنوان نباید بیشتر از ۱۰۰ کاراکتر باشد.";
//   }

//   // ✅ ۲. اعتبارسنجی دقیق محتوا
//   if (!content) {
//     errors.content = "محتوای اطلاعیه الزامی است.";
//   } else if (content.length < 10) {
//     errors.content = "محتوا باید حداقل ۱۰ کاراکتر باشد.";
//   }

//   // ✅ ۳. تولید پیام خطای کلی (برای سازگاری با کد فعلی AnnouncementForm.tsx)
//   if (errors.title || errors.content) {
//     errors.form = "لطفاً خطاهای فرم را برطرف کنید.";
//   }

//   return errors;
// }

// export interface AnnouncementFormErrors {
//   title?: string;
//   content?: string;
//   form?: string;
// }

// export function validateAnnouncementForm(values: {
//   title: string;
//   content: string;
// }): AnnouncementFormErrors {
//   const errors: AnnouncementFormErrors = {};
//   if (!values.title.trim() || !values.content.trim()) {
//     errors.form = "عنوان و محتوا الزامی است.";
//   }
//   return errors;
// }
