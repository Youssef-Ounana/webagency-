import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, budget, message } = body;

    if (!name || !email || !projectType || !budget || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    // Instancié ici, pas au niveau du fichier : ne s'exécute qu'à la
    // réception d'une vraie requête, jamais pendant `next build`.
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email,
      subject: `Nouvelle demande de projet — ${name}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Société :</strong> ${company || "Non renseignée"}</p>
        <p><strong>Type de projet :</strong> ${projectType}</p>
        <p><strong>Budget :</strong> ${budget}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi email :", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi." },
      { status: 500 }
    );
  }
}