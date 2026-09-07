export interface SchoolData {
  name: string;
  tamilName: string;
  tagline: string;
  description: string;
  udiseCode: string;
  establishedYear: number;
  management: string;
  schoolType: string;
  medium: string;
  grades: string;
  gradeLevels: {
    name: string;
    span: string;
    description: string;
    verified: boolean;
  }[];
  address: {
    village: string;
    landmark: string;
    block: string;
    taluk: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
    googleMapsSearchUrl: string;
  };
  contact: {
    directoryPhone: string;
    phoneVerificationStatus: "DIRECTORY_VERIFIED" | "PENDING_CONFIRMATION";
    email: string;
    emailStatus: "ADMIN_UPDATE_PENDING";
    workingHours: {
      days: string;
      schoolTimings: string;
      officeTimings: string;
    };
  };
  keyMetrics: {
    metric: string;
    value: string;
    verified: boolean;
    source: string;
  }[];
  verifiedFacilities: {
    id: string;
    title: string;
    category: "Campus" | "Academics" | "Sanitation & Care" | "Play & Recreation";
    description: string;
    iconName: string;
    verifiedStatus: "OFFICIALLY_VERIFIED" | "CAMPUS_RECORD";
  }[];
  unverifiedPlaceholders: {
    field: string;
    message: string;
  }[];
}

export const schoolData: SchoolData = {
  name: "Rainbow Matriculation School",
  tamilName: "ரெயின்போ மெட்ரிகுலேஷன் பள்ளி, ஒரத்தி",
  tagline: "Inspiring Curiosity, Nurturing Character, Fostering Excellence",
  description:
    "Established in 2009 in Orathi (Acharapakkam Block, Tamil Nadu), Rainbow Matriculation School provides high-quality English medium foundational education from Pre-Primary through Grade 6, fostering strong values, holistic growth, and academic discipline.",
  udiseCode: "33031003604",
  establishedYear: 2009,
  management: "Private Unaided (Tamil Nadu Matriculation System)",
  schoolType: "Co-educational Day School",
  medium: "English (with Tamil language instruction)",
  grades: "Pre-Primary (Nursery, LKG, UKG) to Grade 6",
  gradeLevels: [
    {
      name: "Early Childhood / Pre-Primary",
      span: "Nursery, LKG & UKG",
      description: "Play-way discovery, phonics foundation, early numeracy, sensory exploration, and motor skills development.",
      verified: true,
    },
    {
      name: "Primary Wing",
      span: "Grades 1 to 5",
      description: "Comprehensive English & Tamil literacy, mathematics, environmental science, creative arts, and foundational digital awareness.",
      verified: true,
    },
    {
      name: "Middle School Transition",
      span: "Grade 6",
      description: "Core subject mastery in Science, Mathematics, Social Studies, English, and Tamil with structured analytical thinking.",
      verified: true,
    }
  ],
  address: {
    village: "Veppankaranai, Orathi (Orathy)",
    landmark: "Tindivanam - Orathi Road / Acharapakkam Block",
    block: "Acharapakkam",
    taluk: "Madurantakam",
    district: "Chengalpattu (formerly Kancheepuram)",
    state: "Tamil Nadu",
    pincode: "603307",
    country: "India",
    fullFormatted: "Rainbow Matriculation School, Veppankaranai, Orathi, Acharapakkam Block, Madurantakam Taluk, Chengalpattu District, Tamil Nadu 603307",
  },
  coordinates: {
    latitude: 12.38068,
    longitude: 79.69283,
    googleMapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Rainbow+Matriculation+School+Orathi+603307",
  },
  contact: {
    directoryPhone: "+91 98420 43815",
    phoneVerificationStatus: "DIRECTORY_VERIFIED",
    email: "admissions@rainboworathi.edu.in",
    emailStatus: "ADMIN_UPDATE_PENDING",
    workingHours: {
      days: "Monday – Saturday",
      schoolTimings: "8:45 AM – 3:45 PM",
      officeTimings: "8:30 AM – 4:30 PM",
    },
  },
  keyMetrics: [
    {
      metric: "Established",
      value: "2009",
      verified: true,
      source: "UDISE National Registry",
    },
    {
      metric: "UDISE Code",
      value: "33031003604",
      verified: true,
      source: "Ministry of Education",
    },
    {
      metric: "Classrooms",
      value: "13 Functional Units",
      verified: true,
      source: "UDISE Infrastructure Baseline",
    },
    {
      metric: "Faculty Team",
      value: "14 Qualified Educators",
      verified: true,
      source: "UDISE Staff Record",
    },
    {
      metric: "Medium",
      value: "English",
      verified: true,
      source: "TN Matriculation Board",
    },
    {
      metric: "Campus Type",
      value: "Co-educational",
      verified: true,
      source: "Official Record",
    },
  ],
  verifiedFacilities: [
    {
      id: "classrooms",
      title: "13 Well-Ventilated Classrooms",
      category: "Campus",
      description: "Dedicated, naturally lit instructional rooms maintained in excellent condition for focused student learning.",
      iconName: "Building2",
      verifiedStatus: "OFFICIALLY_VERIFIED",
    },
    {
      id: "library",
      title: "School Reading Room & Library",
      category: "Academics",
      description: "Curated collection of age-appropriate storybooks, early reference volumes, and bilingual reading materials.",
      iconName: "BookOpen",
      verifiedStatus: "OFFICIALLY_VERIFIED",
    },
    {
      id: "playground",
      title: "Open Sports & Recreation Ground",
      category: "Play & Recreation",
      description: "Dedicated outdoor play area for morning assemblies, physical training, athletics, and supervised recreation.",
      iconName: "Trees",
      verifiedStatus: "OFFICIALLY_VERIFIED",
    },
    {
      id: "water-sanitation",
      title: "Functional Tap Water & Sanitation",
      category: "Sanitation & Care",
      description: "Clean functional piped drinking water source with separate dedicated hygienic sanitation facilities for boys and girls.",
      iconName: "Droplets",
      verifiedStatus: "OFFICIALLY_VERIFIED",
    },
    {
      id: "all-weather-access",
      title: "All-Weather Pucca Road Access",
      category: "Campus",
      description: "Direct road connectivity enabling safe daily transit for students and staff from Orathi and neighbouring villages.",
      iconName: "Compass",
      verifiedStatus: "OFFICIALLY_VERIFIED",
    },
    {
      id: "power-infrastructure",
      title: "Electrified Campus Facility",
      category: "Campus",
      description: "Full electrical connection powering fans, lighting, and administrative facilities across all rooms.",
      iconName: "Zap",
      verifiedStatus: "OFFICIALLY_VERIFIED",
    }
  ],
  unverifiedPlaceholders: [
    {
      field: "Principal & Correspondent Names",
      message: "Leadership details will be updated upon administrative verification.",
    },
    {
      field: "Fee Schedule",
      message: "Please contact the school administrative office for the current verified fee structure.",
    },
    {
      field: "Exam Rank Claims",
      message: "We adhere to ethical reporting and do not publish unverified student pass percent statistics.",
    }
  ]
};
