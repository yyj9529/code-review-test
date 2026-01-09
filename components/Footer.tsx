export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-900/30 mt-20">
      <div className="container mx-auto px-4 py-8">
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
