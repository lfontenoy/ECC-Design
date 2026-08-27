import * as React from 'react';

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  /** pinned = comentario fijado del video. limit = limitaciones del estudio. practice = que hacer. */
  kind?: 'pinned' | 'note' | 'limit' | 'practice';
  /** Sustituye el rotulo por defecto. */
  title?: string | null;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}
export function Callout(props: CalloutProps): JSX.Element;
