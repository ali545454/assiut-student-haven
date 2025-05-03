
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Rating from "@/components/Rating";
import { Building, BedDouble, Bath, SquareIcon } from "lucide-react";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  featured?: boolean;
}

const PropertyCard = ({ property, featured = false }: PropertyCardProps) => {
  const { id, title, imageUrl, location, price, priceUnit, bedrooms, bathrooms, area, rating, reviewCount } = property;
  
  return (
    <Link to={`/property/${id}`} className="block">
      <Card className={`overflow-hidden card-hover ${featured ? 'border-haven-green border-2' : ''}`}>
        <div className="relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
          {featured && (
            <div className="absolute top-2 right-2 bg-haven-green text-white px-2 py-1 rounded text-xs font-medium">
              Featured
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex items-center">
              <Rating value={rating} size={14} showValue />
              <span className="ml-1 text-xs text-white">({reviewCount} reviews)</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{title}</h3>
          
          <div className="flex items-center mt-1 text-gray-600">
            <Building size={14} />
            <span className="ml-1 text-sm line-clamp-1">{location}</span>
          </div>
          
          <div className="flex flex-wrap gap-3 my-3">
            <div className="flex items-center text-gray-700">
              <BedDouble size={16} />
              <span className="ml-1 text-sm">{bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <Bath size={16} />
              <span className="ml-1 text-sm">{bathrooms} {bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
            </div>
            
            <div className="flex items-center text-gray-700">
              <SquareIcon size={16} />
              <span className="ml-1 text-sm">{area} m²</span>
            </div>
          </div>
          
          <div className="mt-4 flex justify-between items-center">
            <div className="text-lg font-bold text-haven-blue">
              {price} EGP<span className="text-sm font-medium text-gray-500">/{priceUnit}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default PropertyCard;
