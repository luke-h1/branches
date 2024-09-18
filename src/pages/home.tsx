import { useEffect, useState } from "react";
import styles from "./home.module.scss";
import React from "react";
import Page from "@frontend/components/Page/Page";
import PageHeader from "@frontend/components/PageHeader/PageHeader";
import VersionCard from "@frontend/components/VersionCard/VersionCard";
import versionService, {
  FormattedVersion,
} from "@frontend/services/versionService";

function HomePage() {
  const [lhoVersions, setLhoVersions] = useState<FormattedVersion[]>([]);
  const [lambdaVersions, setLambdaVersions] = useState<FormattedVersion[]>([]);
  const [petVersions, setPetVersions] = useState<FormattedVersion[]>([]);
  useEffect(() => {
    const fetchVersions = async () => {
      const [lhoVersions, lambdaVersions, petVersions] = await Promise.all([
        versionService.lhowsamVersions(),
        versionService.nowPlayingVersions(),
        versionService.petVersions(),
      ]);
      setLhoVersions(lhoVersions);
      setLambdaVersions(lambdaVersions);
      setPetVersions(petVersions);
    };

    fetchVersions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            lhoVersions
              .sort((a, b) => b.deployedAt.localeCompare(a.deployedAt))
              .map((lhoVersion) => (
                <VersionCard version={lhoVersion} key={lhoVersion.deployedAt} />
              ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Nowplaying lambdas</h2>
        <div>
          {lambdaVersions &&
            lambdaVersions
              .sort((a, b) => b.deployedAt.localeCompare(a.deployedAt))
              .map((lambdaVersion) => (
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
            petVersions
              .sort((a, b) => b.deployedAt.localeCompare(a.deployedAt))
              .map((petVersion) => (
                <VersionCard version={petVersion} key={petVersion.deployedAt} />
              ))}
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
