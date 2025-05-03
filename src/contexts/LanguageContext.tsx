
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  en: {
    // Navbar
    'home': 'Home',
    'listings': 'Listings',
    'about': 'About',
    'login': 'Login',
    'signup': 'Sign Up',
    
    // Hero
    'hero.title': 'Find Your Perfect Student Home in Assiut',
    'hero.description': 'Connect with trusted landlords offering quality housing options near Assiut University. Read reviews from other students and book your accommodation with confidence.',
    'hero.browse': 'Browse Listings',
    'hero.howItWorks': 'How It Works',
    
    // Featured Properties
    'featured.title': 'Featured Properties',
    'featured.description': 'Browse our top-rated student housing options near Assiut University',
    'featured.viewAll': 'View All Properties',
    
    // How It Works
    'howItWorks.title': 'How It Works',
    'howItWorks.description': 'Finding student housing in Assiut has never been easier',
    'howItWorks.step1.title': 'Find Housing',
    'howItWorks.step1.description': 'Browse our listings to find the perfect student accommodation near Assiut University.',
    'howItWorks.step2.title': 'Read Reviews',
    'howItWorks.step2.description': 'Check ratings and reviews from other students who have stayed at the property.',
    'howItWorks.step3.title': 'Contact Landlords',
    'howItWorks.step3.description': 'Message landlords directly through our platform to ask questions or arrange viewings.',
    'howItWorks.step4.title': 'Book Securely',
    'howItWorks.step4.description': 'Reserve your accommodation with our secure booking system and pay securely.',
    
    // Footer
    'footer.description': 'Connecting students with quality housing options in Assiut. Our platform helps students find accommodation and build trusted relationships with landlords.',
    'footer.quickLinks': 'Quick Links',
    'footer.forStudents': 'For Students',
    'footer.contactUs': 'Contact Us',
    'footer.rights': '© {year} Assiut Student Haven. All rights reserved.',
    'footer.terms': 'Terms of Service',
    'footer.privacy': 'Privacy Policy',
    
    // Listings
    'listings.title': 'Student Housing in Assiut',
    'listings.description': 'Find and compare the best accommodation options',
    'listings.search': 'Search',
    'listings.searchPlaceholder': 'Search by location or property name',
    'listings.priceRange': 'Price Range (EGP/month)',
    'listings.bedrooms': 'Bedrooms',
    'listings.any': 'Any',
    'listings.available': 'Available properties only',
    'listings.found': '{count} {count, plural, one {property} other {properties}} found',
    'listings.sortBy': 'Sort by: Price',
    'listings.noResults': 'No properties found matching your criteria.',
    'listings.clearFilters': 'Clear Filters',
  },
  ar: {
    // Navbar
    'home': 'الرئيسية',
    'listings': 'القوائم',
    'about': 'عن الموقع',
    'login': 'تسجيل الدخول',
    'signup': 'إنشاء حساب',
    
    // Hero
    'hero.title': 'ابحث عن سكنك الطلابي المثالي في أسيوط',
    'hero.description': 'تواصل مع المالكين الموثوق بهم الذين يقدمون خيارات سكن عالية الجودة بالقرب من جامعة أسيوط. اقرأ تقييمات من طلاب آخرين واحجز إقامتك بثقة.',
    'hero.browse': 'تصفح القوائم',
    'hero.howItWorks': 'كيف يعمل',
    
    // Featured Properties
    'featured.title': 'عقارات مميزة',
    'featured.description': 'تصفح خيارات الإسكان الطلابي الأعلى تقييمًا بالقرب من جامعة أسيوط',
    'featured.viewAll': 'عرض جميع العقارات',
    
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
    'footer.rights': '© {year} ملاذ طلاب أسيوط. جميع الحقوق محفوظة.',
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
  }
};

export const LanguageProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const t = (key: string): string => {
    const keys = key.split('.');
    let value = translations[language];
    
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
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
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
