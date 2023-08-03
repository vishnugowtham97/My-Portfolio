import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKFIEWL2aiwrELIYLPfWLV-IMU-yxjADAYSbmqnd3WmxKLKg0WBuZCugGqzMxfawB7u1s&usqp=CAU"
                    alt="Stack-overflow"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Stack Overflow clone</h2>
                <p>
                  Stack Overflow is a question-and-answer website for
                  programmers. we build clone of their website with some
                  features User registration and authentication system, Posting
                  questions and answers, Commenting on questions and answers,
                  voting etc.,
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://stack-overflow-clone-vishnu.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/stack-overflow-clone-app.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1gcoMHGEqh85v7umS1EXRjKroMLLBl2J-g&usqp=CAU"
                    alt="Free-Learning Web App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Free-Learning Web App</h2>
                <p>
                  Created a comprehensive web application inspired by ZenClass,
                  that the functionality of the student dashboard.such as a
                  student dashboard, course enrollment, assignment submission,
                  and progress tracking including course information, deadlines,
                  grades & certificates.
                </p>
                <div>
                  <FaReact />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://vishnugowtham-student-dasboard.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/zenclass-student-dashboard.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEA3I8OnVMd2JV8nWVOGWbKFNIIi_dU5OclMnQcW3L9boVWr0xQtKYaCi48JchjkdYbf8&usqp=CAU"
                    alt="Analog clock ui"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Analog Clock UI</h2>
                <p>
                  Crafted an elegant and interactive analog clock user interface
                  using HTML, CSS and JavaScript.The analog clock accurately
                  displays the current time, providing a visually appealing
                  representation of time. Implemented smooth animations and
                  transitions for seamless movement of clock hands.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://clock-ui-json-particle.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/clock-ui-json-particle.git"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
