
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Building, Home, Plus, MessageSquare, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Search Bar - Left side in LTR, Right side in RTL */}
          <div className="flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="بحث..."
                className="border border-gray-300 rounded-lg py-2 pr-3 pl-10 focus:outline-none focus:ring-2 focus:ring-haven-blue"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="h-5 w-5 text-haven-blue" />
              </div>
            </div>
          </div>

          {/* Logo at the center */}
          <div className="flex-grow flex justify-center items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Building className="h-8 w-8 text-haven-blue ml-2" />
              <span className="text-2xl font-bold text-haven-blue font-arabic">
                سكني
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 md:space-x-reverse">
            <Link 
              to="/" 
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            >
              <Home className="ml-2 h-5 w-5" />
              {t('home')}
            </Link>
            <Link 
              to="/listings" 
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            >
              <Building className="ml-2 h-5 w-5" />
              {t('listings')}
            </Link>
            <Link 
              to="/add-housing" 
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            >
              <Plus className="ml-2 h-5 w-5" />
              {t('addHousing')}
            </Link>
            <Link 
              to="/forum" 
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            >
              <MessageSquare className="ml-2 h-5 w-5" />
              {t('forum')}
            </Link>
            <Link 
              to="/profile" 
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            >
              <User className="ml-2 h-5 w-5" />
              {t('profile')}
            </Link>
            <Link 
              to="/contact" 
              className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            >
              <Phone className="ml-2 h-5 w-5" />
              {t('contact')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-haven-blue hover:bg-gray-50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">فتح القائمة</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-3 space-y-1 shadow-lg animate-fade-in">
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <Home className="ml-2 h-5 w-5" />
            {t('home')}
          </Link>
          <Link
            to="/listings"
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <Building className="ml-2 h-5 w-5" />
            {t('listings')}
          </Link>
          <Link
            to="/add-housing"
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <Plus className="ml-2 h-5 w-5" />
            {t('addHousing')}
          </Link>
          <Link
            to="/forum"
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <MessageSquare className="ml-2 h-5 w-5" />
            {t('forum')}
          </Link>
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <User className="ml-2 h-5 w-5" />
            {t('profile')}
          </Link>
          <Link
            to="/contact"
            className="flex items-center px-4 py-2 text-base font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <Phone className="ml-2 h-5 w-5" />
            {t('contact')}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
