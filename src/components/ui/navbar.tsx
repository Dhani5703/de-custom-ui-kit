/*
 * NavBar 컴포넌트 사용법
 *
 * 1. 기본 import 방법:
 * import { NavBar, NavBarItem, NavBarDropdown, NavBarDropdownItem } from '@/components/ui';
 *
 * 2. 개별 import 방법:
 * import { NavBar } from '@/components/ui/navbar';
 * import { navbarVariants } from '@/components/ui/navbar-variants';
 *
 * 3. 주요 Props:
 * - orientation: 'horizontal' | 'vertical' (가로형/세로형)
 * - size: 'sm' | 'md' | 'lg' (크기)
 * - variant: 'default' | 'ghost' | 'solid' (스타일)
 * - isActive: boolean (활성 상태)
 * - hasDropdown: boolean (드롭다운 여부)
 *
 * 4. 사용 예시:
 * <NavBar orientation="horizontal" size="md" variant="default">
 *   <NavBarItem href="/" isActive={true}>홈</NavBarItem>
 *   <NavBarItem href="/about">소개</NavBarItem>
 *   <NavBarItem hasDropdown={true}>서비스</NavBarItem>
 * </NavBar>
 *
 * 디자인 커스터마이징 방법:
 *
 * 1. 색상 테마 변경:
 *    - 기본 색상: bg-white, text-gray-900
 *    - 활성 메뉴: text-blue-600, bg-blue-50
 *    - 호버 효과: hover:text-gray-900, hover:bg-gray-50
 *    - 테두리: border-gray-200
 *    - 다크 모드: dark:bg-gray-800, dark:text-white
 *
 * 2. 크기 및 간격 조정:
 *    - 전체 패딩: px-4 py-3 (가로 16px, 세로 12px)
 *    - 메뉴 아이템 패딩: px-3 py-2 (가로 12px, 세로 8px)
 *    - 메뉴 간격: space-x-8 (32px)
 *    - 폰트 크기: text-sm (14px), text-xl (20px)
 *
 * 3. 애니메이션 효과:
 *    - transition-colors: 색상 변화 부드러운 전환
 *    - transition-all: 모든 속성 부드러운 전환
 *    - duration-200: 200ms 지속시간
 *    - ease-in-out: 부드러운 가속/감속
 *
 * 4. 반응형 디자인:
 *    - 모바일: sm: 접두사 사용 (640px 이상)
 *    - 태블릿: md: 접두사 사용 (768px 이상)
 *    - 데스크톱: lg: 접두사 사용 (1024px 이상)
 *    - 큰 화면: xl: 접두사 사용 (1280px 이상)
 *
 * 5. 커스텀 스타일 적용:
 *    - className prop으로 추가 클래스 전달 가능
 *    - CSS 모듈이나 styled-components 사용 가능
 *    - Tailwind CSS 커스텀 클래스 정의 가능
 *    - CSS 변수 사용으로 테마 변경 가능
 *
 * 6. 접근성 개선:
 *    - role="navigation" 추가
 *    - aria-label 속성 추가
 *    - aria-current="page" 활성 메뉴 표시
 *    - 키보드 네비게이션 지원
 *    - 포커스 표시 스타일링 (focus:outline-none, focus:ring-2)
 *
 * 7. 성능 최적화:
 *    - React.memo로 불필요한 리렌더링 방지
 *    - useCallback으로 이벤트 핸들러 메모이제이션
 *    - CSS-in-JS 사용 시 스타일 메모이제이션
 */

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  navbarVariants,
  navbarItemVariants,
  navbarDropdownVariants,
  navbarDropdownItemVariants,
} from './navbar-variants';
import type {
  NavBarProps,
  NavBarItemProps,
  NavBarDropdownProps,
  NavBarDropdownItemProps,
} from './navbar-types';

