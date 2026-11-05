/**
 * Single source of truth for site-wide facts.
 * Change the values here and they update everywhere (page, SEO tags, structured data).
 */
export const site = {
  name: "Poets Speak Louder",
  tagline: "A home for voices that carry light.",
  description:
    "Poets Speak Louder is a faith-based 501(c)(3) non-profit organization dedicated to empowering people to discover and express their creativity through poetry, spoken word and other forms of public speaking. We teach, train, mentor and connect creatives across countries and cities through in-person and virtual workshops and community discussions.",
  shortDescription:
    "A faith-based 501(c)(3) non-profit creating spaces for creative voices to be discovered, nurtured and fully expressed.",
  // Set NEXT_PUBLIC_SITE_URL in .env.local and on Vercel. See README.
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example.org").replace(/\/$/, ""),
  locale: "en_US",
  email: "poetsspeaklouder@gmail.com",
  joinUrl: "https://bit.ly/PSLCOM",
  instagram: { handle: "@Poetsspeaklouder", url: "https://www.instagram.com/poetsspeaklouder" },
  address: { locality: "Chicago", region: "IL", country: "US" },
  // The Give section displays these. Confirm with the client that she wants them public.
  giving: {
    accountName: "Poets Speak Louder, Chicago, IL",
    bank: "Chase Bank",
    accountNumber: "2911705336",
    routingNumber: "071000013",
    zelle: "poetsspeaklouder@gmail.com",
  },
} as const;

export const firstMicMailto = `mailto:${site.email}?subject=${encodeURIComponent("The First Mic")}`;
