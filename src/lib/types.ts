export interface NavItem {
  id: string;
  href: string;
}

export type ProjectType = "open-source" | "client";

export interface Project {
  id: number;
  title: string;
  slug: string;
  tags?: string[];
  link?: string;
  images?: string[];
  video?: string;
  thumbnail?: string;
  pinned?: boolean;
  type?: ProjectType;
  description?: string;
  content?: string[];
  website?: string;
}

export interface Commit {
  repo: string;
  repoFull: string;
  msg: string;
  url: string;
  sha: string | null;
  additions: number | undefined;
  deletions: number | undefined;
}

export interface Experience {
  id: string;
  company: string;
  tags: string[];
  website: string;
}

export interface Service {
  id: string;
  command: string;
  stack: string[];
}
