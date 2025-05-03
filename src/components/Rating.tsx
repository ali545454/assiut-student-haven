
import { Star, StarHalf } from "lucide-react";

interface RatingProps {
  value: number;
  max?: number;
  size?: number;
  showValue?: boolean;
  className?: string;
}

const Rating = ({ 
  value, 
  max = 5, 
  size = 16, 
  showValue = false, 
  className = "" 
}: RatingProps) => {
  // Round to nearest half
  const roundedValue = Math.round(value * 2) / 2;
  
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(max)].map((_, i) => {
        const starValue = i + 1;
        
        if (starValue <= roundedValue) {
          // Full star
          return <Star key={i} fill="#FFC107" stroke="#FFC107" size={size} className="text-yellow-500" />;
        } else if (starValue - 0.5 === roundedValue) {
          // Half star
          return <StarHalf key={i} fill="#FFC107" stroke="#FFC107" size={size} className="text-yellow-500" />;
        } else {
          // Empty star
          return <Star key={i} fill="none" size={size} className="text-gray-300" stroke="currentColor" />;
        }
      })}
      
      {showValue && (
        <span className="ml-1 text-sm font-medium text-gray-600">{value.toFixed(1)}</span>
      )}
    </div>
  );
};

export default Rating;
