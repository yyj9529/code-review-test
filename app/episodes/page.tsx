'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const episodes = [
  { number: 1, title: '첫 대결', description: '8개국 48명의 엘리트 선수들이 한자리에 모입니다. 첫 번째 미션으로 각국의 실력을 겨루기 시작합니다.' },
  { number: 2, title: '팀워크 테스트', description: '개인의 능력을 넘어 팀워크가 시험받는 순간. 각국 대표들은 조화를 이뤄 미션을 수행해야 합니다.' },
  { number: 3, title: '극한의 체력전', description: '순수한 체력만으로 승부하는 미션이 펼쳐집니다. 누가 최후까지 버틸 수 있을까요?' },
  { number: 4, title: '전략의 싸움', description: '체력뿐만 아니라 두뇌 싸움이 시작됩니다. 전략적 선택이 승패를 가릅니다.' },
  { number: 5, title: '개인전 시작', description: '팀을 떠나 개인의 실력으로 경쟁하는 라운드가 시작됩니다.' },
  { number: 6, title: '리더의 부담', description: '각국 주장들에게 특별한 미션이 주어집니다. 리더의 무게가 어깨에 실립니다.' },
  { number: 7, title: '서바이벌', description: '탈락의 위기 속에서 선수들은 극한의 서바이벌을 경험합니다.' },
  { number: 8, title: '반전의 순간', description: '예상치 못한 반전이 찾아옵니다. 상황이 급변하는 가운데 선수들의 선택은?' },
  { number: 9, title: '준결승', description: '최종 결승을 앞두고 치열한 준결승이 펼쳐집니다.' },
  { number: 10, title: '파이널', description: '마지막 대결. 10억원의 상금과 국가의 명예를 건 최후의 승부가 시작됩니다.' }
];

export default function EpisodesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-b from-black via-red-950/20 to-black">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              에피소드 가이드
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Physical: Asia의 전 에피소드를 확인하세요
            </p>
          </div>
        </section>

        {/* Show Info */}
        <section className="py-12 bg-black border-b border-red-900/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-8">
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-500 mb-2">10개</div>
                  <div className="text-gray-400">에피소드</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500 mb-2">2025.10</div>
                  <div className="text-gray-400">공개</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500 mb-2">8개국</div>
                  <div className="text-gray-400">참가</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-500 mb-2">10억원</div>
                  <div className="text-gray-400">상금</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Episodes List */}
        <section className="py-20 bg-gradient-to-b from-black to-red-950/20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">
                전체 에피소드
              </h2>
              <div className="grid gap-6">
                {episodes.map((episode) => (
                  <div
                    key={episode.number}
                    className="bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-6 hover:border-red-500/50 transition-all group"
                  >
                    <div className="flex gap-6">
                      {/* Episode Number */}
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <span className="text-2xl font-bold text-white">
                            {episode.number}
                          </span>
                        </div>
                      </div>

                      {/* Episode Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                            {episode.title}
                          </h3>
                          <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                            EP{episode.number}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {episode.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Behind the Scenes */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              제작 정보
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-gradient-to-br from-red-950/40 to-black border border-red-900/30 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-red-500 mb-2">
                  Physical: 100
                </div>
                <div className="text-2xl font-bold text-white mb-4">
                  시즌 3
                </div>
                <div className="text-gray-400">
                  시리즈 세 번째 시즌
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-950/40 to-black border border-red-900/30 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-red-500 mb-2">
                  넷플릭스
                </div>
                <div className="text-2xl font-bold text-white mb-4">
                  오리지널
                </div>
                <div className="text-gray-400">
                  전세계 동시 공개
                </div>
              </div>
              <div className="bg-gradient-to-br from-red-950/40 to-black border border-red-900/30 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-red-500 mb-2">
                  69개국
                </div>
                <div className="text-2xl font-bold text-white mb-4">
                  TOP 10
                </div>
                <div className="text-gray-400">
                  첫날 진입
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Watch CTA */}
        <section className="py-20 bg-gradient-to-b from-black to-red-950/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              지금 바로 시청하세요
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Physical: Asia의 모든 에피소드를 넷플릭스에서 만나보실 수 있습니다
            </p>
            <a
              href="https://www.netflix.com/title/82006516"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-12 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105"
            >
              넷플릭스에서 시청하기
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
