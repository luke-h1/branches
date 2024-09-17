import { Version } from "@frontend/services/versionService";
import styles from "./VersionCard.module.scss";

interface Props {
  version: Version;
}

const VersionCard = ({ version }: Props) => {
  return (
    <div className={styles.version}>
      <h3 className={styles.title}>{version.title}</h3>
      <p className={styles.description}>
        Version: {version.version ?? "unknown"}
      </p>
      <p className={styles.description}>Deployed at: {version.deployedAt}</p>
      <p className={styles.description}>Deployed by: {version.deployedBy}</p>
      <p className={styles.description}>Environment: {version.environment}</p>
      <p className={styles.description}>Git SHA: {version.gitSha}</p>
    </div>
  );
};
export default VersionCard;
