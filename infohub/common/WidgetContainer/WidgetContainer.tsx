import { HTMLProps } from 'react';
import styles from './WidgetContainer.module.scss';

export interface WidgetContainerProps extends HTMLProps<HTMLBaseElement> {
  flat?: boolean;
}

export function WidgetContainer({
  children,
  className,
  flat = false,
  ...props
}: WidgetContainerProps) {
  return (
    <article
      className={`${styles.widget} ${className}`}
      data-flat={flat}
      {...props}
    >
      {children}
    </article>
  );
}
