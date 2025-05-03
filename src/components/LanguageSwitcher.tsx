
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleLanguage} 
      className="rounded-full"
      aria-label={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
    >
      <Languages className="h-5 w-5" />
    </Button>
  );
};

export default LanguageSwitcher;
