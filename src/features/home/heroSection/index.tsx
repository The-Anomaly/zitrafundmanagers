import styles from "./styles.module.scss";

const HeroSection = ({ apply }) => {
  return (
    <>
      <section className={styles.heroBg}>
        <div className={`container ${styles.hero}`}>
          <h1 className={styles.ttl}>
            Manage your wealth like the <span>1%</span>
          </h1>
          <p className={styles.txt}>
            We offer a wide range of investment products and services across
            several asset classes including equity, fixed income, real estate,
            and commodities.
          </p>
          <button onClick={apply} className={styles.btn}>
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
};

export { HeroSection };
