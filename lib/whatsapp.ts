/**
 * WhatsApp Form Redirect Utility
 * Generates structured WhatsApp messages from form data and opens WhatsApp.
 */

const WHATSAPP_NUMBER = "919842043815"; // +91 98420 43815

/**
 * Build a WhatsApp `wa.me` URL with a structured prefilled message.
 */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/**
 * Open WhatsApp in a new tab with the given message.
 */
export function openWhatsApp(message: string): void {
  const url = buildWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

/* ─── Admission Enquiry ─── */

interface AdmissionFormData {
  parentName: string;
  studentName: string;
  applyingClass: string;
  phone: string;
  email?: string;
  message?: string;
}

export function buildAdmissionMessage(data: AdmissionFormData): string {
  const lines = [
    `📋 *ADMISSION ENQUIRY — 2026–2027*`,
    `━━━━━━━━━━━━━━━━━━━━━`,
    `🏫 Rainbow Matriculation School, Orathi`,
    ``,
    `👤 *Parent / Guardian:* ${data.parentName}`,
    `👦 *Student Name:* ${data.studentName}`,
    `📚 *Applying for:* ${data.applyingClass}`,
    `📞 *Contact:* ${data.phone}`,
  ];

  if (data.email) {
    lines.push(`📧 *Email:* ${data.email}`);
  }

  lines.push(``);

  if (data.message) {
    lines.push(`💬 *Remarks:*`);
    lines.push(data.message);
    lines.push(``);
  }

  lines.push(`━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`Sent via Rainbow School Website`);

  return lines.join("\n");
}

/* ─── Contact / General Enquiry ─── */

interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
}

export function buildContactMessage(data: ContactFormData): string {
  const lines = [
    `✉️ *GENERAL ENQUIRY*`,
    `━━━━━━━━━━━━━━━━━━━━━`,
    `🏫 Rainbow Matriculation School, Orathi`,
    ``,
    `👤 *Name:* ${data.name}`,
    `📞 *Phone:* ${data.phone}`,
  ];

  if (data.email) {
    lines.push(`📧 *Email:* ${data.email}`);
  }

  if (data.subject) {
    lines.push(`📌 *Subject:* ${data.subject}`);
  }

  lines.push(``);
  lines.push(`💬 *Message:*`);
  lines.push(data.message);
  lines.push(``);
  lines.push(`━━━━━━━━━━━━━━━━━━━━━`);
  lines.push(`Sent via Rainbow School Website`);

  return lines.join("\n");
}
