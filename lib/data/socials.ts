import type { LucideIcon } from "lucide-react";
import { Mail, MessageCircle } from "lucide-react";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socials: SocialLink[] = [
  { icon: MessageCircle, href: "https://wa.me/33600000000", label: "WhatsApp" }, //a ajouter plus tard
  { icon: Mail, href: "mailto:youssefounana@gmail.com", label: "Email" },
];