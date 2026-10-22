export type ContactFields = {
  name: string;
  email: string;
  message: string;
};

export type ContactFieldErrors = Partial<Record<keyof ContactFields, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactFields(fields: ContactFields): ContactFieldErrors {
  const errors: ContactFieldErrors = {};

  if (!fields.name) errors.name = "Please add your name.";
  if (!fields.email || !EMAIL_PATTERN.test(fields.email)) {
    errors.email = "Please add a valid email.";
  }
  if (fields.message.length < 12) {
    errors.message = "Tell me a little more about the idea.";
  }

  return errors;
}

export function buildWhatsAppMessage(fields: ContactFields): string {
  return [
    "Hello Kidist, I would like to get in touch.",
    "",
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    "",
    "Message:",
    fields.message,
  ].join("\n");
}

export function buildWhatsAppUrl(baseUrl: string, fields: ContactFields): string {
  const text = encodeURIComponent(buildWhatsAppMessage(fields));
  const separator = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${separator}text=${text}`;
}
