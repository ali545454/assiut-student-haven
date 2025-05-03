import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturedProperties = () => {
  // Get featured properties
  const featuredProperties = properties.filter((property) => property.featured);
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{t("شقق مميزة")}</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            {t("تصفح الشقق المميزة المتاحة للإيجار الآن")}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} featured />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/listings"
            className="inline-block px-6 py-3 border border-haven-blue text-haven-blue font-medium rounded-md hover:bg-haven-blue hover:text-white transition-colors"
          >
            {t("عرض جميع الشقق")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
