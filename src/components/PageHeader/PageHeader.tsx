import { FiExternalLink } from "react-icons/fi";
import styles from "./PageHeader.module.scss";
import Link from "../Link/Link";

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
      <div className={styles.uptime}>
        <Link href="https://status.lhowsam.com">Uptime dashboard</Link>{" "}
        <FiExternalLink className={styles.extLink} />
      </div>

      {children}
    </div>
  );
};
export default PageHeader;
