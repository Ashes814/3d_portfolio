import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import "./index.css";

const App = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
          <Hero isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
          <Tech isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        </div>
        {/* <About isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> */}
        {/* <Experience isEnglish={isEnglish} setIsEnglish={setIsEnglish} /> */}

        <Works isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <Feedbacks isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
        <div className="relative z-0">
          <Contact isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
