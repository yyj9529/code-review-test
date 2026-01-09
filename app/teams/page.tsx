import Header from '@/components/Header';
import Footer from '@/components/Footer';

const teams = [
  {
    country: '한국',
    flag: '🇰🇷',
    captain: '김동현',
    captainInfo: '전 UFC 파이터',
    members: ['아모띠', '최승연', '장은실', '김민재', '윤성빈'],
    description: '전 UFC 파이터 김동현이 주장을 맡은 한국 대표팀. 다양한 종목의 엘리트 선수들로 구성되어 강력한 팀워크를 자랑합니다.',
    color: 'from-blue-900/40'
  },
  {
    country: '필리핀',
    flag: '🇵🇭',
    captain: 'Manny Pacquiao',
    captainInfo: '복싱 레전드',
    members: ['필리핀 대표 선수 5명'],
    description: '전설적인 복싱 챔피언 매니 파퀴아오가 이끄는 필리핀 대표팀. 파퀴아오의 리더십 아래 강력한 도전을 펼칩니다.',
    color: 'from-yellow-900/40'
  },
  {
    country: '호주',
    flag: '🇦🇺',
    captain: 'Robert Whittaker',
    captainInfo: 'UFC 미들급 파이터',
    members: ['호주 대표 선수 5명'],
    description: 'UFC 미들급 챔피언 출신 로버트 휘태커가 주장을 맡은 호주 대표팀. 강인한 정신력과 체력을 갖춘 전사들의 집합체입니다.',
    color: 'from-green-900/40'
  },
  {
    country: '태국',
    flag: '🇹🇭',
    captain: 'Ploy Nuannaree Olsen',
    captainInfo: '무에타이 코치 / 보디빌더',
    members: ['Sunny Kerdkao', '태국 대표 선수 4명'],
    description: '무에타이 코치이자 보디빌더 Ploy가 이끄는 태국 대표팀. 태국 럭비 국가대표 Sunny를 포함한 강력한 선수진을 보유하고 있습니다.',
    color: 'from-red-900/40'
  },
  {
    country: '몽골',
    flag: '🇲🇳',
    captain: 'Orkhonbayar Bayarsaikhan',
    captainInfo: '챔피언 레슬러',
    members: ['Adiyasuren Amarsaikhan', '몽골 대표 선수 4명'],
    description: '챔피언 레슬러 Orkhonbayar가 주장을 맡은 몽골 대표팀. 2024 파리 올림픽 유도 선수 Adiyasuren을 포함한 강력한 전사들이 모였습니다.',
    color: 'from-purple-900/40'
  },
  {
    country: '일본',
    flag: '🇯🇵',
    captain: 'TBA',
    captainInfo: '일본 대표',
    members: ['일본 대표 선수 6명'],
    description: '일본을 대표하는 엘리트 선수들이 모인 팀. 정확성과 전략적인 플레이로 경기를 이끌어갑니다.',
    color: 'from-red-800/40'
  },
  {
    country: '터키',
    flag: '🇹🇷',
    captain: 'TBA',
    captainInfo: '터키 대표',
    members: ['터키 대표 선수 6명'],
    description: '터키를 대표하는 강력한 선수들이 모인 팀. 높은 체력과 강인한 정신력을 자랑합니다.',
    color: 'from-orange-900/40'
  },
  {
    country: '인도네시아',
    flag: '🇮🇩',
    captain: 'TBA',
    captainInfo: '인도네시아 대표',
    members: ['인도네시아 대표 선수 6명'],
    description: '인도네시아를 대표하는 선수들이 모인 팀. 열정과 끈기로 경기에 임합니다.',
    color: 'from-indigo-900/40'
  }
];

export default function TeamsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-b from-black via-red-950/20 to-black">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              참가국 소개
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              아시아 8개국 최강 엘리트들의 치열한 국가 대항전
            </p>
          </div>
        </section>

        {/* Teams Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 max-w-6xl mx-auto">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 bg-gradient-to-br ${team.color} to-black border border-red-900/30 rounded-xl p-8 hover:border-red-500/50 transition-all`}
                >
                  {/* Team Flag */}
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="aspect-[4/3] bg-gradient-to-br from-red-900/40 to-black rounded-lg flex items-center justify-center">
                      <span className="text-9xl">{team.flag}</span>
                    </div>
                  </div>

                  {/* Team Info */}
                  <div className="flex-1">
                    <h2 className="text-4xl font-bold text-white mb-2">{team.country}</h2>
                    <div className="mb-4">
                      <p className="text-red-400 font-semibold text-xl">주장: {team.captain}</p>
                      <p className="text-gray-400">{team.captainInfo}</p>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-6">{team.description}</p>

                    {/* Team Members */}
                    <div>
                      <h3 className="text-lg font-bold text-white mb-3">팀 구성원</h3>
                      <div className="flex flex-wrap gap-2">
                        {team.members.map((member, memberIndex) => (
                          <span
                            key={memberIndex}
                            className="px-3 py-1 bg-red-950/50 border border-red-900/50 rounded-full text-sm text-red-300"
                          >
                            {member}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competition Format */}
        <section className="py-20 bg-gradient-to-b from-black to-red-950/20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              대회 방식
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: '국가별 6명',
                  description: '각국을 대표하는 6명의 엘리트 선수가 팀을 구성합니다'
                },
                {
                  title: '팀 대항전',
                  description: '개인전과 팀전을 오가며 국가의 명예를 걸고 경쟁합니다'
                },
                {
                  title: '극한의 미션',
                  description: '순수한 체력과 정신력을 시험하는 다양한 미션에 도전합니다'
                }
              ].map((format, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-950/40 to-black border border-red-900/30 rounded-xl p-6 text-center"
                >
                  <h3 className="text-xl font-bold text-red-400 mb-3">{format.title}</h3>
                  <p className="text-gray-300">{format.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
