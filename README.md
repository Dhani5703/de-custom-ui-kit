# My UI - 재사용 가능한 UI 컴포넌트 라이브러리

React + TypeScript + TailwindCSS 기반의 재사용 가능한 UI 컴포넌트 라이브러리입니다.

## 🚀 기술 스택

- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **TailwindCSS** - 스타일링
- **Vite** - 빌드 도구
- **Yarn** - 패키지 매니저
- **class-variance-authority** - 컴포넌트 variant 관리
- **clsx + tailwind-merge** - 클래스명 병합
- **Lucide React** - 아이콘 라이브러리

## 📁 프로젝트 구조

```
src/
├── components/
│   ├── ui/           # 기본 UI 컴포넌트 (Button, Input, Modal 등)
│   └── layout/       # 레이아웃 컴포넌트 (Navbar, Sidebar 등)
├── lib/
│   └── utils.ts      # 유틸리티 함수들
├── types/
│   └── index.ts      # 공통 타입 정의
├── hooks/            # 커스텀 훅
└── styles/           # 추가 스타일
```

## 🎯 핵심 설계 원칙

### 1. Variant 기반 설계

- `variant`, `size`, `disabled` 등 속성 일반화
- class-variance-authority를 활용한 타입 안전한 variant 관리

### 2. 상태/스타일 분리

- UI 로직과 스타일 토큰 분리
- 재사용 가능한 스타일 시스템

### 3. 순환참조 방지

- 명확한 계층 구조 설계
- 배럴 익스포트를 통한 깔끔한 import

## 🛠️ 개발 환경 설정

```bash
# 의존성 설치
yarn install

# 개발 서버 실행
yarn dev

# 빌드
yarn build

# 타입 체크
yarn type-check
```

## 📦 컴포넌트 목록

### UI 컴포넌트

- [ ] Button (variant, size, disabled)
- [ ] Input (variant, size, error state)
- [ ] Modal (variant, size, backdrop)
- [ ] Toast (position, variant, auto-dismiss)
- [ ] Calendar (date picker, range picker)
- [ ] Clock (analog, digital)

### 레이아웃 컴포넌트

- [ ] Navbar (responsive, mobile menu)
- [ ] Sidebar (collapsible, nested menu)
- [ ] Footer (links, social media)

## 🔧 사용 예시

```tsx
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

function App() {
  return (
    <div>
      <Button variant='primary' size='lg' onClick={handleClick}>
        클릭하세요
      </Button>
      <Input variant='default' size='md' placeholder='입력하세요' />
    </div>
  );
}
```

## 📝 라이센스

MIT License
