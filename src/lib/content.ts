export type NavItem = { href: string; label: string };

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#programmes", label: "Programs" },
  { href: "#gallery", label: "Gallery" },
  { href: "#involved", label: "Get Involved" },
];

export const cities: string[] = [
  "Lagos", "New York", "Chicago", "Accra", "Yaoundé", "Freetown",
  "Paris", "Berlin", "Lusaka", "Kampala", "Harare",
];

export type HeadlineStat = { value: string; label: string };

export const headlineStats: HeadlineStat[] = [
  { value: "84", label: "Global community members" },
  { value: "10", label: "Countries represented" },
  { value: "60", label: "Bootcamp alumni" },
  { value: "3", label: "Cities, one community" },
];

export const about = {
  intro:
    "Poets Speak Louder is a faith-based 501 (c)(3) non-profit organization dedicated to empowering people to discover and express their creativity through poetry, spoken word, and other forms of public speaking. We teach, train, mentor, and intentionally foster connections between creatives from different countries and cities through in-person and virtual workshops and community discussions.",
  vision:
    "To see poets, spoken word artists and creative speakers bring light, hope and healing through their gifts — speaking louder than any darkness, confusion, hatred or violence.",
  mission:
    "To create spaces where creative capacities can be discovered, nurtured, strengthened and fully expressed.",
};

export type Programme = {
  id: string;
  roman: string;
  tag: string;
  title: string;
  text: string;
  details: string;
  topics?: string[];
  fact: string;
  imageAlt: string;
};

export const programmes: Programme[] = [
  {
    id: "global-community",
    roman: "01",
    tag: "Monthly · Virtual",
    title: "PSL Global Community",
    text: "A growing, cross-border home for creatives who want to learn, share, grow and encourage one another.",
    details:
      "Members connect across cities and countries through monthly virtual gatherings. The community creates room for writing sessions, delivery practice, biblical conversations and meaningful relationships between creatives who might never otherwise meet.",
    fact: "84 members across 10 countries since October 2025.",
    imageAlt: "Poets Speak Louder global community members learning and sharing together",
  },
  {
    id: "spoken-word-bootcamp",
    roman: "02",
    tag: "January – April · Virtual",
    title: "Spoken Word Bootcamp",
    text: "A focused four-month learning experience for people ready to develop their writing, voice and confidence.",
    details:
      "Across 16 guided sessions, participants work through writing, delivery, discussion, Bible study, prayer and coaching. The bootcamp is designed to help each participant strengthen their craft and communicate with greater clarity and conviction. Participants who complete the programme receive a certificate.",
    fact: "3 cohorts · 60 participants from 5 countries.",
    imageAlt: "Spoken Word Bootcamp participants taking part in a virtual learning session",
  },
  {
    id: "in-the-beginning-was-the-word",
    roman: "03",
    tag: "In-person workshop",
    title: "In the Beginning Was the Word",
    text: "An immersive workshop exploring the relationship between faith, inspiration, writing and spoken-word delivery.",
    details:
      "The experience brings together practical writing and delivery training, teaching on the foundation of creative gifts in the Word, conversations with seasoned ministers and an open mic. It gives participants space to ask questions, practise their craft and explore how spoken word can communicate faith in different settings.",
    topics: [
      "Demystifying the Idea of Inspiration",
      "Hearing God's Word",
      "Delivering the Message",
      "The Holy Spirit and Poetic Devices",
      "Spoken Word for Christ in Secular Spaces",
    ],
    fact: "Lagos & New York · 35+ participants · 5 guest speakers.",
    imageAlt: "Participants at the In the Beginning Was the Word poetry and spoken-word workshop",
  },
  {
    id: "the-first-mic",
    roman: "04",
    tag: "Children & youth",
    title: "The First Mic",
    text: "Helping children and young people find the confidence to express themselves and speak clearly.",
    details:
      "Through creative writing and public-speaking workshops delivered with schools, churches and community organisations, young participants are encouraged to explore their ideas, shape their words and practise sharing them with an audience. The programme creates an encouraging first stage for emerging voices.",
    fact: "Loud & Clear, Chicago · September 2026 · nearly 30 children aged 8–14.",
    imageAlt: "Children participating in The First Mic Loud and Clear public-speaking workshop",
  },
];
