/** Build tel: href from a US-style display number (e.g. 650-881-2400). */
export function telHrefFromNational(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return `tel:+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1")) return `tel:+${digits}`;
  return `tel:${encodeURIComponent(phone)}`;
}
