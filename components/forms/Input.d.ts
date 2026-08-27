import * as React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
  hint?: string | null;
  /** Mensaje de error; tine el borde de coral. */
  error?: string | null;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  onDark?: boolean;
}
export function Input(props: InputProps): JSX.Element;
