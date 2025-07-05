import * as React from 'react';

// NavBar 기본 Props
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'solid';
  responsive?: boolean;
  /** 현재 활성화된 메뉴 아이템 */
  activeMenu?: string;
  /** 메뉴 변경 핸들러 */
  onMenuChange?: (menu: string) => void;
  /** 메뉴 아이템 목록 */
  menuItems?: Array<{
    id: string;
    label: string;
    href?: string;
  }>;
  /** 로고 텍스트 */
  logoText?: string;
  /** 로고 링크 */
  logoHref?: string;
  /** 모바일 메뉴 열림 상태 */
  isMobileMenuOpen?: boolean;
  /** 모바일 메뉴 토글 핸들러 */
  onMobileMenuToggle?: () => void;
}

// NavBar 아이템 Props
export interface NavBarItemProps extends React.HTMLAttributes<HTMLLIElement> {
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'solid';
  active?: boolean;
  isActive?: boolean;
  href?: string;
  hasDropdown?: boolean;
  onItemClick?: () => void;
  mobile?: boolean;
}

// 모바일 메뉴 Props
export interface MobileMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

// 햄버거 메뉴 버튼 Props
export interface HamburgerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'solid';
  isOpen: boolean;
  onToggle: () => void;
  'aria-controls'?: string;
}

// NavBar 드롭다운 Props
export interface NavBarDropdownProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  isOpen?: boolean;
  mobile?: boolean;
}

// NavBar 드롭다운 아이템 Props
export interface NavBarDropdownItemProps
  extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'solid';
  active?: boolean;
  isActive?: boolean;
  href?: string;
  onItemClick?: () => void;
  mobile?: boolean;
}
