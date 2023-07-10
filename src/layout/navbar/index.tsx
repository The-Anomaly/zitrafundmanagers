import { Routes } from "router";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { logoColored, logoWhite } from "assets";

type tabs = "home" | "about" | "faqs" | "contact";

export interface NavbarProps {
  active: tabs;
  apply: () => void;
}
const Navbar: React.FC<NavbarProps> = ({ active, apply }) => {
  const [showNav, setShowNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 800 ? true : false);

  const screenSizeUpdate = () => {
    if (window.innerWidth <= 800) {
      setMobile(true);
    } else if (window.innerWidth > 800) {
      setMobile(false);
      setShowNav(false);
    }
  };
  window.onresize = screenSizeUpdate;

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  const NavLinks = [
    {
      text: "Home",
      state: "home",
      link: Routes.home,
    },
    {
      text: "About us",
      state: "about",
      link: Routes.about,
    },
    {
      text: "FAQ's",
      state: "faqs",
      link: Routes.faqs,
    },
    {
      text: "Contact us",
      state: "contact",
      link: Routes.contact,
    },
  ];
  return (
    <>
      <header
        className={`${styles.navBg} ${
          scrollNav
            ? styles.light
            : active === "home"
            ? styles.dark
            : styles.light
        } ${showNav ? styles.openMenu : ""}`}
      >
        <section
          className={`container ${styles.header}  ${
            scrollNav ? styles.scrollNav : ""
          }`}
        >
          <Link to={Routes.home}>
            <img
              className={styles.logo}
              src={
                scrollNav || showNav
                  ? logoColored
                  : active === "home"
                  ? logoWhite
                  : logoColored
              }
              alt="logo"
            />
          </Link>
          {(showNav && mobile) || !mobile ? (
            <nav className={styles.nav}>
              {NavLinks.map((item, index) => (
                <Link
                  key={index}
                  className={item.state === active ? styles.activeItem : ""}
                  onClick={() => setShowNav(false)}
                  to={item.link}
                >
                  {item.text}
                </Link>
              ))}
            </nav>
          ) : (
            ""
          )}
          {(showNav && mobile) || !mobile ? (
            <button
              className={styles.navBtn}
              onClick={() => {
                setShowNav(false);
                apply();
              }}
            >
              Apply now
            </button>
          ) : (
            ""
          )}
          <button
            onClick={() => setShowNav(!showNav)}
            className={`${styles.hamburger} ${
              showNav ? styles.closeMenuBtn : ""
            }`}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </section>
      </header>
    </>
  );
};

export { Navbar };
