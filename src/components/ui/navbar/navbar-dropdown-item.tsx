import * as React from 'react';
import { cn } from '@/lib/utils';
import { navbarDropdownItemVariants } from './variants';
import type { NavBarDropdownItemProps } from './types';

// NavBar 드롭다운 아이템 컴포넌트
export const NavBarDropdownItem = React.forwardRef<
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
