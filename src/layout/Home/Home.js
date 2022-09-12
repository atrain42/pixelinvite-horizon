import "./Home.css";
import {
  Quote,
  About,
  SectionHeader,
  Registry,
  Contact,
  Final,
} from "../../components";
import leaf from "../../img/leaf.svg";
import stroller from "../../img/stroller.png";
import send from "../../img/send.png";

const Home = () => {
  return (
    <>
      <header className="header">
        <div className="header-text">
          <h1>Kristen and Mike's</h1>
          <h2>Baby shower</h2>
          <span>
            <p>Saturday, Nov 16, 2022 @ 2pm</p>
            <p>8212 Orange St., Denver, CO</p>
          </span>
        </div>
      </header>
      <main>
        <Quote />
        <SectionHeader src={leaf} alt="leaf" />
        <About />
        <SectionHeader src={stroller} alt="stroller" />
        <Registry />
        <SectionHeader src={send} alt="send" />
        <Contact />
        <Final />
      </main>
    </>
  );
};

export default Home;
