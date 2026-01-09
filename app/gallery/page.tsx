'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    title: '한국 대표팀 김동현',
    category: 'team',
    country: '한국',
    description: 'UFC 파이터 김동현이 한국 대표팀을 이끌고 있습니다.',
    color: 'from-blue-600/20'
  },
  {
    id: 2,
    title: '매니 파퀴아오',
    category: 'star',
    country: '필리핀',
    description: '전설적인 복싱 챔피언 매니 파퀴아오의 Physical: Asia 도전',
    color: 'from-yellow-600/20'
  },
  {
    id: 3,
    title: '극한의 체력 미션',
    category: 'challenge',
    country: '공통',
    description: '참가자들이 극한의 체력 미션에 도전하는 모습',
    color: 'from-red-600/20'
  },
  {
    id: 4,
    title: '호주 대표팀',
    category: 'team',
    country: '호주',
    description: 'Robert Whittaker가 이끄는 호주 대표팀',
    color: 'from-green-600/20'
  },
  {
    id: 5,
    title: '태국 대표팀',
    category: 'team',
    country: '태국',
    description: 'Ploy Nuannaree가 주장을 맡은 태국 대표팀',
    color: 'from-purple-600/20'
  },
  {
    id: 6,
    title: '국가 대항전 현장',
    category: 'challenge',
    country: '공통',
    description: '8개국이 모여 펼치는 치열한 국가 대항전',
    color: 'from-orange-600/20'
  },
  {
    id: 7,
    title: '몽골 대표팀',
    category: 'team',
    country: '몽골',
    description: '챔피언 레슬러 Orkhonbayar가 이끄는 몽골 대표팀',
    color: 'from-indigo-600/20'
  },
  {
    id: 8,
    title: '비하인드 신',
    category: 'behind',
    country: '공통',
    description: 'Physical: Asia 촬영 현장의 비하인드 스토리',
    color: 'from-pink-600/20'
  },
  {
    id: 9,
    title: '일본 대표팀',
    category: 'team',
    country: '일본',
    description: '일본을 대표하는 엘리트 선수들',
    color: 'from-red-600/20'
  },
  {
    id: 10,
    title: '우승 트로피',
    category: 'challenge',
    country: '공통',
    description: '10억원의 상금을 걸고 펼쳐지는 치열한 경쟁',
    color: 'from-yellow-600/20'
  },
  {
    id: 11,
    title: '터키 대표팀',
    category: 'team',
    country: '터키',
    description: '강력한 체력을 자랑하는 터키 대표팀',
    color: 'from-cyan-600/20'
  },
  {
    id: 12,
    title: '인도네시아 대표팀',
    category: 'team',
    country: '인도네시아',
    description: '열정으로 뭉친 인도네시아 대표팀',
    color: 'from-emerald-600/20'
  }
];

const categories = [
  { id: 'all', label: '전체' },
  { id: 'team', label: '팀' },
  { id: 'star', label: '스타' },
  { id: 'challenge', label: '미션' },
  { id: 'behind', label: '비하인드' }
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const selectedImageData = selectedImage !== null
    ? galleryImages.find(img => img.id === selectedImage)
    : null;

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-b from-black via-red-950/20 to-black">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent"
            >
              갤러리
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 text-center max-w-3xl mx-auto"
            >
              Physical: Asia의 생생한 순간들
            </motion.p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-black border-b border-red-900/30">
          <div className="container mx-auto px-4">
            <div className="flex justify-center gap-3 flex-wrap">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-red-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03, y: -5 }}
                    onClick={() => setSelectedImage(image.id)}
                    className="cursor-pointer group"
                  >
                    <div className={`relative bg-gradient-to-br ${image.color} to-black border border-red-900/30 rounded-xl overflow-hidden hover:border-red-500/50 transition-all aspect-[4/3]`}>
                      {/* Placeholder for image */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-950/40 to-black">
                        <span className="text-8xl opacity-50">📸</span>
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                        <p className="text-gray-300 text-sm">{image.country}</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h3 className="text-lg font-bold text-white">{image.title}</h3>
                      <p className="text-sm text-gray-400">{image.country}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImageData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute -top-12 right-0 text-white hover:text-red-500 transition-colors"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Image Container */}
                <div className={`bg-gradient-to-br ${selectedImageData.color} to-black border border-red-900/30 rounded-xl overflow-hidden`}>
                  <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-red-950/40 to-black">
                    <span className="text-[200px] opacity-50">📸</span>
                  </div>
                  <div className="p-6 bg-black/80">
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedImageData.title}</h2>
                    <p className="text-red-400 mb-4">{selectedImageData.country}</p>
                    <p className="text-gray-300">{selectedImageData.description}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}
