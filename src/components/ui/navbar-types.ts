import * as React from 'react';
import { type VariantProps } from 'class-variance-authority';
import {
  navbarVariants,
  navbarItemVariants,
  navbarDropdownVariants,
  navbarDropdownItemVariants,
} from './navbar-variants';

// NavBar Props 타입 정의
export interface NavBarProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof navbarVariants> {}

// NavBar 아이템 Props 타입 정의
export interface NavBarItemProps
  extends React.HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof navbarItemVariants> {
  children?: React.ReactNode;
  href?: string;
  isActive?: boolean;
  hasDropdown?: boolean;
  onItemClick?: () => void;
}

// NavBar 드롭다운 Props 타입 정의
export interface NavBarDropdownProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarDropdownVariants> {
  children?: React.ReactNode;
  isOpen?: boolean;
}

// NavBar 드롭다운 아이템 Props 타입 정의
export interface NavBarDropdownItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof navbarDropdownItemVariants> {
  children?: React.ReactNode;
  href?: string;
  isActive?: boolean;
  onItemClick?: () => void;
}
