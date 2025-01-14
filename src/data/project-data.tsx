import { ProjectSchema } from "@/types/schemas";

export const projects: ProjectSchema[] = [
  {
    project_title: "Portfolio",
    tech_stack: ["nextjs", "react", "tailwind","tanstack query"],
    project_description:
      "This is my personal portfio website showcasing my profile and my projects I have done so far",
    project_image: "/portfolio.png",
    project_website_link: "https://ishan-srivastava.vercel.app",
    readme_link:
      "https://github.com/Ishan130803/portfolio/raw/refs/heads/main/README.md",
  },
  {
    project_title: "Lunar Crater Segmentation(WIP)",
    tech_stack: ["tensorflow", "numpy", "pandas"],
    project_description:
      "This application segments craters and displays various metrics related to them on Chandrayaan's OHRC images.",
    project_github_link:
      "https://github.com/Ishan130803/Lunar-Crater-Segmentation",
    readme_link:
      "https://github.com/Ishan130803/Lunar-Crater-Segmentation/raw/refs/heads/main/README.md",
  },
  {
    project_title:
      "One-Mint - Your universal project manager and organizer(WIP)",
    tech_stack: ["nextjs", "react", "tailwind", "honojs", "tanstack query"],
    project_description:
      "Your universal project manager application to streamline your workflow. Manage your projects, assign projects, collaborate on projects and Keep track of tasks",
    project_github_link: "https://github.com/Ishan130803/One-Mint",
    readme_link:
      "https://github.com/Ishan130803/One-Mint/raw/refs/heads/main/README.md",
    project_website_link: "https://one-mint.vercel.app"
  },
  {
    project_title: "Social Dash - Your place to connect",
    tech_stack: ["nextjs", "react", "tailwind", "honojs", "tanstack query"],
    project_github_link: "https://github.com/Ishan130803/SocialDash",
    project_website_link: "https://social-dash-gamma.vercel.app",
    project_description:
      "A Simplistic social media platform made by me for learning purposes. Although lacking in features, it is fully responsive and most importantly fully working as of now. ",
    readme_link:
      "https://github.com/Ishan130803/SocialDash/raw/refs/heads/main/README.md",
  },
  {
    project_title: "Semantic Segmentation : CityScapes",
    tech_stack: ["numpy", "pandas", "tensorflow"],
    project_github_link:
      "https://github.com/Ishan130803/Semantic-Segmentation-CityScapes-Dataset",
    project_kaggle_link: "",
    project_description:
      "A Computer Vision Project to semantically segment city streets of Germany into various classes and identify various entities",
    project_image:
      "https://github.com/Ishan130803/Semantic-Segmentation-CityScapes-Dataset/blob/main/Images/Screenshot%202025-01-11%20230208.png?raw=true",
    readme_link:
      "https://github.com/Ishan130803/Semantic-Segmentation-CityScapes-Dataset/raw/refs/heads/main/Readme.md",
  },
  {
    project_title:
      "Cloud Coverage Detection using Encoder-Recoder Architecture",
    tech_stack: ["numpy", "pandas", "tensorflow"],
    project_github_link:
      "https://github.com/Ishan130803/CCD-Cloud-Coverage-Detection",
    project_kaggle_link: "",
    project_description:
      "A review of techniques involving Encoder Decoder architecture for prediction of cloud coverage 30 minutes in future",
    project_image:
      "https://github.com/Ishan130803/CCD-Cloud-Coverage-Detection/blob/main/Attention%20Model%20Architecture.png?raw=true",
    readme_link:
      "https://github.com/Ishan130803/CCD-Cloud-Coverage-Detection/raw/refs/heads/main/README.md",
  },
  {
    project_title: "Song Recommendation Engine",
    tech_stack: ["numpy", "pandas", "pytorch", "tensorflow"],
    project_github_link:
      "https://github.com/Ishan130803/Song-Recommendation-Engine",
    project_kaggle_link: "",
    project_description:
      "Song recommender system built using scrapped data from spotify and youtube",
    project_content:
      "A song recommender system built completely using unsupervised methods. It leverages similarity measures such as that of cosine similarity to identify relevant songs and recommend it back to the user. For this particular recommnder system, our goal was to predict the next song given some amount of songs in the playlist. To derive the feature vectors, various methods were employed such as finding mood of the audio, topic modelling of lyrics, encoding of artists and so on.",
  },
  {
    project_title: "LegalEase - Your Personal Lawyer Chatbot",
    tech_stack: [
      "numpy",
      "pandas",
      "tensorflow",
      "nextjs",
      "mongodb",
      "react",
      "tailwind",
    ],
    project_website_link: "https://legalease-verasity.vercel.app/",
    project_image:
      "https://github.com/Ishan130803/Innovate-For-Lawyered/assets/96647844/6eea36e8-50c7-4914-9fb3-630a19cc3b86",
    project_github_link:
      "https://github.com/Ishan130803/Innovate-For-Lawyered-LegalEaseWebAPP",
    project_description:
      "Dealing with legal matters is hard. Even harder is dealing with legal terms and documents. Legalease is here to assist you in generating legal documents swiftly just like a knife through a butter!",
    readme_link:
      "https://github.com/Ishan130803/Innovate-For-Lawyered-LegalEaseWebAPP/raw/refs/heads/main/README.md",
  },
  {
    project_title: "Tinder Recommender System",
    tech_stack: ["numpy", "pandas", "tensorflow"],
    project_github_link:
      "https://github.com/Ishan130803/Tinder-Recommender-System",
    project_description:
      "Swiping on tinder can be boring and un-productive. This recommender system will not only learn from your preferences but, also do the hard work for you. It has a web scraper built-in to scrap all the data and do the hard work for you!",
  },
  {
    project_title: "Gesture Drone Controller",
    tech_stack: ["numpy", "pandas", "tensorflow"],
    project_github_link:
      "https://github.com/Ishan130803/Gesture-Drone-Controller",
    project_description:
      "A Gesture drone controller utility to control DJITellopy drone purely through gestures. Trained and developed a custom model using Tensorflow and obtained hand features using MediaPipe framework to identify gestures",
  },
  {
    project_title: "AIWebChat - Chat with your websites !",
    tech_stack: ["nextjs", "react", "tailwind"],
    project_github_link: "https://github.com/Ishan130803/Web-RAG-Chat",
    project_description:
      "A Simplistic social media platform made by me for learning purposes. Although lacking in features, it is fully responsive and most importantly fully working as of now. ",
    readme_link:
      "https://github.com/Ishan130803/Web-RAG-Chat/raw/refs/heads/main/README.md",
  },
];
