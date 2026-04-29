

// ─── Types for Portfolio Website ──────────────────────────────────────
// ─── Skill ──────────────────────────────────────
export type SkillCategory = 'Frontend' | 'Backend' | 'Tools' | 'Design' | 'Other';

// ─── Auth ─────────────────────────────────────────
export interface Admin {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface AuthState {
  admin: Admin | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}

// ─── Project ──────────────────────────────────────
export interface Project {
  slug: any;
  _id: string;
  title: string;
  description: string;
  longDescription?: string;
  coverImage: string;
  images: string[];
  tags: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// ─── Blog ─────────────────────────────────────────
export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  tags: string[];
  published: boolean;
  readTime: number;
  views: number;
  createdAt: string;
  updatedAt: string;
}

export interface PaginatedPosts {
  data: BlogPost[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

// ─── Skill ────────────────────────────────────────


export interface Skill {
  sort(arg0: (a: any, b: any) => number): unknown;
  _id: string;
  name: string;
  slug: string;
  category: SkillCategory;
  level: number;      // 0–100
  icon?: string;
  color?: string;
  order: number;
  featured: boolean;
  createdAt?: string;
  updatedAt?: string;
}
// ─── Message ──────────────────────────────────────
export interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  body: string;
  read: boolean;
  archived: boolean;
  createdAt: string;
}

// ─── API Response ─────────────────────────────────
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  count?: number;
}