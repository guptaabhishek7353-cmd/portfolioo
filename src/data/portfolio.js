import profileImage from "../../assets/images/profile.jpg";
import cloudCertificate from "../../certificates/cloud101.jpg";
import pythonCertificate from "../../certificates/python.jpg";
import webCertificate from "../../certificates/webdevelopment.jpg";
import nccCertificate from "../../achievements/ncc-b.jpg";

export const personal = {
  name: "Abhishek Gupta",
  title: "BSc IT Student | Web Developer | AI Enthusiast",
  intro:
    "I build clean, responsive, and human-friendly digital experiences with modern web tools, strong fundamentals, and a growing interest in practical AI.",
  typingPhrases: ["Web Developer", "React Learner", "AI Enthusiast", "Problem Solver"],
  profileImage,
  resume: "/resume/resume.pdf",
  email: "abhishek@example.com",
  phone: "+91 98765 43210",
  location: "India",
  socials: {
    linkedIn: "https://www.linkedin.com/",
    github: "https://github.com/",
    instagram: "https://www.instagram.com/"
  }
};

export const about = {
  summary:
    "I am a BSc IT student focused on building polished web applications, learning modern JavaScript ecosystems, and applying AI tools to improve productivity and user experiences.",
  objective:
    "To grow into a well-rounded software engineer by contributing to meaningful products, strengthening full-stack development skills, and creating reliable, accessible digital solutions.",
  education: "Bachelor of Science in Information Technology, currently pursuing.",
  strengths: ["Fast learner", "Disciplined", "Curious", "Adaptable", "Ownership mindset"],
  timeline: [
    {
      year: "2024",
      title: "BSc IT Journey",
      text: "Started deepening foundations in programming, web technologies, and computer science."
    },
    {
      year: "2025",
      title: "Frontend Projects",
      text: "Built responsive interfaces with HTML, CSS, JavaScript, React, and Tailwind CSS."
    },
    {
      year: "2026",
      title: "AI-Enabled Development",
      text: "Exploring AI tools, automation, and smarter user experiences for real-world applications."
    }
  ]
};

export const skills = {
  technical: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Node.js", "Python", "Git", "GitHub", "AI Tools"],
  soft: ["Leadership", "Communication", "Teamwork", "Problem Solving", "Time Management"]
};

export const projects = [
  {
    title: "Portfolio Website",
    description: "A premium personal portfolio with responsive layout, motion, SEO metadata, and editable content sections.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    demo: "#",
    github: "#"
  },
  {
    title: "AI Study Assistant",
    description: "A placeholder concept for a study helper that organizes notes, generates summaries, and tracks progress.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    technologies: ["Python", "AI Tools", "JavaScript"],
    demo: "#",
    github: "#"
  },
  {
    title: "Responsive Business Site",
    description: "A clean landing experience for a modern service business with reusable UI blocks and fast loading.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#"
  }
];

export const certificates = [
  {
    title: "Cloud Computing 101",
    organization: "Placeholder Academy",
    date: "June 2026",
    skills: ["Cloud Basics", "Deployment", "Scalability"],
    thumbnail: cloudCertificate,
    certificate: cloudCertificate,
    verify: "#"
  },
  {
    title: "Python Programming",
    organization: "Placeholder Institute",
    date: "May 2026",
    skills: ["Python", "Logic Building", "Automation"],
    thumbnail: pythonCertificate,
    certificate: pythonCertificate,
    verify: "#"
  },
  {
    title: "Web Development",
    organization: "Placeholder Learning",
    date: "April 2026",
    skills: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    thumbnail: webCertificate,
    certificate: webCertificate,
    verify: "#"
  }
];

export const achievements = [
  {
    title: "NCC 'B' Certificate",
    organization: "National Cadet Corps",
    year: "2026",
    description: "Placeholder entry for NCC certification details and service activities.",
    skills: ["Discipline", "Leadership", "Teamwork"],
    thumbnail: nccCertificate,
    certificate: nccCertificate
  },
  {
    title: "NCC Camps",
    organization: "NCC",
    year: "Add Year",
    description: "Add camp name, location, role, and key participation details here.",
    skills: ["Resilience", "Coordination", "Responsibility"],
    thumbnail: nccCertificate,
    certificate: nccCertificate
  },
  {
    title: "Sports Achievements",
    organization: "School / College",
    year: "Add Year",
    description: "Replace with sports achievements, tournament details, and awards.",
    skills: ["Focus", "Consistency", "Competitive Spirit"],
    thumbnail: nccCertificate,
    certificate: nccCertificate
  },
  {
    title: "Other Awards",
    organization: "Add Organization",
    year: "Add Year",
    description: "Use this card for academic awards, volunteering, or technical recognition.",
    skills: ["Initiative", "Execution", "Growth"],
    thumbnail: nccCertificate,
    certificate: nccCertificate
  }
];

export const experience = [
  {
    period: "2026",
    role: "Frontend Developer Intern",
    company: "Placeholder Company",
    description: "Add internship details, responsibilities, tools, and measurable outcomes here."
  },
  {
    period: "2025",
    role: "Freelance Web Developer",
    company: "Personal Projects",
    description: "Built responsive web pages and practiced client-friendly communication and delivery."
  }
];

export const services = [
  {
    title: "Website Development",
    description: "Fast, responsive, and maintainable websites built with modern frontend tools."
  },
  {
    title: "Responsive Design",
    description: "Interfaces that look polished and work smoothly across desktop, tablet, and mobile."
  },
  {
    title: "AI Integration",
    description: "Practical AI-assisted workflows and features that improve usability and productivity."
  },
  {
    title: "UI Design",
    description: "Clean layouts, readable content structure, and recruiter-friendly visual polish."
  }
];

export const stats = [
  { label: "Projects", value: 12 },
  { label: "Skills", value: 15 },
  { label: "Certificates", value: 6 },
  { label: "Learning Hours", value: 500 }
];
