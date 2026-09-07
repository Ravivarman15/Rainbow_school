export interface AcademicStage {
  id: string;
  stageName: string;
  grades: string;
  ageGroup: string;
  focus: string;
  description: string;
  curriculumHighlights: string[];
  subjects: string[];
  keyOutcomes: string[];
}

export const academicStages: AcademicStage[] = [
  {
    id: "pre-primary",
    stageName: "Early Childhood (Pre-Primary)",
    grades: "Nursery, LKG & UKG",
    ageGroup: "3 – 5.5 Years",
    focus: "Joyful play-based inquiry, phonics, fine motor development, and social bonding.",
    description:
      "Our early childhood wing provides a nurturing, cheerful environment where young learners develop curiosity, communication skills, phonemic awareness, and foundational number sense through activity-based learning (ABL).",
    curriculumHighlights: [
      "Montessori-inspired sensory learning & tactile stations",
      "Bilingual phonics foundation (English & Tamil rhymes/stories)",
      "Early numeracy through counting blocks & shapes",
      "Creative arts, coloring, rhythm & group coordination",
      "Personal hygiene, sharing, and emotional growth"
    ],
    subjects: ["English Phonics & Rhymes", "Tamil Basics & Oral Songs", "Foundational Mathematics", "General Awareness & Nature Study", "Drawing & Motor Play"],
    keyOutcomes: ["Clear verbal expression", "Confident pencil grip & pre-writing", "Basic counting & pattern recognition", "Healthy social interactions"]
  },
  {
    id: "primary",
    stageName: "Primary School",
    grades: "Class 1 to Class 5",
    ageGroup: "6 – 10 Years",
    focus: "Concept mastery, bilingual literacy, logical reasoning, and environmental curiosity.",
    description:
      "Structured under the Tamil Nadu Matriculation curriculum, our primary education program bridges foundational knowledge with analytical skills, encouraging children to question, observe, read independently, and express themselves clearly.",
    curriculumHighlights: [
      "Rigorous English reading, grammar, comprehension & vocabulary building",
      "Tamil language proficiency (reading, writing, and cultural appreciation)",
      "Conceptual Mathematics (addition, subtraction, multiplication, fractions, geometry)",
      "Environmental Studies (EVS) & basic life sciences",
      "Value education, moral stories, and general knowledge",
      "Physical training and playground sports"
    ],
    subjects: ["English Language & Literature", "Tamil Language & Literature", "Mathematics", "Environmental Studies (Science & Social)", "Moral Science & GK", "Physical Education"],
    keyOutcomes: ["Independent reading and creative writing", "Mental math and problem-solving agility", "Scientific observation of nature & surroundings", "Civic responsibility and peer respect"]
  },
  {
    id: "middle-transition",
    stageName: "Upper Primary / Middle School",
    grades: "Class 6",
    ageGroup: "11 – 12 Years",
    focus: "Subject specialization, analytical problem-solving, and disciplined study habits.",
    description:
      "Grade 6 serves as an essential transition into advanced middle school academics. Students encounter dedicated branches of Science and Social Science while solidifying higher-level linguistic and computational competence.",
    curriculumHighlights: [
      "Integrated Science with practical demonstrations (Physics, Chemistry, Biology fundamentals)",
      "Social Science (History, Geography, Civics)",
      "Advanced algebraic and geometric concepts",
      "Bilingual essay writing, debating, and presentation skills",
      "Structured examinations and continuous comprehensive assessment"
    ],
    subjects: ["Advanced English", "Tamil Second Language", "Mathematics (Arithmetic, Algebra, Geometry)", "General Science", "Social Science", "Computer Fundamentals", "Physical Education"],
    keyOutcomes: ["Critical reasoning across discrete disciplines", "Methodical test preparation and academic self-discipline", "Clear argumentative oral and written presentation"]
  }
];

export const academicValues = [
  {
    title: "Bilingual Fluency",
    description: "Empowering children with confident spoken and written English alongside deep pride in their native Tamil language.",
    icon: "Languages"
  },
  {
    title: "Holistic Character",
    description: "Embedding honesty, empathy, punctuality, and mutual respect as core daily practices in every classroom.",
    icon: "HeartHandshake"
  },
  {
    title: "Curiosity-Driven Learning",
    description: "Moving beyond rote memorization to foster active question-asking, practical reasoning, and real-world comprehension.",
    icon: "Sparkles"
  },
  {
    title: "Individual Attention",
    description: "Maintaining optimal student-to-teacher focus with 14 dedicated full-time educators who know each child personally.",
    icon: "Users"
  }
];
