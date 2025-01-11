export type frameworks =
  | "react"
  | "nextjs"
  | "tailwind"
  | "tensorflow"
  | "numpy"
  | "pandas"
  | "pytorch"
  | "mongodb"
  | "sql";

export type ProjectSchema = {
  project_title?: string;
  project_description?: string;
  project_image?: string;
  project_content?: JSX.Element | string;
  project_github_link?: string;
  project_kaggle_link?: string;
  project_other_links?: JSX.Element;
  project_website_link?: string;
  tech_stack?: frameworks[];
  readme_link?: string;
};
