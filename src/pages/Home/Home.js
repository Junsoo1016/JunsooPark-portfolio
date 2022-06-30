import React from "react";
import "./Home.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_options";
import { Link } from "react-router-dom";

export const Home = () => {
  const curlybrace1 = "{"
  const curlybrace2 = "}"  
  return (
    <HelmetProvider>
      <section id="home" className="home">
     
        <div className="intro_sec">
          <div className="text order-2">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h1 className="fluidz-48">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 20,
                    }}
                  />
                </h1>
                <div className="homeDescription">
                  <p><span className="span">class</span> JunsooPark <span className="span">extends</span> SoftwareEngineer {curlybrace1}</p>
                  <p>firstName: 'Jun',</p>
                  <p>lastName: 'Park',</p>
                  <p>email: 'junsoopark92@gmail.com'</p>
                  <p>{curlybrace2}</p>
                </div>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn ">
                      My Portfolio
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
