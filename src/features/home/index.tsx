import { Brands } from "./brands";
import { HeroSection } from "./heroSection";
import { NewsFeed } from "./newsFeed";
import { Services } from "./services";
import { SocialProof } from "components";

interface HomeProps {
  apply: () => void;
}

const HomeUI: React.FC<HomeProps> = ({ apply }) => {
  return (
    <>
      <HeroSection apply={apply} />
      <SocialProof />
      <Brands />
      <Services getStarted={apply} />
      <NewsFeed />
    </>
  );
};

export { HomeUI };
