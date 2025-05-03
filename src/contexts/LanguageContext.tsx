
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  ar: {
    // Navbar
    'home': 'الرئيسية',
    'listings': 'الشقق المتاحة',
    'addHousing': 'أضف سكن',
    'forum': 'المنتدى الطلابي',
    'profile': 'الملف الشخصي',
    'contact': 'تواصل معنا',
    'about': 'عن الموقع',
    'login': 'تسجيل الدخول',
    'signup': 'إنشاء حساب',
    'search': 'بحث',
    
    // Hero
    'hero.title': 'ابحث عن سكنك الطلابي المثالي في أسيوط',
    'hero.description': 'تواصل مع المالكين الموثوق بهم الذين يقدمون خيارات سكن عالية الجودة بالقرب من جامعة أسيوط. اقرأ تقييمات من طلاب آخرين واحجز إقامتك بثقة.',
    'hero.browse': 'تصفح الشقق',
    'hero.howItWorks': 'كيف يعمل',
    
    // Featured Properties
    'featured.title': 'شقق مميزة',
    'featured.description': 'تصفح خيارات الإسكان الطلابي الأعلى تقييمًا بالقرب من جامعة أسيوط',
    'featured.viewAll': 'عرض جميع الشقق',
    
    // How It Works
    'howItWorks.title': 'كيف يعمل',
    'howItWorks.description': 'العثور على سكن طلابي في أسيوط لم يكن أسهل من قبل',
    'howItWorks.step1.title': 'ابحث عن سكن',
    'howItWorks.step1.description': 'تصفح قوائمنا للعثور على السكن الطلابي المثالي بالقرب من جامعة أسيوط.',
    'howItWorks.step2.title': 'اقرأ التقييمات',
    'howItWorks.step2.description': 'تحقق من التقييمات والمراجعات من الطلاب الآخرين الذين أقاموا في العقار.',
    'howItWorks.step3.title': 'تواصل مع المالكين',
    'howItWorks.step3.description': 'راسل المالكين مباشرة من خلال منصتنا لطرح الأسئلة أو ترتيب المعاينات.',
    'howItWorks.step4.title': 'احجز بأمان',
    'howItWorks.step4.description': 'احجز إقامتك من خلال نظام الحجز الآمن الخاص بنا وادفع بأمان.',
    
    // Footer
    'footer.description': 'ربط الطلاب بخيارات سكن عالية الجودة في أسيوط. تساعد منصتنا الطلاب في العثور على سكن وبناء علاقات موثوقة مع المالكين.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.forStudents': 'للطلاب',
    'footer.contactUs': 'اتصل بنا',
    'footer.rights': '© {year} سكني - أسيوط. جميع الحقوق محفوظة.',
    'footer.terms': 'شروط الخدمة',
    'footer.privacy': 'سياسة الخصوصية',
    
    // Listings
    'listings.title': 'سكن الطلاب في أسيوط',
    'listings.description': 'ابحث وقارن بين أفضل خيارات السكن',
    'listings.search': 'بحث',
    'listings.searchPlaceholder': 'ابحث حسب الموقع أو اسم العقار',
    'listings.priceRange': 'نطاق السعر (جنيه/شهر)',
    'listings.bedrooms': 'غرف النوم',
    'listings.any': 'أي',
    'listings.available': 'العقارات المتاحة فقط',
    'listings.found': 'تم العثور على {count} {count, plural, one {عقار} other {عقارات}}',
    'listings.sortBy': 'الترتيب حسب: السعر',
    'listings.noResults': 'لم يتم العثور على عقارات تطابق المعايير الخاصة بك.',
    'listings.clearFilters': 'مسح الفلاتر',
    
    // Login Page
    'login.welcome': 'أهلاً بك مجدداً في منصة سكني',
    'login.email': 'البريد الإلكتروني',
    'login.emailPlaceholder': 'أدخل بريدك الإلكتروني',
    'login.password': 'كلمة المرور',
    'login.passwordPlaceholder': 'أدخل كلمة المرور',
    'login.loading': 'جاري تسجيل الدخول...',
    'login.noAccount': 'ليس لديك حساب؟',
    'login.forgotPassword': 'نسيت كلمة المرور؟',
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language] = useState<Language>('ar');
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Fallback to the key if translation not found
      }
    }
    
    return value as string;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage: () => {}, t }}>
      <div dir="rtl">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
