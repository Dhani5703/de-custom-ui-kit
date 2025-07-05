import * as React from 'react';

// NavBar 기본 Props
export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'solid';
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
}

// NavBar 드롭다운 Props
export interface NavBarDropdownProps
  extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  isOpen?: boolean;
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
}
