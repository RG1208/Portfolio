import emailjs from '@emailjs/browser';

type ContactFormPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  sourcePage: string;
};

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  toEmail: import.meta.env.VITE_CONTACT_TO_EMAIL,
};

const assertEmailConfig = () => {
  const missingKeys = Object.entries(EMAILJS_CONFIG)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingKeys.length > 0) {
    throw new Error(
      `Missing EmailJS config: ${missingKeys.join(', ')}. Add them to your .env.local file.`
    );
  }
};

const buildTranscript = ({
  name,
  email,
  subject,
  message,
  sourcePage,
}: ContactFormPayload) => {
  return [
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    `Source Page: ${sourcePage}`,
    `Submitted At: ${new Date().toISOString()}`,
    '',
    'Message:',
    message,
  ].join('\n');
};

export const sendContactEmail = async (payload: ContactFormPayload) => {
  assertEmailConfig();

  const transcript = buildTranscript(payload);

  await emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    {
      from_name: payload.name,
      from_email: payload.email,
      reply_to: payload.email,
      subject: payload.subject,
      message: payload.message,
      transcript,
      source_page: payload.sourcePage,
      submitted_at: new Date().toLocaleString(),
      to_email: EMAILJS_CONFIG.toEmail,
    },
    EMAILJS_CONFIG.publicKey
  );
};
