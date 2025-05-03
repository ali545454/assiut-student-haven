
export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceUnit: string; 
  imageUrl: string;
  images: string[];
  bedrooms: number;
  bathrooms: number;
  area: number;
  description: string;
  amenities: string[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  landlordId: string;
  available: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  propertyId: string;
  rating: number;
  comment: string;
  date: string;
  userType: 'student' | 'landlord';
  userImage: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  type: 'student' | 'landlord';
  avatar: string;
  phone?: string;
  rating?: number;
  joinDate: string;
}

export const users: User[] = [
  {
    id: "landlord1",
    name: "Ahmed Hassan",
    email: "ahmed@example.com",
    type: "landlord",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    phone: "+20 123 456 7890",
    rating: 4.8,
    joinDate: "2022-01-15"
  },
  {
    id: "landlord2",
    name: "Sara Mahmoud",
    email: "sara@example.com",
    type: "landlord",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    phone: "+20 123 456 7891",
    rating: 4.6,
    joinDate: "2022-02-10"
  },
  {
    id: "student1",
    name: "Omar Ali",
    email: "omar@student.au.edu.eg",
    type: "student",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    joinDate: "2022-08-20"
  },
  {
    id: "student2",
    name: "Nora Salah",
    email: "nora@student.au.edu.eg",
    type: "student",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    joinDate: "2022-09-05"
  }
];

export const properties: Property[] = [
  {
    id: "prop1",
    title: "Modern Studio Near Assiut University",
    location: "Al Hamraa, 5 min from Assiut University",
    price: 1500,
    priceUnit: "month",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1585129819171-80b02d4c85b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    bedrooms: 1,
    bathrooms: 1,
    area: 35,
    description: "This modern studio apartment is perfectly located just 5 minutes walking distance from Assiut University. Fully furnished with high-speed internet, air conditioning, and a small kitchenette. Ideal for students who want convenience and comfort.",
    amenities: ["WiFi", "Air Conditioning", "Furnished", "Security", "Washing Machine"],
    rating: 4.8,
    reviewCount: 24,
    featured: true,
    landlordId: "landlord1",
    available: true
  },
  {
    id: "prop2",
    title: "Shared 3-Bedroom Apartment",
    location: "El-Gomhoria St, 10 min from campus",
    price: 800,
    priceUnit: "month",
    imageUrl: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    bedrooms: 3,
    bathrooms: 2,
    area: 90,
    description: "Share this spacious 3-bedroom apartment with other students. Each room is private, with shared kitchen and living spaces. Located in a quiet building on El-Gomhoria Street, approximately 10 minutes from campus by public transportation. Utilities included in the rent.",
    amenities: ["WiFi", "Air Conditioning", "Balcony", "Shared Kitchen", "Laundry Room"],
    rating: 4.5,
    reviewCount: 18,
    featured: true,
    landlordId: "landlord1",
    available: true
  },
  {
    id: "prop3",
    title: "Private Room in Student Building",
    location: "University Housing District",
    price: 600,
    priceUnit: "month",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2158&q=80",
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    bedrooms: 1,
    bathrooms: 1,
    area: 20,
    description: "Private room in a building exclusively for students. Shared bathroom with one other room. Common areas include a study room and small cafeteria. Perfect for students on a budget who still want privacy and a study-friendly environment.",
    amenities: ["Study Area", "Cafeteria", "Security", "WiFi", "Cleaning Service"],
    rating: 4.2,
    reviewCount: 32,
    featured: true,
    landlordId: "landlord2",
    available: true
  },
  {
    id: "prop4",
    title: "Luxury 2-Bedroom with City View",
    location: "City Center, 15 min from university",
    price: 2500,
    priceUnit: "month",
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    description: "Upscale 2-bedroom apartment in the heart of Assiut with stunning city views. This premium property features modern appliances, high-end finishes, and 24/7 building security. Perfect for graduate students or those who want extra comfort and space to share with a roommate.",
    amenities: ["City View", "Modern Kitchen", "24/7 Security", "Elevator", "Parking", "WiFi", "Air Conditioning"],
    rating: 4.9,
    reviewCount: 15,
    featured: false,
    landlordId: "landlord2",
    available: true
  },
  {
    id: "prop5",
    title: "Budget-friendly Single Room",
    location: "Al-Azhar District, 20 min from campus",
    price: 400,
    priceUnit: "month",
    imageUrl: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    bedrooms: 1,
    bathrooms: 1,
    area: 18,
    description: "Economical single room in a family home. Shared bathroom with one other tenant. Basic furnishings including bed, desk, and wardrobe. Access to shared kitchen with limited cooking facilities. Ideal for students on a tight budget.",
    amenities: ["Basic Furniture", "Shared Kitchen", "WiFi", "Fan"],
    rating: 3.9,
    reviewCount: 28,
    featured: false,
    landlordId: "landlord1",
    available: true
  },
  {
    id: "prop6",
    title: "New 1-Bedroom Near Medical School",
    location: "Medical Campus Area, 3 min walk",
    price: 1800,
    priceUnit: "month",
    imageUrl: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    images: [
      "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
    ],
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    description: "Brand new 1-bedroom apartment specially designed for medical students. Located just 3 minutes walking from the Medical School campus. Features include study desk with ergonomic chair, high-speed internet suitable for online lectures, and soundproofed walls for quiet studying.",
    amenities: ["Study Desk", "High-speed WiFi", "Air Conditioning", "Soundproof", "Full Kitchen", "Washing Machine"],
    rating: 4.7,
    reviewCount: 9,
    featured: false,
    landlordId: "landlord2",
    available: true
  }
];

export const reviews: Review[] = [
  {
    id: "rev1",
    userId: "student1",
    userName: "Omar Ali",
    propertyId: "prop1",
    rating: 5,
    comment: "Excellent apartment, exactly what I needed for my studies. The location is perfect, and the landlord is very responsive and helpful.",
    date: "2023-02-15",
    userType: "student",
    userImage: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: "rev2",
    userId: "student2",
    userName: "Nora Salah",
    propertyId: "prop1",
    rating: 4,
    comment: "Very good place to stay. Clean, quiet, and close to university. The only downside is the small kitchen, but overall a great option for students.",
    date: "2023-03-20",
    userType: "student",
    userImage: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: "rev3",
    userId: "landlord1",
    userName: "Ahmed Hassan",
    propertyId: "prop1",
    rating: 5,
    comment: "Omar was an excellent tenant, always paid rent on time and kept the apartment in great condition. Would welcome him back anytime!",
    date: "2023-07-01",
    userType: "landlord",
    userImage: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: "rev4",
    userId: "student1",
    userName: "Omar Ali",
    propertyId: "prop3",
    rating: 4,
    comment: "Good value for the price. The study area is really useful for exam preparation and the location is convenient.",
    date: "2022-11-10",
    userType: "student",
    userImage: "https://randomuser.me/api/portraits/men/2.jpg"
  }
];
