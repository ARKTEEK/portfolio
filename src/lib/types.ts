export interface NavItem {
  label: string;
  href: string;
}

export type ProjectType = "open-source" | "client";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  images?: string[];
  video?: string;
  pinned: boolean;
  type: ProjectType;
  slug: string;
  content?: string[];
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
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  website: string;
}
