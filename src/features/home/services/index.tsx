import { stock1, stock2, stock3, stock4, stock5, stock6 } from "assets";
import styles from "./styles.module.scss";

interface ServiceData {
  title: string;
  list: string[];
  image: string;
  text1: any;
  text2?: any;
}

interface ServiceProps extends ServiceData {
  getStarted: () => void;
}

const Service: React.FC<ServiceProps> = ({
  text1,
  title,
  text2,
  image,
  getStarted,
  list,
}) => {
  return (
    <div className={styles.service}>
      <div className={styles.content}>
        <p className={styles.service__ttl}>{title}</p>
        {text1}
        <ul className={styles.service__list}>
          {list.map((item, index) => (
            <li key={`${title}_${index}`}>{item}</li>
          ))}
        </ul>
        {text2 ?? ""}
        <button onClick={getStarted} className={styles.service__btn}>
          Get started
        </button>
      </div>
      <img className={styles.service__img} src={image} alt="" />
    </div>
  );
};

interface ServicesProps {
  getStarted: () => void;
}

const Services: React.FC<ServicesProps> = ({ getStarted }) => {
  const serviceList: ServiceData[] = [
    {
      title: "Private Wealth Accounts",
      list: [
        "Fixed income.",
        "Equities.",
        "And other alternative investments.",
      ],
      image: stock1,
      text1: (
        <p className={styles.service__txt}>
          Zitra Private Wealth is designed to help our clients build and manage
          tailored investment portfolios to achieve set financial goals
          including generational wealth transfer. Our clients enjoy both
          financial planning and investment management services.
        </p>
      ),
    },
    {
      title: "Fixed Income Notes",
      list: ["Money market instruments.", "Fixed income securities."],
      image: stock2,
      text1: (
        <p className={styles.service__txt}>
          Zitra Fixed Income Notes gives retail investors access to high-yield
          and professionally managed investments. The fund invests in identified
          asset classes including:
        </p>
      ),
      text2: (
        <p className={styles.service__txt}>
          This product allows for easy and affordable investments, fulfilling
          our inclusivity mission while meeting the capital preservation and
          stable growth objective of our clients.
        </p>
      ),
    },
    {
      title: "Mutual Funds",
      list: [
        "Suitable for investors with disciplined savings.",
        "For investing large sum of money regularly.",
        "Funds are professionally managed.",
      ],
      image: stock3,
      text1: (
        <p className={styles.service__txt}>
          With our Mutual Funds, Zitra Fund Managers provide access for
          individual and institutional investors regardless of their income,
          risk appetite and goal to enjoy professionally managed and
          high-yielding investments. They are suitable for investors with plans
          to make disciplined savings toward future financial goals with the
          opportunity to invest a lump sum or save on a regular basis. Our
          mutual funds are regulated by the Securities and Exchange Commission
          (SEC) of Nigeria.
        </p>
      ),
    },
    {
      title: "Foreign Currency Investments",
      list: [
        "Keep your assets in Dollars.",
        "Earn attractive returns.",
        "Offers additional liquidity as coupons.",
        "Assets can be withdrawn semi-annually or re-invested.",
      ],
      image: stock4,
      text1: (
        <p className={styles.service__txt}>
          Foreign currency investment products are designed for clients who seek
          to keep assets in Dollars while earning attractive returns.
        </p>
      ),
    },
    {
      title: "Zitra Alternative Investments (ZAI)",
      list: [
        "Has investment appraisal system that analyze transactions.",
        "Offers competitive returns.",
        "Investors receive bullet repayment of principal and interest.",
      ],
      image: stock5,
      text1: (
        <p className={styles.service__txt}>
          The ZAI (N) is an Alternative Investment product that seeks to
          generate superior returns relative to traditional fixed-income
          investment by investing in structured assets including
          commodity-backed notes, foreign currency (FCY) linked notes, credit,
          and treasury-linked notes.
        </p>
      ),
    },
    {
      title: "Ethical Investments",
      list: ["Sharia-Compliant Equities.", "Sukuk Bonds."],
      image: stock6,
      text1: (
        <p className={styles.service__txt}>
          Our Ethical Investment Products are designed to meet the special needs
          of investors with a desire to invest in only ethical financial
          products. The products comply with the principle of non-interest
          investing and offer opportunities for the investors to share risk and
          returns.
        </p>
      ),
    },
  ];
  return (
    <>
      <section id="services" className={`container ${styles.services}`}>
        <h3 className={styles.services__ttl}>Our Products & Services</h3>
        {/* <p className={styles.services__txt}>
          Zitra Private Wealth is designed to help our clients build and manage
          tailored investment portfolios
        </p> */}
        <div>
          {serviceList.map((service, index) => (
            <Service getStarted={getStarted} {...service} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};
export { Services };
