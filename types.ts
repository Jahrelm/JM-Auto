
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Gasoline' | 'Electric' | 'Hybrid' | 'Diesel';
  transmission: 'Automatic' | 'Manual';
  bodyType: 'SUV' | 'Sedan' | 'Coupe' | 'Truck' | 'Convertible';
  image: string;
  features: string[];
}

export interface FilterState {
  make: string;
  model: string;
  minYear: string;
  maxPrice: string;
  bodyType: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
}
