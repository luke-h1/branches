import NextLink from "next/link";
import type { LinkProps } from "next/link";
import { ReactNode } from "react";
import styles from "./Link.module.scss";

type Props = {
  children: ReactNode;
  id?: string;
  href: string;
} & Omit<LinkProps, "href">;

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
    <NextLink id={id} href={href} {...props} className={styles.link}>
      {children}
    </NextLink>
  );
};
export default Link;
