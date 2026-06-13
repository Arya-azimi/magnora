export interface ServiceCardInfo {
  title: string;
  description: string;
  icon: string;
  linkPath: string;
  gridClass: string;
  delay: string;
}

export const servicesCardInfoes: ServiceCardInfo[] = [
  {
    title: "Deep Learning",
    description: "Train multi-layer Neural Networks for complex pattern recognition and prediction.",
    icon: "ns-shape-1",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
    delay: "0.1",
  },
  {
    title: "Computer Vision",
    description: "Image and video analysis powered by convolutional Neural Networks (CNNs).",
    icon: "ns-shape-2",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
    delay: "0.2",
  },
  {
    title: "NLP & Transformers",
    description: "Language understanding and generation with transformer architectures.",
    icon: "ns-shape-3",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
    delay: "0.3",
  },
  {
    title: "Neural Architecture",
    description: "Custom network design, hyperparameter tuning, and automated ML (NAS).",
    icon: "ns-shape-4",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6",
    delay: "0.4",
  },
  {
    title: "Model Deployment",
    description: "Production inference APIs and edge deployment for trained Neural Networks.",
    icon: "ns-shape-5",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6",
    delay: "0.5",
  },
  {
    title: "Reinforcement Learning",
    description: "Train agents to make sequential decisions through reward-based optimization.",
    icon: "ns-shape-6",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
    delay: "0.1",
  },
  {
    title: "Time Series Forecasting",
    description: "Recurrent and attention-based models for sequence prediction.",
    icon: "ns-shape-7",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
    delay: "0.2",
  },
  {
    title: "Transfer Learning",
    description: "Leverage pre-trained models and fine-tune for your domain.",
    icon: "ns-shape-8",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
    delay: "0.3",
  },
  {
    title: "AutoML & NAS",
    description: "Automate model selection, architecture search, and hyperparameter tuning.",
    icon: "ns-shape-9",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6",
    delay: "0.4",
  },
  {
    title: "Edge AI",
    description: "Deploy lightweight Neural Networks on devices and embedded systems.",
    icon: "ns-shape-10",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6",
    delay: "0.5",
  },
  {
    title: "Generative Models",
    description: "GANs, VAEs, and diffusion models for synthetic data and content.",
    icon: "ns-shape-11",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
    delay: "0.1",
  },
  {
    title: "Multimodal AI",
    description: "Combine vision, language, and other modalities in unified models.",
    icon: "ns-shape-12",
    linkPath: "/service-details",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4",
    delay: "0.2",
  },
  {
    title: "MLOps & Pipelines",
    description: "CI/CD, monitoring, and lifecycle management for Neural Networks.",
    icon: "ns-shape-13",
    linkPath: "/service-details",
    gridClass: "col-span-12 lg:col-span-4",
    delay: "0.3",
  }
];