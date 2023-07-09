import { useRef, useState } from "react";
import styles from "./styles.module.scss";
import { MinusIcon, PlusIcon, avatarGroup } from "assets";
import { Routes } from "router";
import { Link } from "react-router-dom";

interface FAQITemProps extends FAQListProp {
  active: number;
  state: number;
  changeActive: (state: number) => void;
}

interface FAQListProp {
  question: string;
  answer: any;
}

const FAQItem: React.FC<FAQITemProps> = ({
  active,
  state,
  changeActive,
  question,
  answer,
}) => {
  const contentEl = useRef<HTMLDivElement>(null);
  return (
    <div
      className={`${styles.faqItem} ${
        active === state ? styles.activeItem : styles.inactiveItem
      }`}
    >
      <button
        onClick={() => changeActive(active === state ? -1 : state)}
        className={`${styles.faqBtn} ${active === state ? styles.open : ""}`}
      >
        <span>{question}</span>{" "}
        {state === active ? <MinusIcon /> : <PlusIcon />}
      </button>
      <div
        ref={contentEl}
        className={styles.faqBody}
        style={
          active === state && contentEl.current
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div>{answer}</div>
      </div>
    </div>
  );
};

const FAQSUI = () => {
  const [active, setActive] = useState(-1);

  const faqs: FAQListProp[] = [
    {
      question: "What services do you offer?",
      answer: `Zitra Fund Managers (“Zitra”) is an independent investment manager in Nigeria
        licensed by the Securities and Exchange Commission (“SEC”) as a fund and portfolio
        manager. Zitra delivers world-class fund management services to a broad client base
        of institutions, family offices, charities, foundations, HNW, and individuals. We offer
        a variety of investment, planning, and wealth management advisory solutions
        including traditional and alternative investment solutions in both domestic and
        foreign currency including mutual funds and private funds.`,
    },
    {
      question: "How do you handle risk management?",
      answer: `At Zitra, risk management is a core part of our investment management process. Our
        risk management process involves continuous scanning of the business environment
        to identify, assess, and prioritize risks, and then take steps to mitigate or manage the
        identified risks. We rely on our strong Board of Directors and the vast experience of
        our leadership team to continuously identify and mitigate risks in our business
        environment.`,
    },
    {
      question:
        "How do I get started with your company’s asset management services?",
      answer: `Our client onboarding process is simple. You can get started by signing up on our
        website or sending us an email or calling any of our mobile lines. We are also
        available on our social media platforms including Twitter, Instagram, and Facebook.
        Our WhatsApp lines are open for instant messaging.`,
    },
    {
      question: "What is the minimum investment amount required?",
      answer: `The minimum investment amount for our Zitra Income Portfolio product is
        ₦100,000. With ₦1,000 you can invest in our mutual fund products.`,
    },
    {
      question: "How do I open an account?",
      answer: `Yes, you can reach out to us through any of our contact points/centers to open an
        account. Our account opening form is available on our websites. Kindly fill out the
        account opening form and email it to us.`,
    },
    {
      question: "How do I access my account information?",
      answer: `Your account information is accessible via our client portal. Also, you can directly
        request your account information through your personal wealth manager via email.`,
    },
    {
      question: "How do you stay on top of market trends and changes?",
      answer: `Our team comprises extensively skilled professionals who continuously engage in
        research to keep up with the latest market trends and developments. Our team
        provides regular updates to help our clients stay up to date with market
        developments.`,
    },
    {
      question: "Can I choose how my funds are invested?",
      answer: `We offer both discretionary and non-discretionary portfolio management services.
        With our non-discretionary portfolio management service, you can take active
        participation in the way your funds are invested and managed.`,
    },
    {
      question: "Can I withdraw my funds at any time?",
      answer: `Clients can withdraw their funds in line with the features of the specific
        fund/portfolio where funds are invested. Our portfolio management products have
        different maturity periods.`,
    },
    {
      question: "Is Zitra’s Alternative Portfolio available to only HNIs?",
      answer: `Our alternative investment products are specifically designed for clients who
        understand the risks and returns match.`,
    },
  ];
  return (
    <>
      <section className={styles.containerBg}>
        <section className={`container ${styles.container}`}>
          <h1 className={styles.container__ttl}>Frequently asked questions</h1>
          <p className={styles.container__txt}>
            Everything you need to know about the product and billing.
          </p>

          <div className={styles.faqList}>
            {faqs.map((item, index) => (
              <FAQItem
                {...item}
                key={index}
                state={index}
                active={active}
                changeActive={(x) => setActive(x)}
              />
            ))}
          </div>
        </section>
        <section className={`container ${styles.contact}`}>
            <img src={avatarGroup} alt="" />
          <h2 className={styles.contact__ttl}>Still have questions?</h2>
          <p className={styles.contact__txt}>
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <Link to={Routes.contact} >Get in touch</Link>
        </section>
      </section>
    </>
  );
};

export { FAQSUI };
