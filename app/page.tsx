'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SocialShare from '@/components/SocialShare';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-red-950/20 to-black overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwwLDAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent animate-glow"
            >
              Physical Asia
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              아시아 8개국 최강 엘리트들의 국가 대항전
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <a
                href="https://www.netflix.com/title/82006516"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/50"
              >
                넷플릭스에서 시청하기
              </a>
              <Link
                href="/teams"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all border border-white/30 hover:border-white/50 hover:shadow-lg"
              >
                참가국 보기
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-8 flex justify-center"
            >
              <SocialShare />
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
                프로그램 소개
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-8 md:p-12 hover:border-red-500/50 transition-all duration-500">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    <span className="text-red-500 font-bold">Physical: Asia</span>는 Physical: 100 시리즈의 세 번째 시즌으로,
                    최초의 국가 대항전 포맷으로 진행된 리얼리티 체력 경쟁 프로그램입니다.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    아시아 8개국을 대표하는 최강 엘리트 선수들이 국가의 자존심을 걸고
                    극한의 체력 미션에 도전합니다. 필리핀 복싱 레전드 매니 파퀴아오를 비롯한 세계적인 스타들이 참가했습니다.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-red-500 mb-2">8개국</div>
                      <div className="text-gray-400">48명 참가자</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-red-500 mb-2">10억원</div>
                      <div className="text-gray-400">우승 상금</div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="text-center"
                    >
                      <div className="text-3xl font-bold text-red-500 mb-2">2025.10</div>
                      <div className="text-gray-400">넷플릭스 공개</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Featured Teams Preview */}
        <section className="py-20 bg-gradient-to-b from-black to-red-950/20">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
                참가국
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {[
                { name: '🇰🇷 한국', flag: '🇰🇷', captain: '김동현', players: 6 },
                { name: '🇯🇵 일본', flag: '🇯🇵', captain: 'TBA', players: 6 },
                { name: '🇹🇭 태국', flag: '🇹🇭', captain: 'Ploy Nuannaree', players: 6 },
                { name: '🇲🇳 몽골', flag: '🇲🇳', captain: 'Orkhonbayar', players: 6 },
                { name: '🇹🇷 터키', flag: '🇹🇷', captain: 'TBA', players: 6 },
                { name: '🇮🇩 인도네시아', flag: '🇮🇩', captain: 'TBA', players: 6 },
                { name: '🇦🇺 호주', flag: '🇦🇺', captain: 'Robert Whittaker', players: 6 },
                { name: '🇵🇭 필리핀', flag: '🇵🇭', captain: 'Manny Pacquiao', players: 6 }
              ].map((team, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-red-950/40 to-black border border-red-900/30 rounded-xl p-6 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-600/20"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-32 bg-gradient-to-br from-red-900/30 to-black rounded-lg mb-4 flex items-center justify-center"
                  >
                    <span className="text-7xl">{team.flag}</span>
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-2 text-center">{team.name}</h3>
                  <p className="text-red-400 font-semibold mb-1 text-center text-sm">주장: {team.captain}</p>
                  <p className="text-gray-400 text-center text-sm">{team.players}명 참가</p>
                </motion.div>
              ))}
            </div>
            <AnimatedSection delay={0.4}>
              <div className="text-center mt-12">
                <Link
                  href="/teams"
                  className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-red-600/50"
                >
                  모든 팀 보기
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
                프로그램 하이라이트
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: '국가 대항전',
                  description: '8개국 최강 엘리트들의 자존심을 건 치열한 승부'
                },
                {
                  title: '매니 파퀴아오 참전',
                  description: '필리핀 복싱 레전드의 Physical 도전'
                },
                {
                  title: '10억원 상금',
                  description: 'Physical 시리즈 역대 최고 상금 규모'
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-6 hover:border-red-500/50 transition-all hover:shadow-lg hover:shadow-red-600/20"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{highlight.title}</h3>
                  <p className="text-gray-400">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
            <AnimatedSection delay={0.3}>
              <div className="text-center mt-12">
                <Link
                  href="/episodes"
                  className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all border border-white/30 hover:border-white/50 hover:shadow-lg"
                >
                  전체 에피소드 보기
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
