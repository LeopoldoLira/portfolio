export interface Project {
  slug: string;
  title: string;
  shortDescription: string; // 1 sentence, shown on the card
  description: string[]; // paragraphs for the project detail page
  techStack: string[];
  liveUrl: string;
  repoUrl?: string;
  image: string; // path to screenshot in /public/imgs/
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "movienies",
    title: "Movienies",
    shortDescription:
      "A fullstack movie app with user accounts, ratings, and reviews.",
    description: [
      "Movienies is a fullstack movie application where users can create an account, rate films, and leave reviews. A React frontend talks to a Django REST API, with authentication and persistent user data behind it.",
      "I built it to exercise a complete production stack end to end — from database models and API design in Django to a responsive, component-driven interface in React and Tailwind, deployed on AWS.",
    ],
    techStack: ["React", "Django", "Tailwind CSS", "AWS"],
    liveUrl: "https://movienies.netlify.app",
    image: "/imgs/movienies.jpg",
    featured: true,
  },
  {
    slug: "content-writers",
    title: "Content Writers",
    shortDescription: "SEO services site for a 24/7 content agency.",
    description: [
      "24/7 Content Writers is a marketing site for a content agency offering SEO and copywriting services. The design was built in Figma first, then implemented as a fully custom WordPress theme.",
      "Every section is editable through Advanced Custom Fields, so the client can update copy, services, and imagery without touching code.",
    ],
    techStack: ["WordPress", "ACF", "SASS", "Figma"],
    liveUrl: "https://247contentwriters.infinityfreeapp.com/",
    image: "/imgs/contentw.jpg",
    featured: false,
  },
  {
    slug: "greenberg-stein",
    title: "Greenberg & Stein",
    shortDescription: "Production site for a NYC personal injury law firm.",
    description: [
      "Greenberg & Stein is a production website for an established personal injury law firm in New York City — a live client site handling real traffic.",
      "Built as a custom WordPress theme with Advanced Custom Fields, it gives the firm full control over practice areas, case results, and content while keeping the front end fast and on-brand.",
    ],
    techStack: ["WordPress", "ACF", "SASS", "Figma"],
    liveUrl: "https://greenbergandstein.com/",
    image: "/imgs/greenberg.jpg",
    featured: false,
  },
  {
    slug: "clothing-boutique",
    title: "Clothing Boutique",
    shortDescription:
      "Custom e-commerce site showcasing clothing collections with a product catalog.",
    description: [
      "Clothing Boutique is a custom e-commerce site built to showcase seasonal clothing collections through an interactive product catalog.",
      "The WordPress theme was styled from scratch with SASS, with attention to a clean browsing experience and a layout that keeps the products front and center.",
    ],
    techStack: ["WordPress", "SASS"],
    liveUrl: "https://clothingboutique.infinityfreeapp.com/",
    image: "/imgs/clothing.png",
    featured: false,
  },
  {
    slug: "multiservices",
    title: "Multiservices",
    shortDescription:
      "IT services and products site with intuitive navigation and a service catalog.",
    description: [
      "Multiservices is a site for an IT services and products company, designed around clear navigation and an easy-to-scan service catalog.",
      "It's a custom WordPress build with SASS styling, structured so visitors can quickly find the service or product they need.",
    ],
    techStack: ["WordPress", "SASS"],
    liveUrl: "https://multiservices.infinityfreeapp.com/",
    image: "/imgs/multiservices.png",
    featured: false,
  },
  {
    slug: "sabio-coffee",
    title: "Sabio Coffee",
    shortDescription: "Coffee brand site with dynamic content and responsive styling.",
    description: [
      "Sabio Coffee is a brand site for a coffee company, combining dynamic, editable content with a warm, responsive design.",
      "Built on WordPress with Advanced Custom Fields for content management and SASS for styling, it delivers a scalable, client-friendly platform with a modern look.",
    ],
    techStack: ["WordPress", "ACF", "SASS"],
    liveUrl: "https://sabio.coffee/",
    image: "/imgs/sabio_coffee.png",
    featured: false,
  },
];
