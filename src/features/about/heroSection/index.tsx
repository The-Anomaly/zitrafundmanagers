import { AboutArrow, aboutImg } from "assets";
import styles from "./styles.module.scss";

const HeroSection = () => {
  return (
    <section className={styles.heroBg}>
      <div className={`container ${styles.hero}`}>
        <div className={styles.content}>
          <h1 className={styles.ttl}>
            About Us <AboutArrow />
          </h1>
          <p className={styles.txt}>
            Zitra Fund Managers Limited is a subsidiary of{" "}
            <a href="https://zitrainvestments.com/" target="_blank">
              Zitra Investment Limited
            </a>
            , a licensed Nigerian-owned technology-driven institution
            established in 2020.
          </p>
          <p className={styles.txt}>
            Zitra Fund Managers is registered by the Securities and Exchange
            Commission as a Fund/Portfolio Manager under management to provide
            top-notch investment advisory services to High net-worth
            individuals, Corporates, Governments, and Non-profit organizations.
          </p>
          <p className={styles.txt}>
            We offer a wide range of investment products and services across
            asset classes and investment styles. These include equities,
            fixed-income in local and global markets, collective ethical
            investment schemes, real estate, commodities, and alternative
            investments.
          </p>
        </div>
        <img className={styles.img} alt="" src={aboutImg} />
      </div>
    </section>
  );
};
export { HeroSection };
