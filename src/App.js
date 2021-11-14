import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import video from "./assets/bgLeavesAnimation.mp4";
import preloader from "./assets/preloader.gif";
import robo1 from "./assets/robo-1.gif";
import robo from "./assets/robo-2.gif";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";

function App() {
  const [loading, setLoading] = useState(true);
  const [play, setPlay] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const videoRef = useRef(null);

  useEffect(() => {
    window.addEventListener("load", function () {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWidth(window.innerWidth);
    });
    return () => window.removeEventListener("resize");
  }, []);

  const handleClick = () => {
    if (play) {
      setPlay(false);
      videoRef.current.pause();
    } else {
      setPlay(true);
      videoRef.current.play();
    }
  };

  return (
    <>
      {loading && (
        <div className="preloader">
          <img src={preloader} alt="preloader" />
        </div>
      )}
      {!loading && (
        <header>
          <div className="container">
            <video
              muted
              autoPlay
              loop
              className="video-container"
              ref={videoRef}
            >
              <source src={video} type="video/mp4" />
            </video>
            <main>
              <div className="luxury">
                <div className="heading">
                  <div>
                    <div>LUXURY</div>
                    <div className="of">of</div>
                  </div>
                  <div>DESIGN</div>
                </div>
                <div className="navImage">
                  <img src={robo1} alt="robot" className="robo1" />
                </div>
              </div>
              <div className="bottom flexbox">
                <div>
                  {width < 577 ? (
                    <>
                      <div>DESIGNS THAT</div>
                      <div>MAKE A</div>
                      <div>DIFFERENCE</div>
                    </>
                  ) : (
                    <>
                      <div>DESIGNS THAT MAKE</div>
                      <div>A DIFFERENCE</div>
                    </>
                  )}
                </div>
                <div className="bottomImage">
                  <img src={robo} alt="robot" className="robo" />
                </div>
              </div>
            </main>
            <button onClick={handleClick}>
              {play ? (
                <BsFillPauseFill color="rgb(255, 200, 87)" size={25} />
              ) : (
                <BsFillPlayFill color="rgb(255, 200, 87)" size={25} />
              )}
            </button>
          </div>
        </header>
      )}
    </>
  );
}

export default App;
