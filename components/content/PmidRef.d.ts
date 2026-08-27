import * as React from 'react';

/**
 * Referencia cientifica. La marca cita SIEMPRE por PMID; DOI solo si el estudio no esta en PubMed.
 */
export interface PmidRefProps extends React.HTMLAttributes<HTMLElement> {
  pmid?: string | number;
  doi?: string | null;
  /** Prefijo opcional, p. ej. "Estudio hero". */
  label?: string | null;
  onDark?: boolean;
  /** Enlaza a pubmed.ncbi.nlm.nih.gov. */
  linked?: boolean;
}
export function PmidRef(props: PmidRefProps): JSX.Element;
