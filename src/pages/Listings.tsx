
import { useState } from "react";
import { properties } from "@/data/properties";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Listings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 3000]);
  const [bedroomFilter, setBedroomFilter] = useState<number | null>(null);
  const [availableOnly, setAvailableOnly] = useState(true);

  const filteredProperties = properties.filter((property) => {
    // Search term filter
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Price range filter
    const matchesPrice = property.price >= priceRange[0] && property.price <= priceRange[1];
    
    // Bedroom filter
    const matchesBedrooms = bedroomFilter === null || property.bedrooms === bedroomFilter;
    
    // Available filter
    const matchesAvailable = !availableOnly || property.available;
    
    return matchesSearch && matchesPrice && matchesBedrooms && matchesAvailable;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900">Student Housing in Assiut</h1>
            <p className="mt-2 text-lg text-gray-600">Find and compare the best accommodation options</p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="search">Search</Label>
                <div className="relative mt-1">
                  <Input 
                    id="search"
                    type="text" 
                    placeholder="Search by location or property name" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-10"
                  />
                  <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
                </div>
              </div>
              
              <div>
                <Label>Price Range (EGP/month)</Label>
                <div className="mt-6 px-2">
                  <Slider 
                    defaultValue={[0, 3000]} 
                    min={0} 
                    max={3000} 
                    step={100}
                    onValueChange={(value) => setPriceRange(value)}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>{priceRange[0]} EGP</span>
                    <span>{priceRange[1]} EGP</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between">
                <div>
                  <Label>Bedrooms</Label>
                  <div className="mt-1 flex space-x-2">
                    <Button 
                      variant={bedroomFilter === null ? "default" : "outline"}
                      size="sm"
                      onClick={() => setBedroomFilter(null)}
                    >
                      Any
                    </Button>
                    {[1, 2, 3].map((num) => (
                      <Button 
                        key={num}
                        variant={bedroomFilter === num ? "default" : "outline"}
                        size="sm"
                        onClick={() => setBedroomFilter(num)}
                      >
                        {num}
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 mt-4">
                  <Switch 
                    id="available"
                    checked={availableOnly}
                    onCheckedChange={setAvailableOnly}
                  />
                  <Label htmlFor="available">Available properties only</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-700">
                {filteredProperties.length} {filteredProperties.length === 1 ? 'property' : 'properties'} found
              </p>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  Sort by: Price
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.length > 0 ? (
                filteredProperties.map(property => (
                  <PropertyCard key={property.id} property={property} featured={property.featured} />
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-600">No properties found matching your criteria.</p>
                  <Button className="mt-4" onClick={() => {
                    setSearchTerm("");
                    setPriceRange([0, 3000]);
                    setBedroomFilter(null);
                  }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Listings;
