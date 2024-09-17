import { ReactNode } from "react";
import styles from "./Page.module.scss";

interface Props {
  children: ReactNode;
}

const Page = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
export default Page;
