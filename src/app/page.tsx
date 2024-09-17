import Page from "@frontend/components/Page/Page";
import PageHeader from "@frontend/components/PageHeader/PageHeader";
import styles from "./page.module.scss";
import versionService from "@frontend/services/versionService";
import VersionCard from "@frontend/components/VersionCard/VersionCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Branches | branches.lhowsam.com",
  description: "Information about deployed projects",
};

export default async function Home() {
  const [lhoVersions, lambdaVersions, petVersions] = await Promise.all([
    versionService.lhowsamVersions(),
    versionService.nowPlayingVersions(),
    versionService.petVersions(),
  ]);
  return (
    <Page>
      <PageHeader
        title="Lho branch dashboard"
        description="Information about deployed projects"
      />

      <div className={styles.section}>
        <h2 className={styles.title}>lhowsam web</h2>
        <div>
          {lhoVersions &&
            lhoVersions.map((lhoVersion) => (
              <VersionCard version={lhoVersion} key={lhoVersion.deployedAt} />
            ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Nowplaying lambdas</h2>
        <div>
          {lambdaVersions &&
            lambdaVersions.map((lambdaVersion) => (
              <VersionCard
                version={lambdaVersion}
                key={lambdaVersion.deployedAt}
              />
            ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Pet adoption APIs</h2>
        <div>
          {petVersions &&
            petVersions.map((petVersion) => (
              <VersionCard version={petVersion} key={petVersion.deployedAt} />
            ))}
        </div>
      </div>
    </Page>
  );
}
