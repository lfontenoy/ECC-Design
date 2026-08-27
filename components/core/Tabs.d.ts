import * as React from 'react';

export interface TabItem { value: string; label: string }
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: (TabItem | string)[];
  value: string;
  onChange?: (value: string) => void;
  onDark?: boolean;
}
export function Tabs(props: TabsProps): JSX.Element;
