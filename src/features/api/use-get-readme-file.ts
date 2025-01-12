"use client";

import { useQuery } from "@tanstack/react-query";
import { getFile } from "./actions";

type useGetReadmeFileProps = {
  project_title?: string;
  readme_url?: string;
};
export function useGetReadmeFile({
  project_title,
  readme_url,
}: useGetReadmeFileProps) {
  const query = useQuery({
    queryKey: [project_title],
    queryFn: async () => {
      const text = readme_url ? await getFile(readme_url) : null;
      return text;
    },
  });
  const readme_text = query.data as string | null;
  return readme_text;
}
