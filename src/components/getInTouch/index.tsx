import { avatarGroup } from "assets";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { Routes } from "router";

interface GetInTouchProps {
    className?: string
}
const GetInTouch = ({className}: GetInTouchProps) => {
  return (
    <section className={`container ${styles.contact} ${className}`}>
      <img src={avatarGroup} alt="" />
      <h2 className={styles.contact__ttl}>Still have questions?</h2>
      <p className={styles.contact__txt}>
        Can’t find the answer you’re looking for? Please chat to our friendly
        team.
      </p>
      <Link to={Routes.contact}>Get in touch</Link>
    </section>
  );
};

export { GetInTouch };
