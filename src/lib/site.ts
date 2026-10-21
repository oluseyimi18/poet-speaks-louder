/**
 * Single source of truth for site-wide facts.
 * Change the values here and they update everywhere (page, SEO tags, structured data).
 */
export const site = {
  name: "Poets Speak Louder",
  tagline: "Speak. Speak up. Speak louder.",
  description:
    "Poets Speak Louder is a faith-based non-profit that teaches, trains and mentors poets, spoken word artists and creative speakers through an online global community, an annual Spoken Word Bootcamp, in-person workshops and youth programmes.",
  shortDescription:
    "A faith-based non-profit teaching, training and mentoring poets, spoken word artists and creative speakers across the world.",
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
