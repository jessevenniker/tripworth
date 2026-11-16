// Business details shown in the privacy policy, the terms and the footer.
// Fill these in before launch (open decision 5 in BOUWPLAN.md: legal form and country).
// Empty fields show up as "[...]" placeholders on the legal pages.
export const company = {
  /** Registered name, for example "Tripsworth B.V." or the name of a sole trader. */
  legalName: "",
  /** Street, postcode and city. */
  address: "",
  /** Dutch Chamber of Commerce number (KvK). */
  chamberOfCommerce: "",
  /** VAT number (btw-id). */
  vatNumber: "",
  /** Address for privacy requests and customer questions. */
  email: "",
};

export function companyField(key: keyof typeof company, placeholder: string): string {
  return company[key] || `[${placeholder}]`;
}

/** True once every field is filled in. */
export function companyComplete(): boolean {
  return Object.values(company).every(Boolean);
}
