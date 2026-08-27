import * as React from 'react';

export interface StudyMetaItem { label: string; value: string }
/**
 * Ficha de metodologia: participantes, grupos, protocolo, duracion.
 */
export interface StudyMetaProps extends React.HTMLAttributes<HTMLElement> {
  items: StudyMetaItem[];
  onDark?: boolean;
  /** Columnas de la rejilla. Por defecto una por item. */
  columns?: number | null;
  /** Multiplicador de tipo y padding. Usa 2.4 en lienzos de 1080px (Reels y carrusel). */
  scale?: number;
}
export function StudyMeta(props: StudyMetaProps): JSX.Element;
