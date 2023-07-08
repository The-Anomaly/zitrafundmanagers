import { Brands } from "./brands";
import { HeroSection } from "./heroSection";
import { NewsFeed } from "./newsFeed";
import { Services } from "./services";
import { SocialProof } from "components";

const HomeUI = () => {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <Brands />
      <Services />
      <NewsFeed />
    </>
  );
};

export { HomeUI };
