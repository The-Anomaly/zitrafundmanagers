import { Link, Route } from "react-router-dom";
import styles from "./styles.module.scss";
import { Routes } from "router";
import {
  FacebookIcon,
  LinkedinIcon,
  SendIcon,
  TwitterIcon,
  logoWhite,
} from "assets";

const Footer = () => {
  return (
    <>
      <section className={styles.footerBg}>
        <footer className={`container ${styles.footer}`}>
          <div className={styles.sec1}>
            <div>
              <p className={styles.ttl}>Quicklinks</p>
              <div>
                <Link className={styles.item} to={Routes.home}>
                  Home
                </Link>
                <Link className={styles.item} to={""}>
                  Product & Services
                </Link>
                <Link className={styles.item} to={Routes.about}>
                  About us
                </Link>
                <Link className={styles.item} to={Routes.contact}>
                  Contact us
                </Link>
                <Link className={styles.item} to={Routes.faqs}>
                  FAQs
                </Link>
              </div>
            </div>
            <div>
              <p className={styles.ttl}>Our Products & Services</p>
              <ul>
                <li className={styles.item}>Private Wealth Accounts</li>
                <li className={styles.item}>Fixed Income Notes</li>
                <li className={styles.item}>Mutual Funds</li>
                <li className={styles.item}>Foreign Currency Investments</li>
                <li className={styles.item}>Zitra Alternative Investments</li>
                <li className={styles.item}>Ethical Investments</li>
              </ul>
            </div>
            <div>
              <p className={styles.ttl}>Contact</p>
              <ul>
                <li className={styles.item}>017002801</li>
                <li className={styles.item}>
                  <a href="mailto:info@zitrafundmanagers.com">
                    info@zitrafundmanagers.com
                  </a>
                </li>
                <li className={`${styles.item} ${styles.address}`}>
                  Address D59, Landbridge Avenue Oniru, Lekki Lagos.
                </li>
              </ul>
            </div>
            <div className={styles.subscribe}>
              <p className={styles.ttl}>Subscribe</p>
              <div className={styles.inputWrap}>
                <input role="button" type="email" placeholder="Email address" />
                <SendIcon />
              </div>
              <p className={styles.subscribe__txt}>
                Hello, we are ABC. trying to make an effort to put the right
                people for you to get the best results. Just insight
              </p>
            </div>
          </div>
          <div className={styles.sec2}>
            <img src={logoWhite} alt="zitra logo" />
            <div className={styles.otherLinks}>
              <a>Terms</a>
              <a>Privacy</a>
              <a>Cookies</a>
            </div>
            <div className={styles.socials}>
              <a>
                <LinkedinIcon />
              </a>
              <a>
                <FacebookIcon />
              </a>
              <a>
                <TwitterIcon />
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export { Footer };