import { Header } from "../components/header";
import { Hero } from "../components/Home/hero";

import { About } from "../components/Home/about";
import { Corses } from "../components/corses";
import { Benefit } from "../components/Home/benefits";
import { Schedule } from "../components/Home/schedule";
import { Certificate } from "../components/Home/certificate";
import { Team } from "../components/Home/team";
import { Blog } from "../components/blog";
import { Subscribe } from "../components/Home/subscribe";
import {Footer} from '../components/footer';

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
      <Blog/>
      <Subscribe/>
      <Footer/>
    </>
  );
};
