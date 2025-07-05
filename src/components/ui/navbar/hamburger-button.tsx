import * as React from 'react';
import { cn } from '@/lib/utils';
import { hamburgerButtonVariants } from './variants';
import type { HamburgerButtonProps } from './types';

// 햄버거 메뉴 버튼 컴포넌트
export const HamburgerButton = React.forwardRef<
  HTMLButtonElement,
  HamburgerButtonProps
>(
  (
    {
      className,
      size = 'md',
      variant = 'default',
      isOpen,
      onToggle,
      'aria-controls': ariaControls,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type='button'
        className={cn(hamburgerButtonVariants({ size, variant }), className)}
        aria-controls={ariaControls}
        aria-expanded={isOpen}
        onClick={onToggle}
        {...props}
      >
        <span className='sr-only'>{isOpen ? '메뉴 닫기' : '메뉴 열기'}</span>
        {/* 햄버거 아이콘 */}
        <svg
          className={`h-6 w-6 transition-transform duration-200 ${
            isOpen ? 'rotate-90' : ''
          }`}
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </button>
    );
  }
);

HamburgerButton.displayName = 'HamburgerButton';
