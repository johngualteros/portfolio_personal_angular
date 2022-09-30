export interface Project{
  id: number;
  name: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
  secondaryAccount?: string;
  primaryAccount?: string;
}
