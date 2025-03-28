export type ServiceType = 'Basic Setup' | 'Pro Setup' | 'Server Audit';
export type TestimonialStatus = 'pending' | 'approved' | 'rejected';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  project?: string;
  message: string;
  rating: number;
  serviceType: ServiceType;
  date: string;
  verified: boolean;
  status: TestimonialStatus;
} 