'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="bg-black/80 backdrop-blur-md fixed w-full top-0 z-50 border-b border-red-900/30"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-2xl font-bold text-red-600 hover:text-red-500 transition-colors">
              Physical Asia
            </Link>
          </motion.div>

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
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-red-900/30 pt-4 overflow-hidden"
            >
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                className="flex flex-col gap-4"
              >
                {[
                  { href: '/', label: '홈' },
                  { href: '/teams', label: '참가국' },
                  { href: '/episodes', label: '에피소드' }
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      open: {
                        opacity: 1,
                        x: 0,
                        transition: { type: 'spring', stiffness: 300, damping: 24 }
                      },
                      closed: {
                        opacity: 0,
                        x: -20,
                        transition: { duration: 0.2 }
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  variants={{
                    open: {
                      opacity: 1,
                      x: 0,
                      transition: { type: 'spring', stiffness: 300, damping: 24 }
                    },
                    closed: {
                      opacity: 0,
                      x: -20,
                      transition: { duration: 0.2 }
                    }
                  }}
                >
                  <a
                    href="https://www.netflix.com/title/82006516"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition-colors text-center"
                  >
                    넷플릭스에서 시청
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
