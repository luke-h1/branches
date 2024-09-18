import { Link as BaseLink, LinkProps } from "react-router-dom";
import { ReactNode } from "react";
import styles from "./Link.module.scss";

type Props = {
  children: ReactNode;
  id?: string;
  href: string;
} & Omit<LinkProps, "to">;

const Link = ({ children, id, href, ...props }: Props) => {
  const isAbsolute = typeof href === "string" && href.startsWith("http");
  const isHash = typeof href === "string" && href.startsWith("#");

  if (isAbsolute || isHash) {
    return (
      <a
        id={id}
        rel={isAbsolute ? "noopener noreferrer" : undefined}
        target={isAbsolute ? "_blank" : undefined}
        className={styles.link}
        {...props}
        href={href}
      >
        {children}
      </a>
    );
  }

  return (
    <BaseLink id={id} to={href} {...props} className={styles.link}>
      {children}
    </BaseLink>
  );
};
export default Link;
