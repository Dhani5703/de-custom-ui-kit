import { cva } from 'class-variance-authority';

// NavBar 컨테이너의 CVA 정의
export const navbarVariants = cva(
  // 기본 스타일
  'flex items-center justify-between w-full',
  {
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
  }
);

// NavBar 아이템의 CVA 정의
export const navbarItemVariants = cva(
  // 기본 스타일
  'flex items-center transition-colors duration-200 cursor-pointer',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row px-3 py-2',
        vertical: 'flex-col w-full px-4 py-3',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      variant: {
        default: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
        ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
        solid: 'text-gray-300 hover:text-white hover:bg-gray-800',
      },
      active: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // 활성 상태 스타일
      {
        active: true,
        variant: 'default',
        class: 'text-blue-600 bg-blue-50 border-b-2 border-blue-600',
      },
      {
        active: true,
        variant: 'ghost',
        class: 'text-blue-600 bg-blue-50',
      },
      {
        active: true,
        variant: 'solid',
        class: 'text-white bg-gray-800',
      },
    ],
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
      variant: 'default',
      active: false,
    },
  }
);

// NavBar 드롭다운의 CVA 정의
export const navbarDropdownVariants = cva(
  // 기본 스타일
  'absolute z-50 min-w-48 rounded-md shadow-lg bg-white border border-gray-200',
  {
    variants: {
      orientation: {
        horizontal: 'top-full left-0 mt-1',
        vertical: 'left-full top-0 ml-1',
      },
      size: {
        sm: 'py-1',
        md: 'py-2',
        lg: 'py-3',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      size: 'md',
    },
  }
);

// NavBar 드롭다운 아이템의 CVA 정의
export const navbarDropdownItemVariants = cva(
  // 기본 스타일
  'block w-full text-left px-4 py-2 text-sm transition-colors duration-200 cursor-pointer',
  {
    variants: {
      size: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      variant: {
        default: 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
        ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100',
        solid: 'text-gray-300 hover:text-white hover:bg-gray-800',
      },
      active: {
        true: '',
        false: '',
      },
    },
    compoundVariants: [
      // 활성 상태 스타일
      {
        active: true,
        variant: 'default',
        class: 'text-blue-600 bg-blue-50',
      },
      {
        active: true,
        variant: 'ghost',
        class: 'text-blue-600 bg-blue-50',
      },
      {
        active: true,
        variant: 'solid',
        class: 'text-white bg-gray-800',
      },
    ],
    defaultVariants: {
      size: 'md',
      variant: 'default',
      active: false,
    },
  }
);
