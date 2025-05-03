
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <div className="relative bg-haven-blue">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover opacity-20"
          src="https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Students in Assiut"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {t('hero.title')}
        </h1>
        <p className="mt-6 text-xl text-white max-w-3xl">
          {t('hero.description')}
        </p>
        <div className="mt-10 flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
          <Link to="/listings">
            <Button className="bg-white text-haven-blue hover:bg-gray-100 font-semibold text-lg px-8 py-6">
              {t('hero.browse')}
            </Button>
          </Link>
          <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6">
            {t('hero.howItWorks')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
