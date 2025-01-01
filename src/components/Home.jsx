import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Hamza_Akram_Cv.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);
  
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Hamza Akram",
        "I'm a Fullstack Developer(laravel)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container home" id="home">
      <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
        <h1 ref={typedRef}></h1>

        <a
          href={pdf} // Link directly to the CV PDF
          download="Hamza_Akram_Cv.pdf"
          className="btn btn-outline-warning my-3"
        >
          Download Resume
        </a>
      </div>
      <div className="right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
          <img 
            src={`/assets/${hero.imgSrc}`} 
            alt={hero.altText || "Hero Image"} // Dynamic alt text for accessibility
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
