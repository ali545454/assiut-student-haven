
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
              <span className="ml-2 text-lg font-bold">Assiut Student Haven</span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Connecting students with quality housing options in Assiut. 
              Our platform helps students find accommodation and build trusted 
              relationships with landlords.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/listings" className="text-sm text-gray-400 hover:text-white">
                  Browse Listings
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-sm text-gray-400 hover:text-white">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
          
          {/* For Students */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              For Students
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/how-it-works" className="text-sm text-gray-400 hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-sm text-gray-400 hover:text-white">
                  Safety Tips
                </Link>
              </li>
              <li>
                <Link to="/reviews" className="text-sm text-gray-400 hover:text-white">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-400">contact@assitutstudenthaven.eg</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-400">+20 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400" />
                <span className="ml-2 text-sm text-gray-400">
                  Assiut University Campus, Assiut, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} Assiut Student Haven. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
