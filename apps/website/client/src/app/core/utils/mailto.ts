/** Builds a mailto link with an encoded subject and body. */
export function buildMailto(to: string, subject: string, body: string): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Renders form fields as "Label: value" lines for an e-mail body. */
export function formatFormLines(fields: readonly (readonly [string, string])[]): string {
  return fields
    .filter(([, value]: readonly [string, string]) => value.trim().length > 0)
    .map(([label, value]: readonly [string, string]) => `${label}: ${value.trim()}`)
    .join('\n');
}
