export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#programmes", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#involved", label: "Get Involved" },
];

/** Cities standing in for the 10 countries in the Global Community, for the scrolling ticker */
export const cities: string[] = [
  "Lagos",
  "New York",
  "Chicago",
  "Accra",
  "Yaoundé",
  "Freetown",
  "Paris",
  "Berlin",
  "Lusaka",
  "Kampala",
  "Harare",
];

export const quote = {
  lead: "“In the beginning was the Word”",
  rest: "— and every gift of speech begins with Him.",
};

export type HeadlineStat = { value: string; label: string };

export const headlineStats: HeadlineStat[] = [
  { value: "84", label: "Global community members" },
  { value: "10", label: "Countries represented" },
  { value: "60", label: "Bootcamp alumni" },
  { value: "3", label: "Cities, one Word" },
];

export const about = {
  intro:
    "Poets Speak Louder is a faith-based non-profit that teaches, trains and mentors people in creative writing, poetry, spoken word and public speaking — connecting creatives across countries through workshops and genuine conversation about our gifts and our Christian faith.",
  vision:
    "To see poets, spoken word artists and creative speakers bring light, hope and healing through their gifts — speaking louder than any darkness, confusion, hatred or violence.",
  mission: "To create spaces where creative capacities can be discovered, nurtured, strengthened and fully expressed.",
};

export type Programme = {
  id: string;
  roman: string;
  tag: string;
  title: string;
  text: string;
  topics?: string[];
  fact: string;
};

export const programmes: Programme[] = [
  {
    id: "global-community",
    roman: "I",
    tag: "Monthly · Virtual",
    title: "PSL Global Community",
    text: "Poets from many nations meeting monthly for writing sessions, delivery sessions and biblical discussion.",
    fact: "84 members across 10 countries since October 2025.",
  },
  {
    id: "spoken-word-bootcamp",
    roman: "II",
    tag: "January – April · Virtual",
    title: "Spoken Word Bootcamp",
    text: "A 4-month intensive of 16 sessions: writing, delivery, discussion, Bible study, prayer and coaching — ending with a certificate of completion.",
    fact: "3 cohorts, 60 participants from 5 countries.",
  },
  {
    id: "in-the-beginning-was-the-word",
    roman: "III",
    tag: "In-person workshop",
    title: "In the Beginning was the Word",
    text: "Writing and delivery training, teaching on the foundation of our gifts in the Word, Q&A with seasoned ministers and an open mic.",
    topics: [
      "Demystifying the Idea of Inspiration",
      "Hearing God's Word",
      "Delivering the Message",
      "The Holy Spirit and Poetic Devices",
      "Spoken Word for Christ in Secular Spaces",
    ],
    fact: "Lagos & New York — 35+ participants, 5 guest speakers.",
  },
  {
    id: "the-first-mic",
    roman: "IV",
    tag: "Children & youth",
    title: "The First Mic",
    text: "Creative writing and public speaking workshops with schools, churches and community organisations.",
    fact: "“Loud & Clear”, Chicago, Sept 2026 — nearly 30 children aged 8 to 14.",
  },
];
