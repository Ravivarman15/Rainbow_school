export interface FAQItem {
  question: string;
  answer: string;
  category: "Admissions" | "Academics" | "Campus Life" | "Timings & Transport";
}

export const schoolFAQs: FAQItem[] = [
  {
    question: "What classes/grades are offered at Rainbow Matriculation School, Orathi?",
    answer: "The school offers education from Pre-Primary (Nursery, LKG, UKG) through Grade 8 (Primary and Middle School).",
    category: "Academics"
  },
  {
    question: "What is the medium of instruction and school board affiliation?",
    answer: "The medium of instruction is English, following the Tamil Nadu Matriculation Board curriculum with strong emphasis on bilingual proficiency in English and Tamil.",
    category: "Academics"
  },
  {
    question: "How can parents apply for admission?",
    answer: "Parents can submit an Admission Enquiry form online through this website or visit the school administrative office in Veppankaranai, Orathi directly between 8:30 AM and 4:30 PM (Monday to Saturday).",
    category: "Admissions"
  },
  {
    question: "What documents are required for admission?",
    answer: "Standard required documents include: (1) Student's Original / Copy of Birth Certificate, (2) Aadhaar Card copy of student and parents, (3) Recent passport-size photographs of the student, (4) Transfer Certificate (TC) for students entering Class 1 and above, and (5) Community Certificate if applicable.",
    category: "Admissions"
  },
  {
    question: "What are the regular school timings?",
    answer: "Standard school hours are Monday through Saturday from 8:45 AM to 3:45 PM. Pre-Primary sections have slightly relaxed early-dismissal hours for younger learners.",
    category: "Timings & Transport"
  },
  {
    question: "What facilities are available on campus?",
    answer: "The campus features 13 well-ventilated instructional classrooms, an outdoor sports playground, a curated reading room/library, separate boys' and girls' hygienic sanitation blocks, continuous tap water drinking facilities, and all-weather road connectivity.",
    category: "Campus Life"
  },
  {
    question: "What is the official UDISE Code of the school?",
    answer: "The unique national UDISE Code for Rainbow Matriculation School (Orathi, Acharapakkam Block, Chengalpattu / Kancheepuram District) is 33031003604.",
    category: "Admissions"
  },
  {
    question: "How can I obtain the official fee structure?",
    answer: "In compliance with institutional policy and state educational regulations, official fee schedules are provided directly at the school office. Please submit an online enquiry or visit the admissions office for detailed fee information.",
    category: "Admissions"
  }
];
