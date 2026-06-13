import { executeQuery } from "@/lib/db";
import type { Metadata } from "next";

interface MetadataRow {
  title: string;
  description: string;
  og_title: string;
  og_description: string;
  og_image: string;
}

export async function getPageMetadata(pageKey: string): Promise<Metadata> {
  const rows = await executeQuery<MetadataRow[]>({
    query:
      "SELECT title, description, og_title, og_description, og_image FROM page_metadata WHERE page_key = ? LIMIT 1",
    values: [pageKey],
  });

  const data = rows[0];

  if (!data) {
    return {
      title: "Magnora",
    };
  }

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.og_title || data.title,
      description: data.og_description || data.description,
      type: "website",
      siteName: "Magnora",
      images: [
        {
          url: data.og_image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
