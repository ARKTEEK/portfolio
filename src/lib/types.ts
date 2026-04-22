export interface NavItem {
  label: string;
  href: string;
  index: number;
}

export interface Profile {
  name: string;
  role: string;
  avatar: string | null;
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
