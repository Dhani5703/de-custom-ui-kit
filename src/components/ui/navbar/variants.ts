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
  },
  defaultVariants: {
    orientation: 'horizontal',
    size: 'md',
    variant: 'default',
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
    },
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
      variant: 'default',
      active: false,
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
    },
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
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
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
      active: false,
    },
  }
);
