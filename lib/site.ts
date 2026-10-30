// Identité de la marque — source unique de vérité.
// Pour renommer le site ou lancer un autre projet, on ne modifie que ce fichier.
export const SITE = {
  name: "TaymaTech",
  url: "https://webagency-chi.vercel.app", // à remplacer quand le domaine sera acheté
  email: "youssefounana@gmail.com",
  whatsapp: "33752242532", // format international, sans "+" ni espaces
} as const;

// Remplace {siteName} et {email} dans les textes récupérés avec t.raw(),
// qui ne gère pas l'interpolation de next-intl.
export function withSiteVars(text: string): string {
  return text.replaceAll("{siteName}", SITE.name).replaceAll("{email}", SITE.email);
}
