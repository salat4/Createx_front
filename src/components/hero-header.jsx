import { Hero } from "./hero";
import { Nav } from "./nav";

export const HeroHeader = () => {
  return (
    <>
      <div className="header-hero__section">
        <div className="container" >
        <Nav />
        <Hero />
        </div>
      </div>
    </>
  );
};
