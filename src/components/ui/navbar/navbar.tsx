/*
 * NavBar 컴포넌트 사용법
 *
 * 1. 기본 import 방법:
 * import { NavBar } from '@/components/ui/navbar';
 *
 * 2. 주요 Props:
 * - activeMenu: string (현재 활성화된 메뉴 아이템)
 * - onMenuChange: (menu: string) => void (메뉴 변경 핸들러)
 * - menuItems: Array<{id: string, label: string, href?: string}> (메뉴 아이템 목록)
 * - logoText?: string (로고 텍스트, 기본값: 'My UI')
 * - logoHref?: string (로고 링크, 기본값: '#')
 * - className?: string (추가 CSS 클래스)
 *
 * 3. 사용 예시:
 * <NavBar
 *   activeMenu={activeMenu}
 *   onMenuChange={setActiveMenu}
 *   menuItems={menuItems}
 *   logoText="My App"
 * />
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
