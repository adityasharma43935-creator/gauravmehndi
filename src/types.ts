export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'arabic' | 'traditional' | 'other';
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  date: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}
