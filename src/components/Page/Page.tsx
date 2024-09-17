import { ReactNode } from "react";
import styles from "./Page.module.scss";
import Footer from "../Footer/Footer";

interface Props {
  children: ReactNode;
}

const Page = async ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};
export default Page;
