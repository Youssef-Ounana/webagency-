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
  { slug: "webapp", icon: AppWindow, titleKey: "services.items.webapp.title", descriptionKey: "services.items.webapp.description" },
  { slug: "refonte", icon: RefreshCw, titleKey: "services.items.refonte.title", descriptionKey: "services.items.refonte.description" },
  { slug: "seo", icon: Search, titleKey: "services.items.seo.title", descriptionKey: "services.items.seo.description" },
  { slug: "maintenance", icon: Wrench, titleKey: "services.items.maintenance.title", descriptionKey: "services.items.maintenance.description" },
  { slug: "hosting", icon: Server, titleKey: "services.items.hosting.title", descriptionKey: "services.items.hosting.description" },
  { slug: "performance", icon: Gauge, titleKey: "services.items.performance.title", descriptionKey: "services.items.performance.description" },
];
