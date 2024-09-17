import Link from "../Link/Link";
import styles from "./Footer.module.scss";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="https://github.com/luke-h1/branches">
        <FiGithub size={20} />
      </Link>
    </footer>
  );
};
export default Footer;
