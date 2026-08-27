import * as React from 'react';

export interface SwitchProps extends React.HTMLAttributes<HTMLLabelElement> {
  label?: string | null;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  onDark?: boolean;
}
export function Switch(props: SwitchProps): JSX.Element;
