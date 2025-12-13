import { LucideIcon } from 'lucide-react';

export interface NavItemProps {
  id: string;
  label: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: (id: string) => void;
}

export interface SectionProps {
  id: string;
  className?: string;
}

export type SectionId = 'profile' | 'summary' | 'competency' | 'experience' | 'philosophy';