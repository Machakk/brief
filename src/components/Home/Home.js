import { Link } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";
import AnimatedText from "../AnimatedText/AnimatedText";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const enjoy = ["H", "e", "l", "l", "o"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 1000);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedText letterClass={letterClass} strArray={enjoy} idx={22} />
        </h1>
        <div className="section">
          <div className="section-part">
            <h2>xtrtrtx</h2>
            <h2>xzxzxzxz</h2>
          </div>
          <div className="section-part1">
            <h2>My name is</h2>
            <h2>Machak</h2>
          </div>
          <div className="section-part">
            <h2>My name is</h2>
            <h2>Machak</h2>
          </div>
          <div className="section-part">
            <h2>My name is</h2>
            <h2>Machak</h2>
          </div>
          <div className="section-part">
            <h2>My name is</h2>
            <h2>Machak</h2>
          </div>
          <div className="section-part">
            <h2>My name is</h2>
            <h2>Machak</h2>
          </div>
          <div className="section-part">
            <h2>My name is</h2>
            <h2>Machak</h2>
          </div>
        </div>

        <Link to="/portfolio" className="btn">
          My Portfolio
        </Link>
      </div>
    </div>
  );
};

export default Home;
