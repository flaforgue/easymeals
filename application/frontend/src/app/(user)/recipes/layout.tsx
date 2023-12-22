import { ReactNode } from 'react';
interface LayoutProps {
  children: ReactNode;
  list: ReactNode;
  delete: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      {props.children}
      {props.list}
      {props.delete}
    </>
  );
}