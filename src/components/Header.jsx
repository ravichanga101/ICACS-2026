"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

// Navigation data structure for better maintainability
const navigationData = {
  aboutLinks: [
    { href: "#abtcharusat", text: "CHARUSAT" },
    { href: "#abtcspit", text: "CSPIT" },
    { href: "#abtdepstar", text: "DEPSTAR" },
  ],
  icacsLinks: [
    { href: "#about", text: "About Conference" },
    { href: "#impdates", text: "Important Dates" },
    { href: "#cfp", text: "Call For Papers" },
    { href: "#tracks", text: "Conference Tracks" },
    { href: "#submission-guidelines", text: "Paper Submission Guidelines" },
    { href: "#schedule", text: "Conference Schedule", target: "_blank" },
    { href: "#registration", text: "Registration" },
  ],
  committeeLinks: [
    { href: "#orgcmt", text: "Organizing Committee" },
    { href: "#advcmt", text: "Advisory Committee" },
    { href: "#techcmt", text: "Technical Program Committee" },
    { href: "#techreview", text: "Technical Review Committee" },
  ],
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileOpen &&
        !event.target.closest("#mobile-menu") &&
        !event.target.closest("#menu-toggle")
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileOpen]);

  // Dropdown menu component for desktop
  const DesktopDropdown = ({ title, links, className }) => (
    <div className={`relative group ${className || ""}`}>
      <button className="flex items-center text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md group-hover:bg-gray-50 transition">
        {title} <ChevronDown className="ml-1" size={16} />
      </button>
      <div className="absolute left-0 top-full bg-white shadow-lg rounded-md hidden group-hover:block min-w-[200px] z-50 border border-gray-100 pt-3 mt-[-1px]">
        <div className="py-1">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target={link.target || "_self"}
              className="block px-4 py-2 hover:bg-gray-50 text-gray-700 text-sm"
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  // Mobile menu section component
  const MobileMenuSection = ({ title, links }) => (
    <div className="border-b border-gray-100 pb-2">
      <div className="font-medium text-[#1869b4] py-2">{title}</div>
      <div className="pl-4 flex flex-col space-y-1 text-sm">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target={link.target || "_self"}
            className="py-2 text-gray-700 hover:text-[#fd7e14]"
            onClick={() => setMobileOpen(false)}
          >
            {link.text}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-1" : "bg-white/95 py-2"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center py-2">
          <Image
            src="/assets/img/ICACS-logo.png"
            alt="ICACS Logo"
            className="h-12 w-12 mr-3"
            width={120}
            height={120}
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-1">
          {/* About Dropdown */}
          <DesktopDropdown title="About" links={navigationData.aboutLinks} />

          {/* ICACS 2026 Dropdown */}
          <DesktopDropdown
            title="ICACS 2026"
            links={navigationData.icacsLinks}
          />

          {/* Standard links */}
          <Link
            href="#speakers"
            className="text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Keynote Speakers
          </Link>

          <Link
            href="#editors"
            className="text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Editors
          </Link>

          {/* Committee Dropdown */}
          <DesktopDropdown
            title="Committee"
            links={navigationData.committeeLinks}
          />

          <Link
            href="#contact"
            className="text-[#1869b4] hover:text-[#fd7e14] font-medium px-3 py-2 rounded-md hover:bg-gray-50 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          id="menu-toggle"
          className="lg:hidden p-2 rounded-md text-[#1869b4] hover:bg-gray-100"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-white shadow-lg border-t border-gray-100 max-h-[80vh] overflow-y-auto"
        >
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-1">
              {/* About Section */}
              <MobileMenuSection
                title="About"
                links={navigationData.aboutLinks}
              />

              {/* ICACS 2026 Section */}
              <MobileMenuSection
                title="ICACS 2026"
                links={navigationData.icacsLinks}
              />

              {/* Direct Links */}
              <Link
                href="#speakers"
                className="py-2 font-medium text-[#1869b4] hover:text-[#fd7e14] border-b border-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                Keynote Speakers
              </Link>
              <Link
                href="#editors"
                className="py-2 font-medium text-[#1869b4] hover:text-[#fd7e14] border-b border-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                Editors
              </Link>

              {/* Committee Section */}
              <MobileMenuSection
                title="Committee"
                links={navigationData.committeeLinks}
              />

              <Link
                href="#contact"
                className="py-2 font-medium text-[#1869b4] hover:text-[#fd7e14] border-b border-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
