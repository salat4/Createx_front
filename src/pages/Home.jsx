import { HeroHeader } from "../components/Home/hero-header";


import { About } from "../components/Home/about";
import { Corses } from "../components/Home/corses";
import { Benefit } from "../components/Home/benefits";
import { Schedule } from "../components/Home/schedule";
import { Certificate } from "../components/Home/certificate";
import { Team } from "../components/Home/team";
import { Blog } from "../components/Home/blog";
import { Subscribe } from "../components/Home/subscribe";
import {Footer} from '../components/footer';

export default function Home (){
  return (
    <>
      <HeroHeader />
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
