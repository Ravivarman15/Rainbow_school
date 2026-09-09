export interface NavItem {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export const mainNavigation: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", description: "Our heritage, vision, values & leadership" },
  { label: "Academics", href: "/academics", description: "Pre-Primary to Grade 8 curriculum & methodology" },
  { label: "Campus & Facilities", href: "/campus", description: "Verified physical facilities, library & recreation" },
  { label: "Student Life", href: "/student-life", description: "Sports, cultural events, clubs & activities" },
  { label: "Admissions", href: "/admissions", description: "Enrolment procedure, requirements & online enquiry" },
  { label: "Parents", href: "/parents", description: "Timings, circulars, calendar & FAQs" },
  { label: "Events & News", href: "/events", description: "School announcements & celebration calendar" },
  { label: "Gallery", href: "/gallery", description: "Visual showcases & campus moments" },
  { label: "Contact", href: "/contact", description: "Office address, phone, location & enquiry" },
];

export const footerQuickLinks = [
  { label: "About Rainbow School", href: "/about" },
  { label: "Academic Curriculum", href: "/academics" },
  { label: "Verified Facilities", href: "/campus" },
  { label: "Admission Enquiry", href: "/admissions" },
  { label: "Parent Notice Board", href: "/parents" },
  { label: "Events & Highlights", href: "/events" },
  { label: "School Photo Gallery", href: "/gallery" },
  { label: "Contact School Office", href: "/contact" },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Website Use", href: "/terms" },
  { label: "Mandatory Public Disclosure", href: "/disclosure" },
];
