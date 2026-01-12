
import { Car, Testimonial, BlogPost } from './types';

export const MOCK_CARS: Car[] = [
  {
    id: '1',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2024,
    price: 114000,
    mileage: 1200,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    features: ['Leather Seats', 'Navigation', 'Heated Seats']
  },
  {
    id: '2',
    make: 'Tesla',
    model: 'Model S Plaid',
    year: 2023,
    price: 89990,
    mileage: 5400,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800',
    features: ['Autopilot', 'Panoramic Roof', 'Fast Charging']
  },
  {
    id: '3',
    make: 'Land Rover',
    model: 'Range Rover Sport',
    year: 2025,
    price: 85000,
    mileage: 0,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    features: ['All-Wheel Drive', 'Premium Audio', 'Air Suspension']
  },
  {
    id: '4',
    make: 'BMW',
    model: 'M4 Competition',
    year: 2024,
    price: 78000,
    mileage: 2500,
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    bodyType: 'Coupe',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    features: ['Sport Exhaust', 'Carbon Fiber Trim', 'Head-up Display']
  },
  {
    id: '5',
    make: 'Audi',
    model: 'Q8 e-tron',
    year: 2024,
    price: 74500,
    mileage: 500,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    features: ['Virtual Cockpit', 'Matrix LED', 'Surround View']
  },
  {
    id: '6',
    make: 'Ford',
    model: 'F-150 Lightning',
    year: 2023,
    price: 54995,
    mileage: 12000,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'Truck',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
    features: ['Towing Package', 'Power Frunk', 'Mobile Generator']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    text: "The easiest car buying experience I've ever had. The AI assistant helped me find exactly what I needed for my commute!",
    date: '2 days ago',
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 4,
    text: "Great selection of luxury vehicles. The trade-in process was transparent and very fair.",
    date: '1 week ago',
    avatar: 'https://picsum.photos/100/100?random=2'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Top 5 Electric SUVs of 2025',
    excerpt: 'Explore the most anticipated EV releases hitting our showroom floor this season.',
    date: 'Oct 24, 2024',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: '2',
    title: 'Maintaining Your Luxury Vehicle',
    excerpt: 'Pro tips on keeping your high-performance engine running at its peak potential.',
    date: 'Oct 20, 2024',
    image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=600'
  }
];
