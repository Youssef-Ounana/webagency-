import type { LucideIcon } from "lucide-react";
import { Search, ClipboardList, Palette, Code2, TestTube2, Rocket, LifeBuoy } from "lucide-react";

export interface ProcessStep {
  slug: string;
  icon: LucideIcon;
}

export const processSteps: ProcessStep[] = [
  { slug: "analysis", icon: Search },
  { slug: "planning", icon: ClipboardList },
  { slug: "design", icon: Palette },
  { slug: "development", icon: Code2 },
  { slug: "testing", icon: TestTube2 },
  { slug: "launch", icon: Rocket },
  { slug: "maintenance", icon: LifeBuoy },
];