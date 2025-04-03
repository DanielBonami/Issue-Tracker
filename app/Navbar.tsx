'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaBug } from "react-icons/fa";
import classnames from 'classnames';

const Navbar = () => {
  const currentPath = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <nav className="relative z-20 bg-gradient-to-r from-gray-900 to-black shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Icon */}
        <Link href="/" className="flex items-center space-x-2">
          <FaBug className="text-3xl text-gray-200" />
          <span className="text-2xl font-extrabold text-gray-200">Issue Tracker</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classnames({
                  'text-gray-200': link.href === currentPath, // Active link color (light gray)
                  'text-gray-500': link.href !== currentPath, // Inactive link color (darker gray)
                  'hover:text-gray-200 hover:scale-105 transition-all duration-300': true,
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-200 focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <ul className="absolute top-16 left-0 right-0 bg-gradient-to-r from-gray-900 to-black flex flex-col items-center space-y-6 py-6 border-t border-gray-500">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={classnames({
                  'text-gray-200': link.href === currentPath, // Active link color (light gray)
                  'text-gray-500': link.href !== currentPath, // Inactive link color (darker gray)
                  'hover:text-gray-200 hover:scale-105 transition-all duration-300': true,
                })}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
