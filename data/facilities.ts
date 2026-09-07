export interface FacilityDetail {
  id: string;
  title: string;
  category: "Academics" | "Infrastructure" | "Health & Hygiene" | "Recreation & Sports";
  description: string;
  verifiedData: string;
  features: string[];
  verificationBadge: "VERIFIED_GOVERNMENT_RECORD" | "CAMPUS_BASE";
  iconName: string;
}

export const campusFacilities: FacilityDetail[] = [
  {
    id: "instructional-classrooms",
    title: "13 Instructional Classrooms",
    category: "Infrastructure",
    description: "Spacious, well-ventilated classrooms with abundant natural sunlight, comfortable student desks, blackboards/whiteboards, and teacher podiums.",
    verifiedData: "13 instructional rooms officially recorded in UDISE baseline (all functional and well maintained).",
    features: [
      "Optimal student-seating arrangements",
      "Large windows for cross-ventilation",
      "Clean display boards for student art and charts",
      "Full electrical connectivity with ceiling fans and lights"
    ],
    verificationBadge: "VERIFIED_GOVERNMENT_RECORD",
    iconName: "Building2"
  },
  {
    id: "campus-library",
    title: "Curated Reading Room & Library",
    category: "Academics",
    description: "A calm, dedicated reading space equipped with bilingual storybooks, general knowledge encyclopedias, and moral education literature.",
    verifiedData: "50+ foundational reference and reading titles cataloged in official survey.",
    features: [
      "Bilingual reading titles in English and Tamil",
      "Age-appropriate picture books for Pre-Primary",
      "Reference books for primary science and mathematics",
      "Quiet reading environment promoting daily literacy"
    ],
    verificationBadge: "VERIFIED_GOVERNMENT_RECORD",
    iconName: "BookOpen"
  },
  {
    id: "playground-sports",
    title: "Outdoor Playground & Sports Yard",
    category: "Recreation & Sports",
    description: "An open campus ground dedicated to physical education, morning assemblies, running track activities, team sports, and supervised play.",
    verifiedData: "Dedicated playground facility confirmed in government school directory.",
    features: [
      "Space for athletics, running, and physical drills",
      "Kho-Kho, Kabaddi, and badminton recreation zones",
      "Daily morning prayer and mass PT assembly space",
      "Annual sports day and track events venue"
    ],
    verificationBadge: "VERIFIED_GOVERNMENT_RECORD",
    iconName: "Trophy"
  },
  {
    id: "safe-drinking-water",
    title: "Functional Piped Tap Water Supply",
    category: "Health & Hygiene",
    description: "Continuous tap water supply providing safe, clean water for drinking and general campus hygiene throughout school hours.",
    verifiedData: "Functional tap water infrastructure verified on UDISE record.",
    features: [
      "Hygienic water dispensing points",
      "Dedicated handwashing bays before lunch and after play",
      "Regular maintenance of plumbing fixtures"
    ],
    verificationBadge: "VERIFIED_GOVERNMENT_RECORD",
    iconName: "Droplets"
  },
  {
    id: "sanitation-facilities",
    title: "Dedicated Gender-Segregated Sanitation",
    category: "Health & Hygiene",
    description: "Separate functional restroom facilities for boys and girls, maintained with strict daily sanitation and water connectivity.",
    verifiedData: "Independent functional boys and girls toilet blocks verified.",
    features: [
      "Separate boys' and girls' restrooms",
      "Continuous water availability",
      "Daily cleaning and sanitization regimen",
      "Privacy-oriented construction"
    ],
    verificationBadge: "VERIFIED_GOVERNMENT_RECORD",
    iconName: "ShieldCheck"
  },
  {
    id: "all-weather-connectivity",
    title: "Pucca All-Weather Road Access",
    category: "Infrastructure",
    description: "Located right along the Tindivanam-Orathi thoroughfare with seamless all-weather approachability for parents, vans, and staff.",
    verifiedData: "All-weather pucca road accessibility verified in regional logistics survey.",
    features: [
      "Direct vehicle drop-off and pickup area",
      "Safe pedestrian approach for local students",
      "Proximity to Orathi bus stop & central junction"
    ],
    verificationBadge: "VERIFIED_GOVERNMENT_RECORD",
    iconName: "MapPin"
  }
];
