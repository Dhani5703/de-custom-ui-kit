import * as React from 'react';
import { cn } from '@/lib/utils';
import { navbarItemVariants } from './variants';
import type { NavBarItemProps } from './types';

// NavBar 아이템 컴포넌트
export const NavBarItem = React.forwardRef<HTMLLIElement, NavBarItemProps>(
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
