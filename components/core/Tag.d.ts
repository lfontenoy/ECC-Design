import * as React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  /** Estado seleccionado (filtro activo). */
  active?: boolean;
  /** Variante para fondos navy. */
  onDark?: boolean;
  onClick?: () => void;
}
export function Tag(props: TagProps): JSX.Element;
