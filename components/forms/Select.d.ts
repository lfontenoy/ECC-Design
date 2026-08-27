import * as React from 'react';

export interface SelectOption { value: string; label?: string }
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string | null;
  options: (SelectOption | string)[];
  hint?: string | null;
  onDark?: boolean;
}
export function Select(props: SelectProps): JSX.Element;
