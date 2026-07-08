import type { LucideIcon } from "lucide-react";
import { Code2, Zap, MessageCircle, Gauge } from "lucide-react";

export interface WhyChooseMeItem {
  slug: string;
  icon: LucideIcon;
}

export const whyChooseMeItems: WhyChooseMeItem[] = [
  { slug: "quality", icon: Code2 },
  { slug: "speed", icon: Zap },
  { slug: "communication", icon: MessageCircle },
  { slug: "performance", icon: Gauge },
];