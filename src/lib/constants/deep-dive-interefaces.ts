export interface DeepDiveProject {
  id: number;
  slug: string;
  title: string;
  description: string;
  github_url: string | null;
  image_main: string;
  author: string;
  content: string;
}
export interface PageProps {
  params: Promise<{ slug: string }>;
}
