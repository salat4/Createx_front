import { Header } from "../components/header";
import { Hero } from "../components/Home/hero";

import { About } from "../components/Home/about";
import { Corses } from "../components/Home/corses";
import { Benefit } from "../components/Home/benefits";
import { Schedule } from "../components/Home/schedule";
import { Certificate } from "../components/Home/certificate";
import { Team } from "../components/Home/team";
import PauseOnHover from "../components/Home/review";
export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Corses />
      <Benefit />
      <Schedule />
      <Certificate />
      <Team />
      <PauseOnHover/>
    </>
  );
};
