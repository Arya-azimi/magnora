export interface ServiceModel {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: string | null;
  image_url: string | null;
  author: string | null;
  content: string;
  created_at: string;
}
