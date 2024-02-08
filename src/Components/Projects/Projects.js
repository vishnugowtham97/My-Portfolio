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
                    src="https://techcrunch.com/wp-content/uploads/2021/09/shopee-india.jpg"
                    alt="Stack-overflow"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>E-commerce Web App</h2>
                <p>
                  The Shopee website frontend, developed with React and
                  Bootstrap, integrates a secure payment gateway for seamless
                  and safe online transactions.Shopping cart functionality with
                  the ability to add, view, and manage items & User registration
                  and authentication system and with Event Ticket booking
                  features.
                </p>
                <div>
                  <FaReact />
                  <IoLogoJavascript />
                  <SiBootstrap />
                  <DiGithub />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://shopee-vishnu-ecommerce-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/Shopee-E-commerce-.git"
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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRntc99Yi0qGus5VAHolWbOaAhH0AH2aem1avwSU5XBPFOa02JiCDJQxNT5UevnM-YaH5U&usqp=CAU"
                    alt="weather_app"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather App</h2>
                <p>
                  Experience weather updates at your fingertips with our HTML,
                  CSS, and JavaScript-powered Weather App—delivering dynamic
                  real-time data for a visually captivating, secure, and
                  up-to-the-minute forecast.Dynamic weather data fetched through
                  real-time JavaScript API integration
                </p>
                <div>
                  <SiHtml5 />
                  <SiJavascript />
                  <SiBootstrap />
                  <VscJson />
                  <DiGithub />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://vishnu-weatherapp.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/Weather-app.git"
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
                  amenities and availability with accuracy, users review. Smooth
                  animations and transitions enhance the experience, making
                  property exploration engaging and visually appealing.
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
                    href="https://vishnu-petzone.netlify.app/"
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
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="Deck of cards"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Car Showroom website</h2>
                <p>
                  A dynamic React.js frontend showcasing car inventory and
                  dealership details for an engaging user experience. Showroom
                  Info React delivers an engaging and responsive user interface
                  using React.js. It provides comprehensive vehicle
                  specifications and dealership details for a user-friendly
                  experience.
                </p>
                <div>
                  <FaReact />
                  <SiBootstrap />
                  <SiNetlify />
                  <DiGithub />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://vishnu-carshowroom-info.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/Showroom-info.git"
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
                    alt="Deck of cards"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Clock UI</h2>
                <p>
                  Crafted an elegant and interactive analog clock user interface
                  using HTML, CSS and JavaScript.The analog clock accurately
                  displays the current time, providing a visually appealing
                  representation of time.Implemented smooth animations and
                  transitions for seamless movement of clock hands.
                </p>
                <div>
                  <SiHtml5 />
                  <DiCss3 />
                  <SiJavascript />
                  <SiBootstrap />
                  <SiNetlify />
                  <DiGithub />
                  <SiNetlify />
                </div>
                <div>
                  <a
                    href="https://simple-analogclock-ui.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/vishnugowtham97/Clock-UI.git"
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
