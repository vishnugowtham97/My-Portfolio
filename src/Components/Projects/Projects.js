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
  SiNetlify,
  SiRender,
  SiMui,
  SiBootstrap,
} from "react-icons/si";
import { DiCss3, DiGithub, DiHeroku, DiMaterializecss } from "react-icons/di";
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
                  <SiMui />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <DiGithub />
                  <SiNetlify />
                  <DiHeroku />
                  <SiRender />
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
                  <SiMui />
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <DiGithub />
                  <SiNetlify />
                  <DiHeroku />
                  <SiRender />
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
                  transitions for seamless movement of clock hands.And used the
                  json Particle as the background live style.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <SiJavascript />
                  <VscJson />
                  <DiGithub />
                  <SiNetlify />
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
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhniQ6hQ-m6y_p0Lnv-MZ6p75DLVzKJ6qAA&usqp=CAU"
                    alt="Airbnb-clone image"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Airbnb clone</h2>
                <p>
                  Developed a captivating and user-friendly property showcase
                  interface for Airbnb using React js and Material UI. This
                  feature-rich interface seamlessly presents property details,
                  amenities, and availability with accuracy, users review &
                  location guidance. Smooth animations and transitions enhance
                  the experience, making property exploration engaging and
                  visually appealing.
                </p>
                <div>
                  <FaReact />
                  <DiCss3 />
                  <SiJavascript />
                  <SiMui />
                  <DiGithub />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://clonedairbnb-react.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/airbnb-React.git"
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
                    src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTh8fHBvcnRmb2xpb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="portfolio"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Portfolio</h2>
                <p>
                  My personal portfolio stands as a testament to my proficiency
                  in web development, meticulously crafted using the robust
                  combination of React and Material-UI.This portfolio not only
                  showcases my projects but also integrates a dynamic React
                  timeline, providing a captivating visual narrative of my
                  journey.
                </p>
                <div>
                  <FaReact />
                  <DiCss3 />
                  <SiJavascript />
                  <SiBootstrap />
                  <DiGithub />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://vishnugowtham-portfolio-resume.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/Portfolio-Resume-1.git"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVRwl-k6u5BRu2I9IqyxOHOIhtiv14415Zg&usqp=CAU"
                    alt="Thirukural"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Thirukural</h2>
                <p>
                  Thirukkural (a classic Tamil text) based on the user-provided
                  kural number & It displays the Thirukkural's two lines.
                  Fetches the Thirukkural data using the user-input kural number
                  and updates the DOM to display the retrieved lines.The Fetch
                  API is used to retrieve data from the API endpoint.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <DiGithub />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://vishnugowtham-thirukkural-api.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/Thirukural-API.git"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkJaGZmsSCJu8IWh9rrvUslkFhRB5Jo1oq-g&usqp=CAU"
                    alt="Deck of cards"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Deck of Cards</h2>
                <p>
                  This Javascript code fetches a shuffled deck of cards from the
                  deck of Cards API, and upon clicking a button, draws the first
                  12 cards from the deck and display them on a web page.
                  Javascript for scripting, fetching API data & DOM
                  manipulation. Event handling method is used tp response to the
                  click event on the "Shuffle button".
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <DiGithub />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://vishnugowtham-deckofcards-api.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/Deck-of-Cards.git"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqjC8Gsr9mZsKZ0ae7Mz67m-9ViUqo1aA_8A&usqp=CAU"
                    alt="petzone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Petzone- Tailwind css</h2>
                <p>
                  Utilized Tailwind CSS to design a responsive and appealing web
                  interface for PetZone, an online pet store. Leveraged
                  Tailwind's utility classes for efficient layout creation,
                  resulting in a seamless browsing experience across devices.
                  The resulting interface blends visual appeal with
                  practicality, enhancing PetZone's online presence.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <DiGithub />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://petzone-tailwindcss.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/petzone-tailwind-css.git"
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
