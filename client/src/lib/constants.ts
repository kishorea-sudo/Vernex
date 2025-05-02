import React from 'react';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin 
} from 'lucide-react';

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  { href: "#", iconName: "Facebook", label: "Facebook" },
  { href: "#", iconName: "Twitter", label: "Twitter" },
  { href: "#", iconName: "Instagram", label: "Instagram" },
  { href: "#", iconName: "Linkedin", label: "LinkedIn" },
];

export const services = [
  {
    title: "Digital Marketing",
    description: "Strategic campaigns that drive growth and engagement across all digital channels, delivering measurable results and ROI.",
    image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Strategy & Creation",
      "Analytics & Performance Tracking",
    ],
  },
  {
    title: "Website Creation",
    description: "Bespoke website design and development that combines stunning aesthetics with intuitive functionality and performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Custom Web Design",
      "Responsive Development",
      "E-commerce Solutions",
      "CMS Integration & Training",
    ],
  },
  {
    title: "Logo & Poster Design",
    description: "Creative visual identity solutions that communicate your brand essence and captivate your target audience.",
    image: "https://images.unsplash.com/photo-1551643556-0e32e9a70a79?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Brand Identity Development",
      "Logo Design & Variations",
      "Marketing & Promotional Materials",
      "Style Guide Creation",
    ],
  },
  {
    title: "Video Editing",
    description: "Professional video production and editing services that tell compelling stories and engage viewers across platforms.",
    image: "https://images.unsplash.com/photo-1574717024453-354056aafa98?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: [
      "Commercial & Brand Videos",
      "Social Media Content",
      "Motion Graphics & Animation",
      "Post-Production Excellence",
    ],
  },
];

export const portfolioCategories = [
  { value: "digital-marketing", label: "Digital Marketing" },
  { value: "web-design", label: "Web Design" },
  { value: "branding", label: "Branding" },
  { value: "video", label: "Video" },
];

export const portfolioItems = [
  {
    title: "Social Media Campaign",
    description: "Comprehensive social strategy that increased engagement by 150%",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "digital-marketing",
  },
  {
    title: "Luxury E-commerce Site",
    description: "Custom shopping experience with 45% conversion rate improvement",
    image: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "web-design",
  },
  {
    title: "Artisan Coffee Branding",
    description: "Complete visual identity for premium coffee brand",
    image: "https://images.unsplash.com/photo-1570458436416-b8fcccfe883f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "branding",
  },
  {
    title: "Lifestyle Brand Commercial",
    description: "30-second spot that drove 200% increase in website traffic",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "video",
  },
  {
    title: "SEO Optimization Campaign",
    description: "First page rankings achieved for competitive industry keywords",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "digital-marketing",
  },
  {
    title: "Financial Services Platform",
    description: "Secure, responsive web application with intuitive user experience",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "web-design",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Marketing Director, Luxury Brand",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "Working with Vernex transformed our entire digital strategy. Their team developed a stunning website and comprehensive marketing campaign that significantly increased our online visibility. The attention to detail and commitment to excellence is unmatched.",
  },
  {
    name: "Michael Chen",
    position: "CEO, Tech Startup",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "The Vernex team exceeded all our expectations with their innovative approach. They designed a brand identity that perfectly captures our company's vision and values. Their creative insights and technical expertise made all the difference.",
  },
  {
    name: "Alicia Rodriguez",
    position: "Brand Manager, Retail Chain",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    text: "From concept to completion, Vernex delivered exceptional results for our rebranding project. Their video production team created engaging content that resonated with our audience and drove measurable business results. They're true professionals.",
  },
];
