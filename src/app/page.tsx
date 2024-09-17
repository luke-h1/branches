import Page from "@frontend/components/Page/Page";
import PageHeader from "@frontend/components/PageHeader/PageHeader";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <Page>
      <PageHeader
        title="Lho branch dashboard"
        description="Information about deployed projects"
      />

      <div className={styles.container}>projects</div>
    </Page>
  );
}
