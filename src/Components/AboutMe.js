import { useContext } from "react";
import WebImg from "../img/webdevImg.png";
import ContextTheme from "../Context/ContextTheme";
import AppTheme from "../color";

const AboutMe = () => {
  const ThemeMode = useContext(ContextTheme)[0];
  const currentTheme = AppTheme[ThemeMode];

  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <div>
        <h1 className="center-text text">
          <i className="fas fa-info-circle text-icon" />
          About Me
        </h1>

        <div className="split about_div">
          <div className="my-imgDiv">
            <img src={WebImg} alt="png-photo" className="vector-img" />
          </div>
          <div className="infoPara">
            <span className="iam">I'm </span>
            <p>
            Siddharth, and I work as a System Administrator at TCS. I have a strong understanding of AWS architecture as well as On-premises infrastructure. I have been fortunate enough to contribute to the design, implementation, and maintenance of robust infrastructures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
