
import { Search, Star, Building, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Search,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.description')
    },
    {
      icon: Star,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.description')
    },
    {
      icon: Building,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.description')
    },
    {
      icon: Calendar,
      title: t('howItWorks.step4.title'),
      description: t('howItWorks.step4.description')
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t('howItWorks.title')}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            {t('howItWorks.description')}
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-haven-blue bg-opacity-10 text-haven-blue">
                <step.icon size={24} />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
