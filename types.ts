export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tools: string[];
}

export interface TimelineItem {
  id: number;
  roleOrDegree: string;
  organization: string;
  period: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Language' | 'Technical' | 'Soft';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}