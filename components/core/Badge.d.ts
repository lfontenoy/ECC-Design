import * as React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** evidence = hallazgo respaldado. myth = creencia falsa. info = dato neutro. */
  tone?: 'evidence' | 'myth' | 'info' | 'neutral' | 'dark' | 'outline' | 'outlineOnDark';
  children?: React.ReactNode;
}
export function Badge(props: BadgeProps): JSX.Element;
