"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  BookOpen,
  Building2,
  Sparkles,
  Users,
  Camera,
  Calendar,
  Phone,
  Compass,
  ShieldCheck,
  ChevronRight,
  Info,
  X,
} from "lucide-react";
import { schoolData } from "@/data/school";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/", icon: Home },
    { label: "About Us", href: "/about", icon: Info },
    { label: "Academics", href: "/academics", icon: BookOpen },
    { label: "Campus & Facilities", href: "/campus", icon: Building2 },
    { label: "Student Life & Culture", href: "/student-life", icon: Sparkles },
    { label: "Admissions 2026–27", href: "/admissions", icon: Users },
    { label: "Life at Rainbow", href: "/gallery", icon: Camera },
    { label: "Events & Calendar", href: "/events", icon: Calendar },
    { label: "Parents Desk", href: "/parents", icon: ShieldCheck },
    { label: "Contact & Location", href: "/contact", icon: Phone },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5"
            : "bg-white border-b border-slate-100 py-3.5"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Clean Brand Mark */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-full overflow-hidden bg-white shadow-sm transition-transform duration-300 group-hover:scale-105 border border-slate-200">
              <Image
                src="/images/logo.png"
                alt="Rainbow Matriculation School Logo"
                width={44}
                height={44}
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 font-heading group-hover:text-indigo-600 transition-colors">
                  RAINBOW
                </span>
                <span className="rounded-md bg-indigo-50 px-1.5 py-0.5 text-[10px] font-bold text-indigo-700 uppercase tracking-wider">
                  ORATHI
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-500 uppercase">
                Matriculation School • Est. 2009
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 text-xs xl:text-sm font-medium">
            <Link
              href="/"
              className={cn(
                "px-3 py-2 rounded-xl transition-colors whitespace-nowrap",
                pathname === "/"
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "px-3 py-2 rounded-xl transition-colors whitespace-nowrap",
                pathname === "/about"
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              About
            </Link>
            <Link
              href="/academics"
              className={cn(
                "px-3 py-2 rounded-xl transition-colors whitespace-nowrap",
                pathname === "/academics"
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              Academics
            </Link>
            <Link
              href="/campus"
              className={cn(
                "px-3 py-2 rounded-xl transition-colors whitespace-nowrap",
                pathname === "/campus"
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              Campus
            </Link>
            <Link
              href="/student-life"
              className={cn(
                "px-3 py-2 rounded-xl transition-colors whitespace-nowrap",
                pathname === "/student-life"
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              Student Life
            </Link>
            <Link
              href="/admissions"
              className={cn(
                "px-3 py-2 rounded-xl transition-colors whitespace-nowrap",
                pathname === "/admissions"
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              Admissions
            </Link>
            <Link
              href="/gallery"
              className={cn(
                "px-3 py-2 rounded-xl transition-colors whitespace-nowrap",
                pathname === "/gallery"
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              Life at Rainbow
            </Link>
            <Link
              href="/contact"
              className={cn(
                "px-3 py-2 rounded-xl transition-colors whitespace-nowrap",
                pathname === "/contact"
                  ? "bg-indigo-50 text-indigo-700 font-semibold"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Action Button & Animated Mobile Toggle */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <Link href="/admissions" className="hidden sm:inline-flex">
              <Button
                variant="primary"
                size="sm"
                className="gap-1.5 shadow-sm bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2"
              >
                <span>Admission Enquiry</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </Link>

            {/* Interactive Animated Hamburger Toggle Button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.92 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/90 bg-slate-50 text-slate-800 hover:bg-slate-100 active:bg-slate-200 transition-colors lg:hidden shadow-xs cursor-pointer z-50 overflow-hidden"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <div className="flex flex-col items-center justify-center gap-1 w-5 h-5">
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="h-0.5 w-5 rounded-full bg-slate-800 block origin-center"
                />
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="h-0.5 w-5 rounded-full bg-slate-800 block"
                />
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="h-0.5 w-5 rounded-full bg-slate-800 block origin-center"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </header>

      {/* Full-Screen Premium Mobile Drawer with Smooth Framer Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col lg:hidden">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-In Menu Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="relative z-10 flex h-full w-full max-w-sm ml-auto flex-col bg-white shadow-2xl border-l border-slate-200 overflow-hidden"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4 bg-slate-50/95">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full overflow-hidden bg-white shadow-xs border border-slate-200">
                    <Image
                      src="/images/logo.png"
                      alt="Rainbow Matriculation School Logo"
                      width={36}
                      height={36}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-base font-bold text-slate-900 font-heading">RAINBOW</span>
                      <span className="rounded bg-indigo-100 px-1 py-0.2 text-[9px] font-bold text-indigo-700 uppercase">ORATHI</span>
                    </div>
                    <span className="text-[10px] text-slate-500">Navigation Menu</span>
                  </div>
                </div>

                {/* Explicit Large Close Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 text-slate-700 hover:bg-slate-300 hover:text-slate-950 transition-colors cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4 stroke-[2.5]" />
                </motion.button>
              </div>

              {/* School Info Header Card */}
              <div className="p-4 pb-1">
                <div className="rounded-2xl bg-indigo-50/70 p-3.5 border border-indigo-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-indigo-900 font-semibold">
                    <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>UDISE: {schoolData.udiseCode}</span>
                  </div>
                  <span className="text-slate-500 font-medium">Pre-KG to Class 6</span>
                </div>
              </div>

              {/* Scrollable Nav Links with Staggered Entrance */}
              <motion.div
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: 0.03, delayChildren: 0.05 } },
                  closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
                }}
                className="flex-1 overflow-y-auto px-4 py-2 space-y-1 no-scrollbar"
              >
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                  Menu Links
                </div>

                {navLinks.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.href}
                      variants={{
                        open: { opacity: 1, x: 0 },
                        closed: { opacity: 0, x: 20 },
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all",
                          isActive
                            ? "bg-indigo-600 text-white font-semibold shadow-sm"
                            : "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className={cn("h-4 w-4 shrink-0", isActive ? "text-white" : "text-slate-500")} />
                          <span>{item.label}</span>
                        </div>
                        <ChevronRight className={cn("h-4 w-4 shrink-0", isActive ? "text-white/80" : "text-slate-400")} />
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Mobile Bottom Parent Actions Hub */}
              <div className="border-t border-slate-200 bg-slate-50/95 p-4 space-y-2.5">
                <Link
                  href="/admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-bold text-white shadow-sm hover:bg-indigo-700 active:scale-98 transition-all"
                >
                  <span>Admission Enquiry 2026–27</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={`tel:${schoolData.contact.directoryPhone.replace(/\s+/g, "")}`}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 shadow-2xs"
                  >
                    <Phone className="h-3.5 w-3.5 text-indigo-600" />
                    <span>Call School</span>
                  </a>
                  <a
                    href={schoolData.coordinates.googleMapsSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 shadow-2xs"
                  >
                    <Compass className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
