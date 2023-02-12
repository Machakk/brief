import { Link } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";
import AnimatedText from "../AnimatedText/AnimatedText";
import DrawingHTML5 from "./DrawingHTML5";

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
        <Link to="/portfolio" className="btn">
          My Portfolio
        </Link>
      </div>
      <div className="typing-text">
        <p>
          I am a <span>Front-End Developer</span> and a{" "}
          <span>UI/UX Designer</span>
        </p>
      </div>
      {/* <DrawingHTML5 /> */}
    </div>
  );
};

export default Home;
