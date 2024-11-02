import { BotMessageSquare, Fingerprint, ShieldHalf, BrainCog, HeartHandshake, LineChart } from 'lucide-react';

export const LANDING_PAGE_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#features', label: 'Features' },
  // { href: '/#pricing', label: 'Pricing' },
  // { href: '/#testimonials', label: 'Testimonials' },
]

export const LANDING_PAGE_FEATURES = [
  {
    icon: <BotMessageSquare />,
    text: "AI-Powered Conversations",
    description:
      "Engage in meaningful conversations with an AI chatbot designed to support journaling, self-reflection, and emotional growth.",
  },
  {
    icon: <Fingerprint />,
    text: "Personalized Recommendations",
    description:
      "Receive personalized advice and insights tailored to your emotional well-being based on your journaling history.",
  },
  {
    icon: <ShieldHalf />,
    text: "Data Privacy and Security",
    description:
      "Rest assured that your personal data and journal entries are secured with robust privacy measures and encryption.",
  },
  {
    icon: <BrainCog />,
    text: "Emotional Analysis",
    description:
      "Get detailed insights into your emotional patterns and behaviors, helping you understand and manage your feelings better.",
  },
  {
    icon: <HeartHandshake />,
    text: "Guided Self-Care Prompts",
    description:
      "Benefit from guided prompts designed to encourage self-reflection and promote mental wellness practices.",
  },
  {
    icon: <LineChart />,
    text: "Progress Tracking",
    description:
      "Track your emotional growth and see your progress over time with interactive visual reports and summaries.",
  },
];