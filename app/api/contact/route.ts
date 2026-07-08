import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, projectType, budget, message } = body;

    // Validation basique côté serveur : ne jamais faire confiance
    // uniquement à la validation HTML du formulaire (contournable facilement).
    if (!name || !email || !projectType || !budget || !message) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email, // pour pouvoir répondre directement au client depuis votre boîte mail
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