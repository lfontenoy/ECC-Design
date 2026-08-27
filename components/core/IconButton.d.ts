import * as React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'subtle' | 'ghost' | 'onDark';
  size?: 'sm' | 'md' | 'lg';
  /** Texto accesible obligatorio (aria-label). */
  label: string;
  round?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}
export function IconButton(props: IconButtonProps): JSX.Element;
