'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface SocialShareProps {
  title?: string;
  description?: string;
}

export default function SocialShare({
  title = 'Physical: Asia - 아시아 8개국 최강 엘리트들의 국가 대항전',
  description = '넷플릭스에서 만나는 Physical: Asia! 8개국 최강 엘리트들의 치열한 체력 경쟁을 확인하세요.'
}: SocialShareProps) {
  const [showToast, setShowToast] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    // Set URL only on client side to avoid hydration mismatch
    setCurrentUrl(window.location.href);
  }, []);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    kakao: () => {
      // KakaoTalk sharing would require SDK setup, so we'll just copy link for now
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-sm font-semibold">공유하기:</span>

        {/* Twitter */}
        <motion.a
          href={shareLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-500/50 transition-shadow"
          aria-label="Share on Twitter"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </motion.a>

        {/* Facebook */}
        <motion.a
          href={shareLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:shadow-lg hover:shadow-blue-600/50 transition-shadow"
          aria-label="Share on Facebook"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </motion.a>

        {/* KakaoTalk (Copy Link) */}
        <motion.button
          onClick={shareLinks.kakao}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-[#FEE500] flex items-center justify-center text-[#3C1E1E] hover:shadow-lg hover:shadow-yellow-500/50 transition-shadow"
          aria-label="Share on KakaoTalk"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 01-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 00-.656-.678l-1.928 1.866V7.19a.472.472 0 00-.944 0v5.656a.472.472 0 00.944 0v-1.583l.207-.2 1.765 2.117a.472.472 0 00.719-.008.472.472 0 00.009-.722l-1.586-1.39zm-2.724.449a.472.472 0 00.472-.472V7.19a.472.472 0 00-.472-.472h-2.126a.472.472 0 100 .944h1.654v1.28h-1.654a.472.472 0 100 .944h1.654v1.279h-1.654a.472.472 0 100 .944h2.126zm-4.477 0a.472.472 0 00.472-.472V7.19a.472.472 0 10-.944 0v5.373c0 .261.211.472.472.472zm-4.254 0a.472.472 0 00.472-.472v-3.97l1.088 3.769a.472.472 0 00.907 0l1.089-3.769v3.97a.472.472 0 10.944 0V7.19a.472.472 0 00-.472-.472h-.452a.472.472 0 00-.44.302L8.64 10.29 7.693 7.019a.472.472 0 00-.44-.302h-.452a.472.472 0 00-.472.472v5.373c0 .261.211.472.472.472z" />
          </svg>
        </motion.button>

        {/* Copy Link */}
        <motion.button
          onClick={handleCopyLink}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all"
          aria-label="Copy link"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </motion.button>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg"
        >
          링크가 복사되었습니다!
        </motion.div>
      )}
    </div>
  );
}
