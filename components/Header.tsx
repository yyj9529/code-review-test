'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-red-900/30">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors">
            Physical Asia
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                홈
              </Link>
            </li>
            <li>
              <Link href="/teams" className="text-gray-300 hover:text-white transition-colors">
                참가국
              </Link>
            </li>
            <li>
              <Link href="/episodes" className="text-gray-300 hover:text-white transition-colors">
                에피소드
              </Link>
            </li>
            <li>
              <a
                href="https://www.netflix.com/title/82006516"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors"
              >
                넷플릭스에서 시청
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="메뉴"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-red-900/30 pt-4">
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  홈
                </Link>
              </li>
              <li>
                <Link
                  href="/teams"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  참가국
                </Link>
              </li>
              <li>
                <Link
                  href="/episodes"
                  className="block text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  에피소드
                </Link>
              </li>
              <li>
                <a
                  href="https://www.netflix.com/title/82006516"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors text-center"
                >
                  넷플릭스에서 시청
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
