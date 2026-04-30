export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorAvatar?: string;
  thumbnail: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  rating: number;
  reviewCount: number;
  enrolledCount: number;
  price: number;
  matchPercentage: number;
  tags: string[];
  description: string;
  isRecommended: boolean;
  isTrending: boolean;
  isNew: boolean;
}

export const courses: Course[] = [
  {
    id: "c1",
    title: "Mastering React 19 & Next.js",
    instructor: "Akash Sharma",
    instructorAvatar: "/images/avatar-1.png",
    thumbnail: "/images/course-react.png",
    category: "Web Development",
    difficulty: "Advanced",
    duration: "14h 30m",
    rating: 4.9,
    reviewCount: 1245,
    enrolledCount: 8500,
    price: 4999,
    matchPercentage: 98,
    tags: ["React", "Next.js", "Frontend", "TypeScript"],
    description: "Dive deep into the latest React 19 features and build production-ready applications with Next.js App Router.",
    isRecommended: true,
    isTrending: true,
    isNew: true
  },
  {
    id: "c2",
    title: "Production-Grade Machine Learning with PyTorch",
    instructor: "Dr. Priya Iyer",
    instructorAvatar: "/images/avatar-2.png",
    thumbnail: "/images/course-ml.png",
    category: "AI/ML",
    difficulty: "Advanced",
    duration: "22h 15m",
    rating: 4.8,
    reviewCount: 890,
    enrolledCount: 4200,
    price: 6999,
    matchPercentage: 95,
    tags: ["Machine Learning", "PyTorch", "Python", "AI"],
    description: "Learn to build, train, and deploy deep learning models using PyTorch in production environments.",
    isRecommended: true,
    isTrending: false,
    isNew: false
  },
  {
    id: "c3",
    title: "Ethical Hacking & Penetration Testing",
    instructor: "Rohan Mehta",
    instructorAvatar: "/images/avatar-1.png",
    thumbnail: "/images/course-hacking.png",
    category: "Cybersecurity",
    difficulty: "Intermediate",
    duration: "18h 45m",
    rating: 4.7,
    reviewCount: 3400,
    enrolledCount: 15600,
    price: 3999,
    matchPercentage: 88,
    tags: ["Cybersecurity", "Hacking", "Network Security"],
    description: "Master the art of ethical hacking. Learn to identify vulnerabilities and secure networks from real-world threats.",
    isRecommended: false,
    isTrending: true,
    isNew: false
  },
  {
    id: "c4",
    title: "Music Production with Ableton Live",
    instructor: "Ananya Kapoor",
    instructorAvatar: "/images/avatar-2.png",
    thumbnail: "/images/course-music.png",
    category: "Music",
    difficulty: "Beginner",
    duration: "12h 0m",
    rating: 4.9,
    reviewCount: 2100,
    enrolledCount: 10200,
    price: 2999,
    matchPercentage: 92,
    tags: ["Music Production", "Ableton", "Audio Engineering"],
    description: "Start your journey in music production. Learn Ableton Live from scratch and produce your first track.",
    isRecommended: true,
    isTrending: true,
    isNew: true
  },
  {
    id: "c5",
    title: "Product Design Systems with Figma",
    instructor: "Aditya Verma",
    instructorAvatar: "/images/avatar-3.png",
    thumbnail: "/images/course-design.png",
    category: "Design",
    difficulty: "Intermediate",
    duration: "9h 30m",
    rating: 4.8,
    reviewCount: 1560,
    enrolledCount: 7800,
    price: 3499,
    matchPercentage: 85,
    tags: ["Figma", "UI/UX", "Design Systems"],
    description: "Create scalable and maintainable design systems using Figma's advanced features like variables and auto-layout.",
    isRecommended: false,
    isTrending: false,
    isNew: true
  },
  {
    id: "c6",
    title: "Conversational Spanish in 30 Days",
    instructor: "Sofia Martinez",
    instructorAvatar: "/images/avatar-2.png",
    thumbnail: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
    category: "Languages",
    difficulty: "Beginner",
    duration: "15h 0m",
    rating: 4.6,
    reviewCount: 890,
    enrolledCount: 5400,
    price: 1999,
    matchPercentage: 70,
    tags: ["Spanish", "Language", "Communication"],
    description: "Learn practical Spanish for travel and conversation through immersive, scenario-based lessons.",
    isRecommended: false,
    isTrending: false,
    isNew: false
  },
  {
    id: "c7",
    title: "Data Science for Business Leaders",
    instructor: "Vikram Singh",
    instructorAvatar: "/images/avatar-1.png",
    thumbnail: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
    category: "Business",
    difficulty: "Beginner",
    duration: "6h 45m",
    rating: 4.7,
    reviewCount: 450,
    enrolledCount: 3200,
    price: 4999,
    matchPercentage: 78,
    tags: ["Data Science", "Business", "Analytics"],
    description: "Understand how to leverage data science to drive business decisions without writing code.",
    isRecommended: false,
    isTrending: true,
    isNew: false
  },
  {
    id: "c8",
    title: "Advanced CSS & Framer Motion",
    instructor: "Elena Rostova",
    instructorAvatar: "/images/avatar-3.png",
    thumbnail: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    category: "Web Development",
    difficulty: "Advanced",
    duration: "8h 15m",
    rating: 4.9,
    reviewCount: 1120,
    enrolledCount: 6500,
    price: 2499,
    matchPercentage: 94,
    tags: ["CSS", "Animations", "Framer Motion", "React"],
    description: "Master fluid web animations and complex layouts using modern CSS and Framer Motion.",
    isRecommended: true,
    isTrending: false,
    isNew: true
  }
];

export const categories = [
  "Web Development",
  "AI/ML",
  "Data Science",
  "Cybersecurity",
  "Business",
  "Music",
  "Design",
  "Languages"
];
