import type { LucideIcon } from "lucide-react";
import { Mail, MessageCircle } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socials: SocialLink[] = [
  { icon: MessageCircle, href: "https://wa.me/33600000000", label: "WhatsApp" },
  { icon: Mail, href: "mailto:contact@webagency.com", label: "Email" },
];