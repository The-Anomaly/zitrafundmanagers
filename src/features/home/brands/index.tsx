import styles from "./styles.module.scss";
import {
  brand1,
  brand10,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
} from "assets";

const Brands = () => {
  return (
    <>
      <section className={`container ${styles.brands}`}>
        <h2 className={styles.brands__ttl}>Brands that trust us</h2>
        <div className={styles.brandList}>
          <img src={brand1} alt="paga" />
          <img src={brand2} alt="providus bank" />
          {/* <img src={brand3} alt="suntust" /> */}
          <img src={brand4} alt="appzone" />
          <img src={brand5} alt="remita" />
          <img src={brand6} alt="youverify" />
          <img src={brand7} alt="primepay" />
          <img src={brand8} alt="ifitness" />
          <img src={brand9} alt="kredi" />
          <img src={brand10} alt="bidellus credit" />
        </div>
      </section>
    </>
  );
};

export { Brands };
