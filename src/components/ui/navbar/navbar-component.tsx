import * as React from 'react';
import { cn } from '@/lib/utils';
import { navbarVariants } from './variants';
import type { NavBarProps } from './types';

// NavBar 컴포넌트 (복잡한 구조용)
export const NavBarComponent = React.forwardRef<HTMLElement, NavBarProps>(
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
