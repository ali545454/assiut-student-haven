
import { useParams } from "react-router-dom";
import { useState } from "react";
import { properties, reviews, users } from "@/data/properties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Rating from "@/components/Rating";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Building,
  BedDouble,
  Bath,
  SquareIcon,
  CheckCircle2,
  Calendar,
  Mail,
  Phone,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find the property based on id
  const property = properties.find((p) => p.id === id);
  
  // Find the landlord based on property
  const landlord = property ? users.find((u) => u.id === property.landlordId) : null;
  
  // Find reviews for the property
  const propertyReviews = reviews.filter((r) => r.propertyId === id);
  
  if (!property || !landlord) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Property not found</h1>
          <Button className="mt-4" asChild>
            <a href="/listings">Back to Listings</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Property details */}
          <div className="w-full lg:w-2/3">
            {/* Image gallery */}
            <div className="relative">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img
                  src={property.images[currentImageIndex]}
                  alt={property.title}
                  className="object-cover w-full h-[400px]"
                />
              </div>
              <button 
                onClick={prevImage} 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {property.images.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                  />
                ))}
              </div>
            </div>

            {/* Property title and rating */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{property.title}</h1>
                <div className="flex items-center">
                  <Rating value={property.rating} size={18} showValue />
                  <span className="ml-1 text-sm text-gray-600">({property.reviewCount} reviews)</span>
                </div>
              </div>
              
              <div className="flex items-center mt-2 text-gray-600">
                <Building size={18} />
                <span className="ml-1">{property.location}</span>
              </div>
            </div>

            {/* Property features */}
            <div className="mt-6 flex flex-wrap gap-6">
              <div className="flex items-center">
                <BedDouble size={20} className="text-gray-500" />
                <span className="ml-2 text-gray-700">{property.bedrooms} {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
              </div>
              
              <div className="flex items-center">
                <Bath size={20} className="text-gray-500" />
                <span className="ml-2 text-gray-700">{property.bathrooms} {property.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
              </div>
              
              <div className="flex items-center">
                <SquareIcon size={20} className="text-gray-500" />
                <span className="ml-2 text-gray-700">{property.area} m²</span>
              </div>
            </div>

            {/* Description */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Description</h2>
              <p className="mt-2 text-gray-700 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900">Amenities</h2>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-y-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 size={16} className="text-haven-green" />
                    <span className="ml-2 text-gray-700">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="mt-12">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">Reviews</h2>
                <Button variant="outline">Write a Review</Button>
              </div>
              
              <div className="mt-6 space-y-6">
                {propertyReviews.length > 0 ? (
                  propertyReviews.map(review => (
                    <ReviewCard key={review.id} review={review} />
                  ))
                ) : (
                  <p className="text-gray-600">No reviews yet for this property.</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Right column - Booking and Landlord info */}
          <div className="w-full lg:w-1/3 space-y-6">
            {/* Price and booking */}
            <Card className="p-6">
              <div className="flex items-baseline justify-between">
                <div className="text-2xl font-bold text-haven-blue">
                  {property.price} EGP<span className="text-sm font-medium text-gray-500">/{property.priceUnit}</span>
                </div>
                {property.available ? (
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Available</span>
                ) : (
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Not Available</span>
                )}
              </div>
              
              <div className="mt-6">
                <Button className="w-full bg-haven-blue hover:bg-haven-blue/90">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Now
                </Button>
                
                <Button variant="outline" className="w-full mt-2">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Contact Landlord
                </Button>
              </div>
            </Card>
            
            {/* Landlord information */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">Landlord</h3>
              
              <div className="mt-4 flex items-center">
                <img
                  src={landlord.avatar}
                  alt={landlord.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{landlord.name}</p>
                  {landlord.rating && (
                    <div className="flex items-center">
                      <Rating value={landlord.rating} size={14} />
                      <span className="ml-1 text-xs text-gray-500">Landlord rating</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{landlord.email}</span>
                </div>
                {landlord.phone && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>{landlord.phone}</span>
                  </div>
                )}
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Member since {new Date(landlord.joinDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PropertyDetails;
