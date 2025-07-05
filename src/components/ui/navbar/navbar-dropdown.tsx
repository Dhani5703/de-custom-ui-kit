import * as React from 'react';
import { cn } from '@/lib/utils';
import { navbarDropdownVariants } from './variants';
import type { NavBarDropdownProps } from './types';

// NavBar 드롭다운 컴포넌트
export const NavBarDropdown = React.forwardRef<
  HTMLDivElement,
  NavBarDropdownProps
>(({ className, orientation, size, children, isOpen, ...props }, ref) => {
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
});
NavBarDropdown.displayName = 'NavBarDropdown';
