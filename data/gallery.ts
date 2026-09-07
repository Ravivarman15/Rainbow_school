export interface GalleryPhotoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  tag: string;
  date?: string;
}

export type GalleryItem = GalleryPhotoItem;

export interface LifeSubSection {
  id: string;
  categoryName: string;
  iconName: "BookOpen" | "Users" | "Sparkles" | "Trophy" | "Building2" | "GraduationCap";
  titlePrefix: string;
  titleHighlight: string;
  highlightColor: string; // Tailwind text color e.g. text-amber-500
  badgeColor: string;
  tamilTitle: string;
  description: string;
  photos: GalleryPhotoItem[];
}

export const lifeSubSections: LifeSubSection[] = [
  {
    id: "academics-excellence",
    categoryName: "Academics",
    iconName: "BookOpen",
    titlePrefix: "Academic ",
    titleHighlight: "Learning & Foundations",
    highlightColor: "text-indigo-600",
    badgeColor: "bg-indigo-50 border-indigo-200 text-indigo-700",
    tamilTitle: "வகுப்பறை & கல்வி அடித்தளம்",
    description:
      "Structured concept-driven education where 14 dedicated educators foster bilingual fluency in English and Tamil, foundational numeracy, and active classroom inquiry across 13 functional classrooms.",
    photos: [
      {
        id: "acad-1",
        title: "Personal Teacher Mentorship & Doubt Clearing",
        category: "Academics",
        description: "Dedicated one-on-one attention from certified teachers helping students master writing, spelling, and individual conceptual doubts.",
        imageSrc: "/images/gallery/acad-mentorship.jpg",
        tag: "1-on-1 Guidance",
        date: "Daily Morning Session",
      },
      {
        id: "acad-2",
        title: "Interactive Classroom & Peer Learning",
        category: "Academics",
        description: "Active concept learning with dedicated faculty, bilingual teaching aids in English and Tamil, and attentive student participation in foundational subjects.",
        imageSrc: "/images/gallery/acad-classroom.jpg",
        tag: "13 Classrooms",
        date: "Daily Subject Hours",
      },
      {
        id: "acad-3",
        title: "Bilingual Language & Phonics Fluency",
        category: "Academics",
        description: "Equal emphasis on spoken English confidence, vocabulary building, and rich Tamil linguistic mastery through phonics and reading aloud.",
        imageSrc: "/images/gallery/acad-phonics.jpg",
        tag: "Bilingual Medium",
        date: "Language Period",
      },
      {
        id: "acad-4",
        title: "Foundational Mathematics & Arithmetic",
        category: "Academics",
        description: "Interactive mental math, times tables, counting aids, and practical problem solving tailored to primary and middle grades.",
        imageSrc: "/images/gallery/acad-math.jpg",
        tag: "Math Literacy",
        date: "Numeracy Hour",
      },
    ],
  },
  {
    id: "student-teacher-bonding",
    categoryName: "Teacher Bonding",
    iconName: "Users",
    titlePrefix: "Student & Teacher ",
    titleHighlight: "Bonding & Care",
    highlightColor: "text-amber-500",
    badgeColor: "bg-amber-50 border-amber-200 text-amber-700",
    tamilTitle: "மாணவர் & ஆசிரியர் வழிகாட்டுதல்",
    description:
      "At Rainbow, teachers are more than educators — they are mentors who understand each child's strengths, encourage polite conduct, and build self-confidence through continuous encouragement.",
    photos: [
      {
        id: "bond-1",
        title: "Nurturing Classroom Handwriting Guidance",
        category: "Teacher Bonding",
        description: "Gentle step-by-step coaching to instill neat Tamil and English cursive writing habits, proper pencil grip, and classroom focus.",
        imageSrc: "/images/gallery/bond-writing.jpg",
        tag: "Handwriting Care",
        date: "Guided Writing Time",
      },
      {
        id: "bond-2",
        title: "Moral Guidance & Values Education",
        category: "Teacher Bonding",
        description: "Morning assemblies and teacher circle discussions emphasizing respect for elders, discipline, truthfulness, and peer empathy.",
        imageSrc: "/images/gallery/bond-assembly.jpg",
        tag: "Values & Ethics",
        date: "Morning Assembly",
      },
      {
        id: "bond-3",
        title: "Continuous Formative Praise & Support",
        category: "Teacher Bonding",
        description: "Appreciating student effort in classroom recitation, notebook neatness, and good manners with encouraging feedback.",
        imageSrc: "/images/gallery/bond-praise.jpg",
        tag: "Positive Motivation",
        date: "Class Hours",
      },
      {
        id: "bond-4",
        title: "Parent-Teacher Periodic Feedback Desk",
        category: "Teacher Bonding",
        description: "Transparent updates on student attendance, foundational learning milestones, and personalized study habits for parents in Orathi.",
        imageSrc: "/images/gallery/bond-ptm.jpg",
        tag: "Parent Collaboration",
        date: "Term Consultation",
      },
    ],
  },
  {
    id: "celebrations-events",
    categoryName: "Celebrations",
    iconName: "Sparkles",
    titlePrefix: "Celebrations & ",
    titleHighlight: "Tamil Cultural Events",
    highlightColor: "text-rose-500",
    badgeColor: "bg-rose-50 border-rose-200 text-rose-700",
    tamilTitle: "பாரம்பரிய விழாக்கள் & பண்பாடு",
    description:
      "From traditional Pongal celebrations (பொங்கல் விழா) to national pride assemblies and annual day performances, our students celebrate community joy and heritage.",
    photos: [
      {
        id: "celeb-1",
        title: "Traditional Pongal Vizha & Kolam Heritage (பொங்கல் விழா)",
        category: "Celebrations",
        description: "Students and faculty celebrating traditional Pongal with decorated clay mud pots, colorful kolam artistry, sugarcane, and traditional ethnic attire.",
        imageSrc: "/images/gallery/celeb-pongal.jpg",
        tag: "Pongal Celebration",
        date: "January 2026",
      },
      {
        id: "celeb-2",
        title: "Independence Day & Republic Day Flag Ceremonies",
        category: "Celebrations",
        description: "Patriotic tricolor flag hoisting, Tamil and English student speeches, national anthem, and synchronized march-past on campus grounds.",
        imageSrc: "/images/gallery/celeb-flag.jpg",
        tag: "National Pride",
        date: "National Days",
      },
      {
        id: "celeb-3",
        title: "Thirukkural Recitation & Tamil Elocution",
        category: "Celebrations",
        description: "Fostering pride in Tamil literature through Thirukkural couplet memorization competitions and expressive storytelling.",
        imageSrc: "/images/gallery/celeb-thirukkural.jpg",
        tag: "Tamil Literature",
        date: "Cultural Week",
      },
      {
        id: "celeb-4",
        title: "Annual Day Functions & Folk Expressions",
        category: "Celebrations",
        description: "Vibrant traditional folk music, dance performances, prize distributions for academic excellence, and joyful memories.",
        imageSrc: "/images/gallery/celeb-annualday.jpg",
        tag: "Annual Day",
        date: "Annual Celebrations",
      },
    ],
  },
  {
    id: "sports-athletics",
    categoryName: "Sports",
    iconName: "Trophy",
    titlePrefix: "Sports, Athletics & ",
    titleHighlight: "Physical Fitness",
    highlightColor: "text-emerald-600",
    badgeColor: "bg-emerald-50 border-emerald-200 text-emerald-700",
    tamilTitle: "உடற்கல்வி & விளையாட்டு",
    description:
      "Physical health and teamwork on our open campus grounds — from 100m sprint races to daily physical education drills that nurture stamina, agility, and sportsmanship.",
    photos: [
      {
        id: "sport-1",
        title: "100m Track Sprint & Competitive Running",
        category: "Sports",
        description: "Energetic track sprint events on our open playground with house flags, physical fitness drills, and encouraging cheers from classmates.",
        imageSrc: "/images/gallery/sport-sprint.jpg",
        tag: "Track & Sprint",
        date: "Annual Sports Season",
      },
      {
        id: "sport-2",
        title: "Daily Morning PT & Calisthenics",
        category: "Sports",
        description: "Synchronized stretching, posture exercises, and calisthenics every morning to ensure energetic readiness for classroom focus.",
        imageSrc: "/images/gallery/sport-pt.jpg",
        tag: "Morning Fitness",
        date: "Daily 9:00 AM",
      },
      {
        id: "sport-3",
        title: "Team Relay Races & Baton Coordination",
        category: "Sports",
        description: "Instilling house pride, speed coordination, and cooperative team spirit through friendly 4x100m relay competitions.",
        imageSrc: "/images/gallery/sport-relay.jpg",
        tag: "Relay & Teamwork",
        date: "Sports Meet",
      },
      {
        id: "sport-4",
        title: "Outdoor Traditional Games & Reflex Drills",
        category: "Sports",
        description: "Traditional games including Kho-Kho and agility drills that develop quick reflexes, spatial awareness, and endurance.",
        imageSrc: "/images/gallery/sport-traditional.jpg",
        tag: "Traditional Athletics",
        date: "PT Period",
      },
    ],
  },
  {
    id: "campus-library-facilities",
    categoryName: "Campus & Library",
    iconName: "Building2",
    titlePrefix: "Campus Facilities & ",
    titleHighlight: "Reading Corners",
    highlightColor: "text-blue-600",
    badgeColor: "bg-blue-50 border-blue-200 text-blue-700",
    tamilTitle: "பள்ளி வளாகம் & நூலகம்",
    description:
      "A peaceful, safe, and structured environment featuring a curated bilingual reading library, spacious classrooms, and clean drinking water facilities in Orathi.",
    photos: [
      {
        id: "campus-1",
        title: "Curated Reading Room & School Library",
        category: "Campus & Library",
        description: "Children seated comfortably exploring bilingual illustrated storybooks, reference charts, and building daily reading discipline.",
        imageSrc: "/images/gallery/campus-library.jpg",
        tag: "School Library",
        date: "Library Period",
      },
      {
        id: "campus-2",
        title: "13 Well-Ventilated Functional Classrooms",
        category: "Campus & Library",
        description: "Clean, natural light-filled classrooms equipped with blackboard teaching aids, charts, and comfortable wooden desk seating.",
        imageSrc: "/images/gallery/campus-classrooms.jpg",
        tag: "Classroom Spaces",
        date: "Campus Facilities",
      },
      {
        id: "campus-3",
        title: "Subject Charts & Visual Discovery Walls",
        category: "Campus & Library",
        description: "Interactive visual charts for Tamil alphabets, English vocabulary, world geography, and science life cycles displayed for constant passive learning.",
        imageSrc: "/images/gallery/campus-charts.jpg",
        tag: "Visual Aids",
        date: "Study Room",
      },
      {
        id: "campus-4",
        title: "Safe, Peaceful Rural Tamil Nadu Campus",
        category: "Campus & Library",
        description: "A secure, green school ground in Veppankaranai village, Orathi, ensuring a serene, pollution-free atmosphere for young learners.",
        imageSrc: "/images/gallery/campus-green.jpg",
        tag: "Orathi Campus",
        date: "Campus Grounds",
      },
    ],
  },
  {
    id: "kindergarten-discovery",
    categoryName: "Kindergarten",
    iconName: "GraduationCap",
    titlePrefix: "Kindergarten & Early ",
    titleHighlight: "Play-Way Discovery",
    highlightColor: "text-purple-600",
    badgeColor: "bg-purple-50 border-purple-200 text-purple-700",
    tamilTitle: "பாலர் கல்வி & விளையாட்டு உலகம்",
    description:
      "A joyful, gentle introduction to schooling for Pre-KG, LKG, and UKG learners — blending sensory play, circle rhymes, and cognitive games to inspire early love for learning.",
    photos: [
      {
        id: "kg-1",
        title: "Tactile Alphabet & Shape Sorting Blocks",
        category: "Kindergarten",
        description: "Pre-Primary learners developing fine motor dexterity, shape recognition, and letter building in a joyful, caring circle.",
        imageSrc: "/images/gallery/kg-blocks.jpg",
        tag: "Play-Way Circle",
        date: "Daily KG Hour",
      },
      {
        id: "kg-2",
        title: "Bilingual Action Rhymes & Storytime",
        category: "Kindergarten",
        description: "Tamil and English nursery action rhymes, story listening, and expressive gestures building early conversational confidence.",
        imageSrc: "/images/gallery/kg-rhymes.jpg",
        tag: "Rhyme & Story",
        date: "Circle Time",
      },
      {
        id: "kg-3",
        title: "Early Crayon Drawing & Creative Expression",
        category: "Kindergarten",
        description: "Freehand coloring, finger painting, and paper crafts encouraging creative curiosity and hand-eye coordination.",
        imageSrc: "/images/gallery/kg-drawing.jpg",
        tag: "Creative Arts",
        date: "Activity Period",
      },
      {
        id: "kg-4",
        title: "Social Sharing & Caring Circle Manners",
        category: "Kindergarten",
        description: "Learning to share toys, take turns politely, wash hands before snack time, and feel safe and cherished every day.",
        imageSrc: "/images/gallery/kg-social.jpg",
        tag: "Social Habits",
        date: "Snack & Play",
      },
    ],
  },
];

export const storyCategories = [
  "All",
  "Academics",
  "Teacher Bonding",
  "Celebrations",
  "Sports",
  "Campus & Library",
  "Kindergarten",
] as const;

export const galleryItems = lifeSubSections.flatMap((s) => s.photos);
export const galleryCategories = storyCategories;
