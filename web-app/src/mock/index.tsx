import { CourseType, NewsType, TeamType } from "../types";

export const mainCourses: CourseType[] = [
  {
    hash: "1",
    badge: "Bestseller",
    rating: 4.5,
    poster: "/images/courses/img-1.jpg",
    duration: "25",
    views: "109k views",
    createdBy: "John Doe",
    price: "10",
    created: "15 days ago",
    description: "Complete Python Bootcamp: Go from zero to hero in Python 3",
    technologies: "Web Development | Python",
  },
  {
    hash: "2",
    badge: "Bestseller",
    rating: 4.5,
    poster: "/images/courses/img-2.jpg",
    duration: "25",
    views: "5M views",
    createdBy: "Jassica William",
    price: "5",
    created: "15 days ago",
    description: "The Complete JavaScript Course 2020: Build Real Projects!",
    technologies: "Development | JavaScript",
  },
  {
    hash: "3",
    badge: "Bestseller",
    rating: 4.5,
    poster: "/images/courses/img-3.jpg",
    duration: "25",
    views: "1M views",
    createdBy: "John Doe",
    price: "13",
    created: "18 days ago",
    description: "Beginning C++ Programming - From Beginner to Beyond",
    technologies: "Development | C++",
  },
  {
    hash: "4",
    badge: "Bestseller",
    rating: 4.5,
    poster: "/images/courses/img-4.jpg",
    duration: "25",
    views: "153k views",
    createdBy: "Poonam Verma",
    price: "12",
    created: "3 months ago",
    description: "The Complete Digital Marketing Course - 12 Courses in 1",
    technologies: "Digital Marketing | Marketing",
  },
  {
    hash: "5",
    badge: "Bestseller",
    rating: 4.5,
    poster: "/images/courses/img-5.jpg",
    duration: "25",
    views: "53k views",
    createdBy: "Rock William",
    price: "6",
    created: "14 days ago",
    description: "Microsoft Excel - Excel from Beginner to Advanced",
    technologies: "Office Productivity | Excel",
  },
  {
    hash: "6",
    badge: "Bestseller",
    rating: 4.5,
    poster: "/images/courses/img-6.jpg",
    duration: "25",
    views: "253k views",
    createdBy: "John Doe",
    price: "15",
    created: "10 days ago",
    description: "Angular 8 - The Complete Guide (2020 Edition)",
    technologies: "Development | Angular",
  },
  {
    hash: "7",
    badge: "Bestseller",
    rating: 4.5,
    poster: "/images/courses/img-7.jpg",
    duration: "25",
    views: "109k views",
    createdBy: "Sabnam Singh",
    price: "18",
    created: "15 days ago",
    description: "WordPress for Beginners: Create a Website Step by Step",
    technologies: "Design | Wordpress",
  },
  {
    hash: "8",
    badge: "Bestseller",
    rating: 4.5,
    poster: "/images/courses/img-1.jpg",
    duration: "25",
    views: "196k views",
    createdBy: "Jashanpreet Singh",
    price: "10",
    created: "1 month ago",
    description: "CSS - The Complete Guide 2020 (incl. Flexbox, Grid & Sass)",
    technologies: "Design | CSS",
  },
];

export const teacherCourses: CourseType[] = [
  {
    hash: "1",
    badge: "Bestseller",
    rating: 4.5,
    poster: "/images/courses/img-1.jpg",
    duration: "25",
    views: "109k views",
    createdBy: "John Doe",
    price: "10",
    created: "15 days ago",
    description: "Complete Python Bootcamp: Go from zero to hero in Python 3",
    technologies: "Web Development | Python",
  },
  {
    hash: "2",
    badge: "Bestseller",
    rating: 4.5,
    poster: "/images/courses/img-2.jpg",
    duration: "25",
    views: "5M views",
    createdBy: "Jassica William",
    price: "5",
    created: "15 days ago",
    description: "The Complete JavaScript Course 2020: Build Real Projects!",
    technologies: "Development | JavaScript",
  },
];

export const teachers = [
  {
    id: "1",
    name: "John Doe",
    bio: "Experienced React developer with over 5 years of experience in building scalable web applications.",
  },
  {
    id: "2",
    name: "Jane Smith",
    bio: "Full-stack developer specializing in Node.js and Express, with a strong background in cloud technologies.",
  },
  {
    id: "3",
    name: "Alex Johnson",
    bio: "Front-end expert with deep knowledge of CSS, HTML, and modern JavaScript frameworks like Vue and Svelte.",
  },
  {
    id: "4",
    name: "Emily Davis",
    bio: "Senior Python developer with expertise in AI and machine learning, and experience in building data-driven applications.",
  },
  {
    id: "5",
    name: "Michael Brown",
    bio: "DevOps engineer focusing on CI/CD pipelines, Kubernetes, and cloud infrastructure automation.",
  },
];

export const contactInfo = {
  email: "hello@lectrum.ua",
  supportEmail: "support@lectrum.ua",
  phone: "+380 44 333 6011",
  address: "02160, м. Київ, пр. Соборності, буд. 19, оф. 515",
};

export const news: NewsType[] = [
  {
    id: "1",
    title: "Breaking: New Framework Released",
    content: "A new JavaScript framework has just been released.",
  },
  {
    id: "2",
    title: "Next.js 15 is out!",
    content: "Next.js 14 has been released with new features including ...",
  },
  {
    id: "3",
    title: "Top 10 Web Development Trends",
    content: "Here are the top 10 trends in web development for 2025...",
  },
  {
    id: "4",
    title: "AI Revolution: What Developers Need to Know",
    content:
      "Artificial intelligence is transforming the world of development.",
  },
  {
    id: "5",
    title: "CSS Frameworks Battle: Tailwind vs Bootstrap",
    content: "A detailed comparison between Tailwind CSS and Bootstrap.",
  },
  {
    id: "6",
    title: "How to Optimize React Applications",
    content: "Practical tips on improving performance in React applications.",
  },
  {
    id: "7",
    title: "WebAssembly: The Future of Web Performance",
    content: "Learn how WebAssembly is making web applications faster.",
  },
  {
    id: "8",
    title: "JavaScript in 2024: Trends and Predictions",
    content: "Explore the future of JavaScript development in 2024 and beyond.",
  },
  {
    id: "9",
    title: "Top 5 Mistakes to Avoid in Next.js",
    content: "Common pitfalls in Next.js development and how to avoid them.",
  },
  {
    id: "10",
    title: "GraphQL vs REST: Which API to Choose?",
    content:
      "A detailed comparison of GraphQL and REST APIs for modern applications.",
  },
  {
    id: "11",
    title: "The Rise of Serverless Architecture",
    content:
      "Serverless architecture is gaining popularity in cloud computing.",
  },
  {
    id: "12",
    title: "Why TypeScript is Taking Over JavaScript Projects",
    content:
      "A look into why more developers are adopting TypeScript in their projects.",
  },
  {
    id: "13",
    title: "DevOps Best Practices for 2024",
    content: "Tips and tools for efficient DevOps pipelines in 2024.",
  },
];

export const team: TeamType[] = [
  {
    id: "1",
    image: "/images/avatar.jpg",
    fullName: "John Doe",
    role: "Lead Developer",
    bio: "John is a full-stack developer with over 10 years of experience in building scalable web applications.",
  },
  {
    id: "2",
    image: "/images/avatar.jpg",
    fullName: "Jessica Smith",
    role: "UI/UX Designer",
    bio: "Jessica specializes in creating user-friendly interfaces and is passionate about enhancing user experiences.",
  },
];
