import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  User,
  Building,
  Home,
  Plus,
  MessageSquare,
  Phone,
  Search,
} from "lucide-react";
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
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building className="h-8 w-8 text-haven-blue ml-2" />
              <span className="text-2xl font-bold text-haven-blue font-arabic ml-2">
                سكني
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-haven-blue"
            >
              <Home className="h-5 w-5 ml-2" />
              {t("home")}
            </Link>
            <Link
              to="/listings"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-haven-blue"
            >
              <Building className="h-5 w-5 ml-2" />
              {t("listings")}
            </Link>
            <Link
              to="/add-housing"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-haven-blue"
            >
              <Plus className="h-5 w-5 ml-2" />
              {t("addHousing")}
            </Link>
            <Link
              to="/forum"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-haven-blue"
            >
              <MessageSquare className="h-5 w-5 ml-2" />
              {t("forum")}
            </Link>
            <Link
              to="/profile"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-haven-blue"
            >
              <User className="h-5 w-5 ml-2" />
              {t("profile")}
            </Link>
            <Link
              to="/contact"
              className="flex items-center text-sm font-medium text-gray-700 hover:text-haven-blue"
            >
              <Phone className="h-5 w-5 ml-2" />
              {t("contact")}
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="بحث..."
                className="border border-gray-300 rounded-lg py-2 pr-3 pl-10 focus:outline-none focus:ring-2 focus:ring-haven-blue"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-haven-blue" />
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-haven-blue hover:bg-gray-50"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50 w-64`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 left-4 p-2 rounded-md text-gray-700 hover:text-haven-blue hover:bg-gray-50"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="mt-16 space-y-4 px-4">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center text-base font-medium text-gray-700 hover:text-haven-blue"
          >
            <Home className="h-5 w-5 ml-2" />
            {t("home")}
          </Link>
          <Link
            to="/listings"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center text-base font-medium text-gray-700 hover:text-haven-blue"
          >
            <Building className="h-5 w-5 ml-2" />
            {t("listings")}
          </Link>
          <Link
            to="/add-housing"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center text-base font-medium text-gray-700 hover:text-haven-blue"
          >
            <Plus className="h-5 w-5 ml-2" />
            {t("addHousing")}
          </Link>
          <Link
            to="/forum"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center text-base font-medium text-gray-700 hover:text-haven-blue"
          >
            <MessageSquare className="h-5 w-5 ml-2" />
            {t("forum")}
          </Link>
          <Link
            to="/profile"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center text-base font-medium text-gray-700 hover:text-haven-blue"
          >
            <User className="h-5 w-5 ml-2" />
            {t("profile")}
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center text-base font-medium text-gray-700 hover:text-haven-blue"
          >
            <Phone className="h-5 w-5 ml-2" />
            {t("contact")}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
