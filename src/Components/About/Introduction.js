import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/img.jpg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is
                <span className="different"> Vishnu </span> and I am from{" "}
                <span className="different">
                  Coimbatore, Tamil Nadu (India)
                </span>
                . I have completed my graduation in B.E (Electrical and
                Electronics Engineering) from the
                <span className="different">
                  {" "}
                  Anna University, Coimbatore (TN)
                </span>{" "}
                and After i learn MERN stack & have been honing my skills in web
                development ever since. In my free time, you can find me
                tinkering with code and exploring new projects.
              </h4>

              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Entrepreneure
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Traveller
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Passionate Cricketer
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
