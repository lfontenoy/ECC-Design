import * as React from 'react';

/**
 * Boton de accion de Entrena con Ciencia.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = navy solido (accion principal). evidence = amarillo #FFC300 (CTA de valor / lead magnet). outline y ghost sobre fondo claro. onDark sobre navy. */
  variant?: 'primary' | 'evidence' | 'outline' | 'ghost' | 'onDark';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
}
export function Button(props: ButtonProps): JSX.Element;
