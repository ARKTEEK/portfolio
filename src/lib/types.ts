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

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
  image: string;
  pinned: boolean;
}

export interface Commit {
  repo: string;
  msg: string;
  additions: string;
  deletions: string;
}
