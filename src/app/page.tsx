import Page from "@frontend/components/Page/Page";
import PageHeader from "@frontend/components/PageHeader/PageHeader";
import styles from "./page.module.scss";
import versionService from "@frontend/services/versionService";
import VersionCard from "@frontend/components/VersionCard/VersionCard";

export default async function Home() {
  const lhoVersions = await versionService.lhowsamVersions();
  return (
    <Page>
      <PageHeader
        title="Lho branch dashboard"
        description="Information about deployed projects"
      />

      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.title}>lhowsam web</h2>
          {lhoVersions &&
            lhoVersions.map((lhoVersion) => (
              <VersionCard version={lhoVersion} key={lhoVersion.deployedAt} />
            ))}
        </div>
      </div>
    </Page>
  );
}
