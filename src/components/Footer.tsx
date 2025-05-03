import { Link } from "react-router-dom";
import { Building, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div>
            <div className="flex items-center">
              <Building className="h-6 w-6" />
              <span className="ml-2 text-lg font-bold">منصة سكني للطلاب </span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              منصة سكني هي المنصة الأولى من نوعها في أسيوط لتأجير السكن الطلابي.
              نحن هنا لمساعدتك في إيجاد سكن طلابي مناسب لك، سواء كنت تبحث عن سكن
              للإيجار أو ترغب في تأجير سكنك الخاص.
              <br />
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              الروابط السريعة
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/listings"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  الشقق
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  to="/help"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  المساعدة
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              للطلاب
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  to="/how-it-works"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  كيفية استخدام المنصة
                </Link>
              </li>
              <li>
                <Link
                  to="/safety"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  الأمان
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  تقييمات السكن
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              تواصل معنا
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start ">
                <Mail className="h-5 w-5 text-gray-400 pl-1" />
                <span className="ml-2 text-sm text-gray-400 ">
                  contact@thqni.io
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400 pl-1" />
                <span className="ml-2 text-sm text-gray-400">
                  +20 123 456 7890
                </span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 pl-1" />
                <span className="ml-2 text-sm text-gray-400">
                  Assiut University Campus, Assiut, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} جميع الحقوق محفوظة لدي منصة سكني.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              شروط الاستخدام
            </a>
            <a href="#" className="text-gray-400 hover:text-white pr-2">
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
