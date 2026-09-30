export interface SocialLink {
  label: string;
  icon?: "github" | "linkedin";
  url: string;
}

export interface ExpertiseItem {
  title: string;
  description: string;
  technologies: string[];
  icon?: "react" | "docker" | "python";
}

export interface ExperienceItem {
  date: string;
  title: string;
  location: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  url?: string;
  image?: string;
}

export interface Portfolio {
  name: string;
  title: string;
  profileImage?: string;
  socialLinks: SocialLink[];
  expertiseTitle: string;
  expertise: ExpertiseItem[];
  experienceTitle: string;
  experience: ExperienceItem[];
  projectsTitle: string;
  projects: ProjectItem[];
  contact: {
    title: string;
    description: string;
    recipientEmail?: string;
  };
}