
import { Review } from "@/data/properties";
import Rating from "@/components/Rating";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { userName, rating, comment, date, userType, userImage } = review;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
      <div className="flex items-start">
        <img 
          src={userImage} 
          alt={userName} 
          className="h-12 w-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <div className="flex items-center">
            <h4 className="font-medium text-gray-900">{userName}</h4>
            <span className="ml-2 px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs capitalize">
              {userType}
            </span>
          </div>
          <div className="flex items-center mt-1">
            <Rating value={rating} size={14} />
            <span className="ml-2 text-xs text-gray-500">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
          <p className="mt-3 text-gray-600 text-sm">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
