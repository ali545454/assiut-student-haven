
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Building, LogIn } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

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
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Building className="h-8 w-8 text-haven-blue" />
              <span className="ml-2 text-xl font-bold text-haven-blue">
                Assiut Student Haven
              </span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            >
              {t('home')}
            </Link>
            <Link 
              to="/listings" 
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            >
              {t('listings')}
            </Link>
            <Link 
              to="/about" 
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            >
              {t('about')}
            </Link>
            <LanguageSwitcher />
            <Button variant="ghost" className="flex items-center gap-2">
              <LogIn size={18} />
              <span>{t('login')}</span>
            </Button>
            <Button className="bg-haven-blue hover:bg-haven-blue/90 text-white flex items-center gap-2">
              <User size={18} />
              <span>{t('signup')}</span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-haven-blue hover:bg-gray-50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
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
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('home')}
          </Link>
          <Link
            to="/listings"
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('listings')}
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('about')}
          </Link>
          <div className="px-4 py-2 flex flex-col space-y-2">
            <Button variant="ghost" className="flex justify-center items-center gap-2 w-full">
              <LogIn size={18} />
              <span>{t('login')}</span>
            </Button>
            <Button className="bg-haven-blue hover:bg-haven-blue/90 text-white flex justify-center items-center gap-2 w-full">
              <User size={18} />
              <span>{t('signup')}</span>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
