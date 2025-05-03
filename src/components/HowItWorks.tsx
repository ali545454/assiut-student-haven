
import { Search, Star, Building, Calendar } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Find Housing",
    description: "Browse our listings to find the perfect student accommodation near Assiut University."
  },
  {
    icon: Star,
    title: "Read Reviews",
    description: "Check ratings and reviews from other students who have stayed at the property."
  },
  {
    icon: Building,
    title: "Contact Landlords",
    description: "Message landlords directly through our platform to ask questions or arrange viewings."
  },
  {
    icon: Calendar,
    title: "Book Securely",
    description: "Reserve your accommodation with our secure booking system and pay securely."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            Finding student housing in Assiut has never been easier
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
