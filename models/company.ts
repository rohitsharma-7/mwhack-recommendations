export interface Company {
  name: string;
  address: {
    city: string;
    country: string;
  };
  otp: string;
  logo: string;
  category: string;
  description: string;
  testimonials: Testimonial[];
  website: string;
  email: string;
}

export interface Testimonial {
  name: string;
  email: string;
  country: string;
  message: string;
  isPublic: boolean;
  slug: string;
}
