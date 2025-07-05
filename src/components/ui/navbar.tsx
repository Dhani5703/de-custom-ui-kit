import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  navbarVariants,
  navbarItemVariants,
  navbarDropdownVariants,
  navbarDropdownItemVariants,
} from './navbar-variants';
import type {
  NavBarProps,
  NavBarItemProps,
  NavBarDropdownProps,
  NavBarDropdownItemProps,
} from './navbar-types';

// NavBar 컴포넌트
const NavBar = React.forwardRef<HTMLElement, NavBarProps>(
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
NavBar.displayName = 'NavBar';

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

export { NavBar, NavBarItem, NavBarDropdown, NavBarDropdownItem };
