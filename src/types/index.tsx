export type CourseType = {
  hash: string;
  badge: string;
  rating: number;
  poster: string;
  duration: string;
  views: string;
  createdBy: string;
  price: string;
  created: string;
  description: string;
  technologies: string;
};

export type NewsType = {
  id: string;
  title: string;
  content: string;
}

export type ContactType = {
  email: string;
  supportEmail: string;
  phone: string;
  address: string;
}

export type TeamType = {
  id: string;
  image: string;
  fullName: string;
  role: string;
  bio: string;
}