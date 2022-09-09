import { Hero } from "./hero";
import { Nav } from "./nav";
import { About } from "./about";
import { Corses } from "./corses";
import { Benefit } from "./benefits";
import { Schedule } from "./schedule";
import { Certificate } from "./certificate";
import {Team} from "./team";

export const HeroHeader = () => {
  return (
    <>
      <div className="header-hero__section">
        <div className="container">
          <Nav />
          <Hero />
        </div>
      </div>
      <About />
      <Corses />
      <Benefit />
      <Schedule />
      <Certificate />
      <Team/>
    </>
  );
};
