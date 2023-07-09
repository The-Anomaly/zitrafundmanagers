import { SocialProof } from "components";
import { HeroSection } from "./heroSection";
import styles from "./styles.module.scss";
import { Team } from "./team";

const AboutUI = () => {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <Team />
    </>
  );
};
export { AboutUI };
