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
  const [versions, setVersions] = useState<{
    lhoVersions: FormattedVersion[];
    lambdaVersions: FormattedVersion[];
    foamVersions: FormattedVersion[];
  }>({
    lhoVersions: [],
    lambdaVersions: [],
    foamVersions: [],
  });

  useEffect(() => {
    const fetchVersions = async () => {
      const [lhoVersions, lambdaVersions] = await Promise.all([
        versionService.lhowsamVersions(),
        versionService.nowPlayingVersions(),
        // versionService.foamProxyVersions(),
      ]);
      setVersions({ lhoVersions, lambdaVersions, foamVersions: [] });
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
          {versions.lhoVersions &&
            versions.lhoVersions
              .sort((a, b) => b.deployedAt.localeCompare(a.deployedAt))
              .map((lhoVersion) => (
                <VersionCard version={lhoVersion} key={lhoVersion.deployedAt} />
              ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Nowplaying lambdas</h2>
        <div>
          {versions.lambdaVersions &&
            versions.lambdaVersions
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
        <h2 className={styles.title}>Foam Auth proxy</h2>
        <div>
          {versions.foamVersions &&
            versions.foamVersions
              .sort((a, b) => b.deployedAt.localeCompare(a.deployedAt))
              .map((foamVersion) => (
                <VersionCard
                  version={foamVersion}
                  key={foamVersion.deployedAt}
                />
              ))}
        </div>
      </div>
    </Page>
  );
}

export default HomePage;
