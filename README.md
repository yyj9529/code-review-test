# Physical Asia 팬페이지

넥플릭스 시리즈 **Physical Asia**의 공식 팬페이지입니다. Next.js와 Tailwind CSS로 제작되었습니다.

## 주요 기능

- 🏠 **홈페이지**: 시리즈 소개 및 주요 정보
- 👥 **캐릭터 페이지**: 주요 등장인물 소개 및 배경 스토리
- 📺 **에피소드 가이드**: 시즌별 에피소드 목록 및 줄거리
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기 지원

## 기술 스택

- **프레임워크**: Next.js 15.1.4
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **런타임**: React 19

## 시작하기

### 설치

\`\`\`bash
npm install
\`\`\`

### 개발 서버 실행

\`\`\`bash
npm run dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

\`\`\`bash
npm run build
\`\`\`

### 프로덕션 서버 실행

\`\`\`bash
npm start
\`\`\`

## 프로젝트 구조

\`\`\`
physical-asia-fan-page/
├── app/                    # Next.js App Router 디렉토리
│   ├── page.tsx           # 홈페이지
│   ├── characters/        # 캐릭터 페이지
│   ├── episodes/          # 에피소드 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── globals.css        # 글로벌 스타일
├── components/            # 재사용 가능한 컴포넌트
│   ├── Header.tsx        # 헤더 (반응형 네비게이션)
│   └── Footer.tsx        # 푸터
└── public/               # 정적 파일
\`\`\`

## 페이지 소개

### 홈페이지 (/)
- 히어로 섹션
- 시리즈 소개
- 주요 캐릭터 미리보기
- 최신 에피소드

### 캐릭터 페이지 (/characters)
- 6명의 주요 캐릭터 상세 정보
- 배우 정보
- 캐릭터 특성 태그

### 에피소드 페이지 (/episodes)
- 시즌별 에피소드 목록 (총 3시즌, 30개 에피소드)
- 에피소드별 제목 및 줄거리
- 인터랙티브 시즌 선택기

## 스타일 가이드

프로젝트는 다크 테마를 기본으로 사용하며, 레드 컬러를 포인트 컬러로 사용합니다:

- **Primary Color**: Red-600 (#DC2626)
- **Background**: Black (#0a0a0a)
- **Text**: Gray-300, White

## 라이선스

이 프로젝트는 비공식 팬페이지이며, 교육 및 팬 커뮤니티 목적으로 제작되었습니다.

## 기여

이슈 및 풀 리퀘스트를 환영합니다!
