/*
 * NavBar 컴포넌트 사용법
 *
 * 1. 기본 import 방법:
 * import { NavBar } from '@/components/ui';
 *
 * 2. 개별 import 방법:
 * import { NavBar } from '@/components/ui/navbar';
 *
 * 3. 주요 Props:
 * - activeMenu: string (현재 활성화된 메뉴 아이템)
 * - onMenuChange: (menu: string) => void (메뉴 변경 핸들러)
 * - menuItems: Array<{id: string, label: string, href?: string}> (메뉴 아이템 목록)
 * - logoText?: string (로고 텍스트, 기본값: 'My UI')
 * - logoHref?: string (로고 링크, 기본값: '#')
 * - className?: string (추가 CSS 클래스)
 *
 * 4. 사용 예시:
 * <NavBar
 *   activeMenu={activeMenu}
 *   onMenuChange={setActiveMenu}
 *   menuItems={menuItems}
 *   logoText="My App"
 * />
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

interface NavBarProps {
  /** 현재 활성화된 메뉴 아이템 */
  activeMenu: string;
  /** 메뉴 변경 핸들러 */
  onMenuChange: (menu: string) => void;
  /** 추가 CSS 클래스 */
  className?: string;
  /** 메뉴 아이템 목록 */
  menuItems: Array<{
    id: string;
    label: string;
    href?: string;
  }>;
  /** 로고 텍스트 */
  logoText?: string;
  /** 로고 링크 */
  logoHref?: string;
}

export const NavBar: React.FC<NavBarProps> = ({
  activeMenu,
  onMenuChange,
  className = '',
  menuItems,
  logoText = 'My UI',
  logoHref = '#',
}) => {
  return (
    <nav
      className={`bg-white border-b border-gray-200 px-4 py-3 ${className}`}
      role='navigation'
      aria-label='메인 네비게이션'
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-8'>
          <a
            href={logoHref}
            className='text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors'
            aria-label='홈으로 이동'
          >
            {logoText}
          </a>

          {/* 메뉴 아이템들 */}
          {menuItems.map(item => (
            <a
              key={item.id}
              href={item.href || '#'}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeMenu === item.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
              }`}
              onClick={e => {
                e.preventDefault();
                onMenuChange(item.id);
              }}
              aria-current={activeMenu === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

// 기존 NavBar 컴포넌트들 (복잡한 구조용)
import { cn } from '@/lib/utils';
import {
  navbarVariants,
  navbarItemVariants,
  navbarDropdownVariants,
  navbarDropdownItemVariants,
} from './navbar-variants';
import type {
  NavBarProps as ComplexNavBarProps,
  NavBarItemProps,
  NavBarDropdownProps,
  NavBarDropdownItemProps,
} from './navbar-types';

// NavBar 컴포넌트 (복잡한 구조용)
const NavBarComponent = React.forwardRef<HTMLElement, ComplexNavBarProps>(
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
NavBarComponent.displayName = 'NavBarComponent';

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
