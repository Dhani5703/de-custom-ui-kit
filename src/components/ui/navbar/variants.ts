import { cva } from 'class-variance-authority';

// NavBar 기본 variants
export const navbarVariants = cva('flex items-center justify-between', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
    size: {
      sm: 'px-3 py-2',
      md: 'px-4 py-3',
      lg: 'px-6 py-4',
    },
    variant: {
      default: 'bg-white border-b border-gray-200',
      ghost: 'bg-transparent',
      solid: 'bg-gray-900 text-white',
    },
    responsive: {
      true: 'flex-col md:flex-row',
      false: 'flex-row',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    size: 'md',
    variant: 'default',
    responsive: false,
  },
});

// NavBar 아이템 variants
export const navbarItemVariants = cva(
  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col w-full',
      },
      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-2 text-sm',
        lg: 'px-4 py-3 text-base',
      },
      variant: {
        default: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
        ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
        solid: 'text-gray-300 hover:text-white hover:bg-gray-800',
      },
      active: {
        true: 'text-blue-600 bg-blue-50',
        false: '',
      },
      mobile: {
        true: 'block w-full text-base',
        false: '',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
      variant: 'default',
      active: false,
      mobile: false,
    },
  }
);

// 모바일 메뉴 컨테이너 variants
export const mobileMenuVariants = cva(
  'md:hidden bg-white border-t border-gray-200',
  {
    variants: {
      size: {
        sm: 'px-2 pt-2 pb-3 space-y-1',
        md: 'px-2 pt-2 pb-3 space-y-1 sm:px-3',
        lg: 'px-3 pt-3 pb-4 space-y-2 sm:px-4',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
);

// 햄버거 메뉴 버튼 variants
export const hamburgerButtonVariants = cva(
  'inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors',
  {
    variants: {
      variant: {
        default: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
        ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
        solid: 'text-gray-300 hover:text-white hover:bg-gray-800',
      },
      size: {
        sm: 'p-1.5',
        md: 'p-2',
        lg: 'p-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

// NavBar 드롭다운 variants
export const navbarDropdownVariants = cva(
  'absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50',
  {
    variants: {
      orientation: {
        horizontal: 'top-full left-0',
        vertical: 'top-0 left-full ml-1',
      },
      size: {
        sm: 'min-w-32 py-1',
        md: 'min-w-40 py-2',
        lg: 'min-w-48 py-3',
      },
      mobile: {
        true: 'relative top-auto left-auto mt-0 border-0 shadow-none z-auto',
        false: '',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
      mobile: false,
    },
  }
);

// NavBar 드롭다운 아이템 variants
export const navbarDropdownItemVariants = cva(
  'px-3 py-2 text-sm transition-colors cursor-pointer',
  {
    variants: {
      size: {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-2 text-sm',
        lg: 'px-4 py-3 text-base',
      },
      variant: {
        default: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
        ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
        solid: 'text-gray-300 hover:text-white hover:bg-gray-800',
      },
      active: {
        true: 'text-blue-600 bg-blue-50',
        false: '',
      },
      mobile: {
        true: 'block w-full text-base',
        false: '',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      active: false,
      mobile: false,
    },
  }
);
