import * as React from 'react';
import { cn } from '@/lib/utils';
import { mobileMenuVariants } from './variants';
import type { MobileMenuProps } from './types';

// 모바일 메뉴 컴포넌트
export const MobileMenu = React.forwardRef<HTMLDivElement, MobileMenuProps>(
  ({ className, size = 'md', isOpen, children, ...props }, ref) => {
    // 모바일 메뉴가 열려있을 때만 렌더링
    if (!isOpen) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(mobileMenuVariants({ size }), className)}
        role='menu'
        aria-label='모바일 메뉴'
        {...props}
      >
        {children}
      </div>
    );
  }
);

MobileMenu.displayName = 'MobileMenu';
