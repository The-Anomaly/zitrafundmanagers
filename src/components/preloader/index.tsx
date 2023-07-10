import * as React from "react";
import styles from "./styles.module.css";

const Preloader = ({ loading }: { loading: boolean }) => {
  return (
    <>
      {loading ? (
        <div className={styles.preloader}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export { Preloader };
