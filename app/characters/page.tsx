import Header from '@/components/Header';
import Footer from '@/components/Footer';

const characters = [
  {
    name: '셰일라 럽 (Sheila Rubin)',
    role: '주인공 / 에어로빅 강사',
    actor: '로즈 번',
    description: '겉으로는 완벽한 가정주부이지만, 내면의 어둠과 섭식 장애로 고통받고 있습니다. 에어로빅을 통해 자신의 삶을 변화시키고 성공을 거머쥐지만, 그 과정에서 많은 희생과 선택을 해야 합니다.',
    traits: ['야심가', '복잡한 내면', '생존자', '전략가']
  },
  {
    name: '대니 럽 (Danny Rubin)',
    role: '셰일라의 남편',
    actor: '롤리 아자로프',
    description: '이상주의적인 정치인을 꿈꾸지만 현실과 타협해야 하는 부동산 개발업자입니다. 셰일라의 진짜 모습을 알지 못한 채 자신만의 야망을 추구합니다.',
    traits: ['이상주의자', '순진함', '야심가', '가족 지향적']
  },
  {
    name: '번니 스타인 (Bunny Stein)',
    role: '라이벌 강사',
    actor: '델라 샤보',
    description: '화려하고 자신감 넘치는 에어로빅 강사로, 셰일라의 가장 큰 경쟁자입니다. 겉으로는 완벽해 보이지만 그녀 역시 자신만의 고민과 약점을 가지고 있습니다.',
    traits: ['자신감', '카리스마', '경쟁심', '취약함']
  },
  {
    name: '지나 (Gina)',
    role: '셰일라의 친구',
    actor: '디아드라 프라이어',
    description: '셰일라의 오랜 친구이자 조력자로, 그녀의 사업 파트너가 됩니다. 현실적이고 지혜로운 조언을 제공하며 셰일라를 지지합니다.',
    traits: ['충성심', '현실적', '지혜로움', '솔직함']
  },
  {
    name: '존 브림 (John Breem)',
    role: '방송 프로듀서',
    actor: '폴 스파크스',
    description: '셰일라의 에어로빅 비디오를 전국적으로 유명하게 만드는 데 중요한 역할을 합니다. 비즈니스에 능하지만 윤리적으로 의심스러운 면이 있습니다.',
    traits: ['비즈니스 감각', '기회주의자', '영향력', '복잡함']
  },
  {
    name: '타일러 (Tyler)',
    role: '에어로빅 강사',
    actor: '루 테일러 푸치',
    description: '젊고 재능있는 에어로빅 강사로, 셰일라의 팀에 합류합니다. 순수하고 열정적이지만 업계의 어두운 면을 배우게 됩니다.',
    traits: ['열정적', '순수함', '재능', '성장']
  }
];

export default function CharactersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Page Header */}
        <section className="py-20 bg-gradient-to-b from-black via-red-950/20 to-black">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
              캐릭터 소개
            </h1>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Physical Asia의 복잡하고 매력적인 인물들을 만나보세요
            </p>
          </div>
        </section>

        {/* Characters Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 max-w-6xl mx-auto">
              {characters.map((character, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 bg-gradient-to-br from-red-950/30 to-black border border-red-900/30 rounded-xl p-8 hover:border-red-500/50 transition-all`}
                >
                  {/* Character Image Placeholder */}
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="aspect-[3/4] bg-gradient-to-br from-red-900/40 to-black rounded-lg flex items-center justify-center">
                      <span className="text-8xl">👤</span>
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-2">{character.name}</h2>
                    <p className="text-red-400 font-semibold mb-1">{character.role}</p>
                    <p className="text-gray-500 mb-4">연기: {character.actor}</p>
                    <p className="text-gray-300 leading-relaxed mb-6">{character.description}</p>

                    {/* Traits */}
                    <div className="flex flex-wrap gap-2">
                      {character.traits.map((trait, traitIndex) => (
                        <span
                          key={traitIndex}
                          className="px-3 py-1 bg-red-950/50 border border-red-900/50 rounded-full text-sm text-red-300"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="py-20 bg-gradient-to-b from-black to-red-950/20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
              흥미로운 사실들
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: '실제 에어로빅',
                  description: '배우들은 실제 에어로빅 훈련을 6개월간 받았습니다'
                },
                {
                  title: '80년대 패션',
                  description: '1000개 이상의 오리지널 레오타드가 제작되었습니다'
                },
                {
                  title: '심리적 깊이',
                  description: '각 캐릭터는 정신건강 전문가의 자문을 받아 개발되었습니다'
                }
              ].map((fact, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-red-950/40 to-black border border-red-900/30 rounded-xl p-6 text-center"
                >
                  <h3 className="text-xl font-bold text-red-400 mb-3">{fact.title}</h3>
                  <p className="text-gray-300">{fact.description}</p>
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