/**
 * NavBar 컴포넌트
 *
 * 디자인 커스터마이징 방법:
 *
 * 1. 색상 테마 변경:
 *    - 기본 색상: bg-white, text-gray-900
 *    - 활성 메뉴: text-blue-600, bg-blue-50
 *    - 호버 효과: hover:text-gray-900, hover:bg-gray-50
 *    - 테두리: border-gray-200
 *
 * 2. 크기 및 간격 조정:
 *    - 전체 패딩: px-4 py-3 (가로 16px, 세로 12px)
 *    - 메뉴 아이템 패딩: px-3 py-2 (가로 12px, 세로 8px)
 *    - 메뉴 간격: space-x-8 (32px)
 *    - 폰트 크기: text-sm (14px), text-xl (20px)
 *
 * 3. 애니메이션 효과:
 *    - transition-colors: 색상 변화 부드러운 전환
 *    - 추가 가능: transition-all, duration-200 등
 *
 * 4. 반응형 디자인:
 *    - 모바일: md: 접두사 사용 (예: md:flex, md:hidden)
 *    - 태블릿: lg: 접두사 사용
 *    - 데스크톱: xl: 접두사 사용
 *
 * 5. 커스텀 스타일 적용:
 *    - className prop으로 추가 클래스 전달 가능
 *    - CSS 모듈이나 styled-components 사용 가능
 *    - Tailwind CSS 커스텀 클래스 정의 가능
 *
 * 6. 다크 모드 지원:
 *    - dark: 접두사 사용 (예: dark:bg-gray-800, dark:text-white)
 *    - 시스템 테마 감지: prefers-color-scheme 미디어 쿼리
 *
 * 7. 접근성 개선:
 *    - role="navigation" 추가
 *    - aria-label 속성 추가
 *    - 키보드 네비게이션 지원
 *    - 포커스 표시 스타일링
 */

// NavBar 컴포넌트
const NavBarComponent = React.forwardRef<HTMLElement, NavBarProps>(
  ({ className, orientation, size, variant, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          navbarVariants({ orientation, size, variant }),
          className
        )}
        {...props}
      />
    );
  }
);
NavBarComponent.displayName = 'NavBar';

// NavBar 아이템 컴포넌트
const NavBarItem = React.forwardRef<HTMLLIElement, NavBarItemProps>(
  (
    {
      className,
      orientation,
      size,
      variant,
      active,
      children,
      href,
      isActive,
      hasDropdown,
      onItemClick,
      ...props
    },
    ref
  ) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    const handleClick = () => {
      if (hasDropdown) {
        setIsDropdownOpen(!isDropdownOpen);
      }
      onItemClick?.();
    };

    return (
      <li
        ref={ref}
        className={cn(
          navbarItemVariants({
            orientation,
            size,
            variant,
            active: isActive || active,
          }),
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {href ? (
          <a href={href} className='flex items-center w-full'>
            {children}
          </a>
        ) : (
          <div className='flex items-center w-full'>{children}</div>
        )}
      </li>
    );
  }
);
NavBarItem.displayName = 'NavBarItem';

// NavBar 드롭다운 컴포넌트
const NavBarDropdown = React.forwardRef<HTMLDivElement, NavBarDropdownProps>(
  ({ className, orientation, size, children, isOpen, ...props }, ref) => {
    if (!isOpen) return null;

    return (
      <div
        ref={ref}
        className={cn(navbarDropdownVariants({ orientation, size }), className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);
NavBarDropdown.displayName = 'NavBarDropdown';

// NavBar 드롭다운 아이템 컴포넌트
const NavBarDropdownItem = React.forwardRef<
  HTMLDivElement,
  NavBarDropdownItemProps
>(
  (
    {
      className,
      size,
      variant,
      active,
      children,
      href,
      isActive,
      onItemClick,
      ...props
    },
    ref
  ) => {
    const handleClick = () => {
      onItemClick?.();
    };

    return (
      <div
        ref={ref}
        className={cn(
          navbarDropdownItemVariants({
            size,
            variant,
            active: isActive || active,
          }),
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {href ? (
          <a href={href} className='block w-full'>
            {children}
          </a>
        ) : (
          children
        )}
      </div>
    );
  }
);
NavBarDropdownItem.displayName = 'NavBarDropdownItem';

export { NavBarComponent, NavBarItem, NavBarDropdown, NavBarDropdownItem };
