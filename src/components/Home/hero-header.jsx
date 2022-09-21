import { Header } from "../header";
import { Hero } from "./hero";

export const HeroHeader = () => {
  return (
    <div className="hero-header-section">
      <div className="container">
        <Header />
        <Hero />
      </div>
    </div>
  );
};
