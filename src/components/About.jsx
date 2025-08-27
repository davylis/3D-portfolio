import SocratesModel from "./canvas/SocratesModel";
import { css, aws, c, git, html, java, js, linux, mysql, postman, python, react, tailwind } from "../assets/tech";

const About = () => {
  return (
    <section className="skills-section">
      <h1 className="section-title autoDisplay">My Skills 💪</h1>
      <div className="skills-box autoDisplay">
        <SocratesModel />
        <div className="FrontEnd">
          <h1 className="gradient">
            FrontEnd
            <svg width="64" height="64" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%">
                    <animate
                      attributeName="stop-color"
                      values="#8B5CF6;#EC4899;#8B5CF6"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%">
                    <animate
                      attributeName="stop-color"
                      values="#EC4899;#8B5CF6;#EC4899"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>

              {/* bx-code-alt path */}
              <path
                fill="url(#grad)"
                d="M9.414 16l-4.707-4.707 4.707-4.707 1.414 1.414L7.242 11.5l3.586 3.586zM14.586 
           16l-1.414-1.414L16.758 11.5l-3.586-3.586 1.414-1.414L21.414 11.5z"
              />
            </svg>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>

        <div className="BackEnd">
          <h1 className="gradient gap-2 flex-items-center">
            BackEnd
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradServer" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%">
                    <animate
                      attributeName="stop-color"
                      values="#8B5CF6; #EC4899; #8B5CF6"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </stop>
                  <stop offset="100%">
                    <animate
                      attributeName="stop-color"
                      values="#EC4899; #8B5CF6; #EC4899"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </stop>
                </linearGradient>
              </defs>

              {/* Server Icon Path from Boxicons */}
              <path
                fill="url(#gradServer)"
                d="M4 3h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2zm0 
           10h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4a2 2 0 012-2z
           M6 7a1 1 0 100 2 1 1 0 000-2zm0 10a1 1 0 100 2 1 1 0 000-2z"
              />
            </svg>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </p>
        </div>

        <div
          className="slider"
          reverse="true"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": 13,
          }}
        >
          <div className="list">
            <div className="item" style={{ "--position": 1 }}>
              <img src={html} alt="" />
            </div>
            <div className="item" style={{ "--position": 2 }}>
              <img src={css} alt="" />
            </div>
            <div className="item" style={{ "--position": 3 }}>
              <img src={git} alt="" />
            </div>
            <div className="item" style={{ "--position": 4 }}>
              <img src={aws} alt="" />
            </div>
            <div className="item" style={{ "--position": 5 }}>
              <img src={java} alt="" />
            </div>
            <div className="item" style={{ "--position": 6 }}>
              <img src={c} alt="" />
            </div>
            <div className="item" style={{ "--position": 7 }}>
              <img src={js} alt="" />
            </div>
            <div className="item" style={{ "--position": 8 }}>
              <img src={linux} alt="" />
            </div>
            <div className="item" style={{ "--position": 9 }}>
              <img src={mysql} alt="" />
            </div>
            <div className="item" style={{ "--position": 10 }}>
              <img src={postman} alt="" />
            </div>
            <div className="item" style={{ "--position": 11 }}>
              <img src={python} alt="" />
            </div>
            <div className="item" style={{ "--position": 12 }}>
              <img src={react} alt="" />
            </div>
            <div className="item" style={{ "--position": 13 }}>
              <img src={tailwind} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
