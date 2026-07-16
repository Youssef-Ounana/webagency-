import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NextIntlClientProvider } from "next-intl";
import { describe, expect, it } from "vitest";
import { FAQ } from "./Faq";

// Traductions minimales, juste ce dont le composant a besoin pour ce test
const messages = {
  faq: {
    title: "Questions fréquentes",
    subtitle: "Sous-titre de test",
    items: {
      delai: { question: "Combien de temps ?", answer: "Réponse délai" },
      prix: { question: "Quel prix ?", answer: "Réponse prix" },
      maintenance: { question: "Maintenance ?", answer: "Réponse maintenance" },
      hebergement: { question: "Hébergement ?", answer: "Réponse hébergement" },
      modifications: { question: "Modifications ?", answer: "Réponse modifications" },
      seo: { question: "SEO ?", answer: "Réponse seo" },
    },
  },
};

function renderFAQ() {
  return render(
    <NextIntlClientProvider locale="fr" messages={messages}>
      <FAQ />
    </NextIntlClientProvider>
  );
}

describe("FAQ", () => {
  it("affiche le titre de la section", () => {
    renderFAQ();
    expect(screen.getByText("Questions fréquentes")).toBeInTheDocument();
  });

  it("ouvre la réponse quand on clique sur une question fermée", async () => {
    renderFAQ();
    const user = userEvent.setup();

    // "prix" n'est pas ouvert par défaut (seul le 1er élément l'est)
    expect(screen.queryByText("Réponse prix")).not.toBeInTheDocument();

    await user.click(screen.getByText("Quel prix ?"));

    expect(screen.getByText("Réponse prix")).toBeInTheDocument();
  });
});