import { HomeUI } from "features";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const apply = () => {
    setSearchParams({ getstarted: "true" });
  };

  return (
    <>
      <HomeUI apply={apply} />
    </>
  );
};

export { Home };
