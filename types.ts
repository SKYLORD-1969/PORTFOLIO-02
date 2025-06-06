
import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  icon: ReactNode;
  challenge: string;
  solution: string;
  outcome: string;
  sourceDocs: string[];
}

export interface Skill {
  name: string;
  description: string;
  icon: ReactNode;
  godTier?: boolean;
}
