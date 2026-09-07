export interface SchoolEvent {
  id: string;
  title: string;
  category: "Celebration" | "Academic" | "Sports" | "Cultural" | "Notice";
  date: string;
  description: string;
  highlights: string[];
  status: "Upcoming" | "Annual Feature";
}

export const schoolEvents: SchoolEvent[] = [
  {
    id: "independence-day",
    title: "National Independence Day Celebrations",
    category: "Celebration",
    date: "August 15",
    description: "Flag hoisting ceremony, patriotic speeches in English & Tamil, student marching drills, and cultural performances celebrating India's heritage.",
    highlights: ["Tricolour Flag Hoisting", "Patriotic Rhymes & Songs", "Student Speeches", "Sweets Distribution"],
    status: "Annual Feature"
  },
  {
    id: "republic-day",
    title: "Republic Day & Constitution Day Assembly",
    category: "Celebration",
    date: "January 26",
    description: "Honouring the Indian Constitution with civic awareness drills, student elocution, tableau presentations, and sports honors.",
    highlights: ["Ceremonial Parade", "Constitution Preamble Reading", "Cultural Dance"],
    status: "Annual Feature"
  },
  {
    id: "annual-sports-meet",
    title: "Annual Track & Field Sports Meet",
    category: "Sports",
    date: "Annual Term Event",
    description: "Exciting day of sprints, lemon-and-spoon races for Kindergarten, relay races, and award ceremonies on our open playground.",
    highlights: ["Kindergarten Fun Races", "Primary Sprint & Relays", "House March-Past", "Medal Ceremony"],
    status: "Annual Feature"
  },
  {
    id: "pongal-vizha",
    title: "Tamil Cultural Pongal Celebration (பொங்கல் விழா)",
    category: "Cultural",
    date: "January 13 – 14",
    description: "Traditional Tamil heritage festival celebrated with traditional attire, Uri-Adithal, kolam art, sweet Pongal cooking, and folk songs.",
    highlights: ["Traditional Attire Day", "Uri Adithal & Folk Games", "Kolam Competition", "Sweet Pongal Sharing"],
    status: "Annual Feature"
  },
  {
    id: "science-exhibition",
    title: "Young Explorers Science & Art Fair",
    category: "Academic",
    date: "Second Term",
    description: "Interactive exhibition where primary and middle school students present working models, nature charts, and creative crafts.",
    highlights: ["EVS Working Models", "Handmade Craft Displays", "Parent Showcase", "Certificate of Merit"],
    status: "Annual Feature"
  },
  {
    id: "childrens-day",
    title: "Children's Day & Talent Showcase",
    category: "Celebration",
    date: "November 14",
    description: "Dedicated day of joy celebrating our students with teacher-led skits, games, drawing contests, and storytelling sessions.",
    highlights: ["Fun Games & Drama", "Drawing & Colouring Contests", "Storytelling Hour"],
    status: "Annual Feature"
  }
];

export const academicCalendarHighlights = [
  { term: "Term 1 (June – September)", description: "Academic reopening, baseline assessment, Independence Day, and Quarterly Examinations." },
  { term: "Term 2 (October – December)", description: "Half-Yearly curriculum coverage, science/art activities, Children's Day, and Half-Yearly Examinations." },
  { term: "Term 3 (January – April)", description: "Pongal festival, Republic Day, annual sports meet, Annual Examinations, and summer vacation announcement." },
];
