import type { LucideIcon } from "lucide-react";
import { Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export interface SocialLink {
  icon: LucideIcon;
  href: string;
  label: string;
}

export const socials: SocialLink[] = [
  { icon: MessageCircle, href: `https://wa.me/${SITE.whatsapp}`, label: "WhatsApp" },
  { icon: Mail, href: `mailto:${SITE.email}`, label: "Email" },
];
