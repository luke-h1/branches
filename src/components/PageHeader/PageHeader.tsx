import styles from "./PageHeader.module.scss";

interface Props {
  title: string | JSX.Element;
  description?: string | JSX.Element;
  children?: JSX.Element;
  compact?: boolean;
}

const PageHeader = ({ title, children, compact, description }: Props) => {
  return (
    <div className={compact ? styles.wrapperCompact : styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
      {children}
    </div>
  );
};
export default PageHeader;
