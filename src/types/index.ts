// 기본 컴포넌트 props 타입
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

// variant 타입들
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl'

export type InputVariant = 'default' | 'error' | 'success'
export type InputSize = 'sm' | 'md' | 'lg'

export type ModalVariant = 'default' | 'centered' | 'fullscreen'
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl'

// 공통 상태 타입
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'
export type DisabledState = boolean

// 이벤트 핸들러 타입
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void
export type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void
export type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void 