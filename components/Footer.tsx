'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('올바른 이메일 주소를 입력해주세요.');
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    setEmail('');

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <footer className="bg-black border-t border-red-900/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-red-950/40 to-black border border-red-900/30 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-3">뉴스레터 구독</h3>
            <p className="text-gray-400 mb-6">
              Physical: Asia의 최신 소식과 업데이트를 받아보세요!
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-green-600/20 border border-green-500/50 rounded-lg p-4 text-green-400"
              >
                구독해 주셔서 감사합니다! 🎉
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소를 입력하세요"
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500 transition-colors"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                >
                  구독하기
                </motion.button>
              </form>
            )}

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm mt-2"
              >
                {error}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">Physical Asia</h3>
            <p className="text-gray-400 text-sm">
              넷플릭스 오리지널 리얼리티 프로그램의 팬 커뮤니티 페이지입니다.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">링크</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="https://www.netflix.com/title/82006516" className="hover:text-white transition-colors">넷플릭스</a></li>
              <li><a href="#" className="hover:text-white transition-colors">공식 사이트</a></li>
              <li><a href="#" className="hover:text-white transition-colors">팬 커뮤니티</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg mb-4">소셜 미디어</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Physical Asia 팬페이지. 이 사이트는 비공식 팬 페이지입니다.</p>
        </div>
      </div>
    </footer>
  );
}
