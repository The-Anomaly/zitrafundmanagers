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
            <a>Zitra Investment Limited</a>, a licensed Nigerian-owned
            technology-driven institution established in 2020.
          </p>
          <p className={styles.txt}>
            Zitra is registered by the Securities and Exchange Commission as a
            Fund/Portfolio Manager with over 6 billion Naira in assets under
            management to provide top-notch investment advisory services to High
            net-worth individuals, Corporates, Governments, and Non-profit
            organizations.
          </p>
          <p className={styles.txt}>
            We offers a wide range of investment products and services across
            asset classes and investment styles. These include equities,
            fixed-income portfolios in local and global markets, collective
            &amp; ethical investment schemes, real estate, commodities, and
            other alternative investment vehicles.
          </p>
        </div>
        <img className={styles.img} alt="" src={aboutImg} />
      </div>
    </section>
  );
};
export { HeroSection };
