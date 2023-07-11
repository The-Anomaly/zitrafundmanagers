import { GrowthArrow } from "assets";
import styles from "./styles.module.scss";

const BottomFeedUI = () => {
  return (
    <aside className={styles.container}>
      <div className={`container ${styles.content}`}>
        <p>Investment Rates:</p>
        <span>
          <GrowthArrow /> Newhomes = 18%
        </span>
        <span>
          <GrowthArrow /> Newhomes = 18%
        </span>
        <span>
          <GrowthArrow /> Newhomes = 18%
        </span>
        <span>
          <GrowthArrow /> Newhomes = 18%
        </span>
        <span>
          <GrowthArrow /> Newhomes = 18%
        </span>
        <span>
          <GrowthArrow /> Newhomes = 18%
        </span>
      </div>
    </aside>
  );
};

export { BottomFeedUI };
