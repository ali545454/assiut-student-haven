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
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-7xl">
          {t("منصة سكني")}
          <span className="text-haven-yellow">
            {" "}
            {t("لإيجار السكن الطلابي")}
          </span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-white max-w-3xl mx-auto">
          {t("المنصة الأولى من نوعها في أسيوط لتأجير السكن الطلابي")}
          <br />
          {t("تساعدك في إيجاد سكن طلابي مناسب لك")}
          <br />
          {t("تساعدك في تأجير سكنك الطلابي")}
          <br />
          {t("تساعدك في التواصل مع الطلاب")}
          <br />
          {t("تساعدك في التواصل مع أصحاب السكن")}
          <br />
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/listings">
            <Button className="bg-white text-haven-blue hover:bg-gray-100 font-semibold text-lg px-8 py-6">
              {t("البحث عن سكن")}
            </Button>
          </Link>
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-6"
          >
            {t("كيفية استخدام المنصة؟")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
