import { AssetManagementIcon, LicenseIcon, SkillIcon } from "assets/vectors";
import styles from "./styles.module.scss";

const SocialProof = () => {
  return (
    <>
      <section className={`container ${styles.container}`}>
        <section className={styles.stats}>
          <div className={styles.stat}>
            <AssetManagementIcon />
            <p className={styles.stat__ttl}>Assets under managements</p>
            <p className={styles.stat__txt}>₦ 6 Billion</p>
          </div>
          <div className={styles.stat}>
            <LicenseIcon />
            <p className={styles.stat__ttl}>Licensed by</p>
            <p className={styles.stat__txt}>Security & Exchange Commission</p>
          </div>
          <div className={styles.stat}>
            <SkillIcon />
            <p className={styles.stat__ttl}>Highly skilled</p>
            <p className={styles.stat__txt}>Portfolio Managers</p>
          </div>
        </section>
      </section>
    </>
  );
};

export { SocialProof };
