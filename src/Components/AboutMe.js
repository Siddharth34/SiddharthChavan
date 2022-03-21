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
            Siddharth Chavan from Sangola. Currently, I'm pursuing BSC (ECS). Having enthusiasm and prior experience in Web development, Also I am learning Cloud computing like AWS and Docker I would like to achieve a good position by doing satisfying work and improving my skills while being value-adding to the company.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
