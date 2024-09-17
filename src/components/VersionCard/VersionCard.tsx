import { FormattedVersion } from "@frontend/services/versionService";
import styles from "./VersionCard.module.scss";
import FormattedDate from "../FormattedDate/FormattedDate";
import Link from "../Link/Link";

interface Props {
  version: FormattedVersion;
}

const VersionCard = ({ version }: Props) => {
  return (
    <div className={styles.version}>
      <h3 className={styles.title}>{version.title}</h3>
      <p className={styles.description}>
        Version: {version.version ?? "unknown"}
      </p>
      <p className={styles.description}>
        Deployed at:{" "}
        <FormattedDate format="d MMMM yyyy HH:mm">
          {version.deployedAt}
        </FormattedDate>{" "}
        UTC
      </p>
      <p className={styles.description}>Deployed by: {version.deployedBy}</p>
      <p className={styles.description}>Environment: {version.environment}</p>
      <p className={styles.description}>Git SHA: {version.gitSha}</p>
      <Link href={version.url}>Visit site</Link>
    </div>
  );
};
export default VersionCard;
