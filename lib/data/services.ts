import type { LucideIcon } from "lucide-react";
import { Globe, ShoppingCart, AppWindow, RefreshCw, Search, Wrench, Server, Gauge } from "lucide-react";

export interface Service {
  slug: string;
  icon: LucideIcon;
  titleKey: string;       // clé de traduction, pas le texte en dur
  descriptionKey: string;
}

export const services: Service[] = [
  { slug: "vitrine", icon: Globe, titleKey: "services.items.vitrine.title", descriptionKey: "services.items.vitrine.description" },
  { slug: "ecommerce", icon: ShoppingCart, titleKey: "services.items.ecommerce.title", descriptionKey: "services.items.ecommerce.description" },
  // ... les 8 services
];