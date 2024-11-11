import { useContext } from "react";
import ProfileImg from "../img/LinkedIn photo-photoaidcom-cropped.jpg";
import ContextTheme from "../Context/ContextTheme";
import AppTheme from "../color";

const TitlePage = () => {
  const ThemeMode = useContext(ContextTheme)[0];
  const currentTheme = AppTheme[ThemeMode];

  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <div className="container mdq">
        <div className="main-div mdq">
          <div className="my-imgDiv">
            <img src={ProfileImg} alt="My-photo" />
          </div>
        </div>

        <div className="mdq info">
          <div className="mdq">
            <h1 className="my-name">Siddharth Chavan</h1>
            <h5 className="dec">
              {/* <i class="fas fa-code webIcon dec" />  */}
              Assistant System Engineer
            </h5>
          </div>

          <div className="Btn-Div">
            <a href="https://drive.google.com/file/d/16MkquUEGDSy2F4E6jvBCj0qrUqdgBt4r/view?usp=sharing"  target="_blank" className="ResumeText">
              <button className="ResumeBtn">Resume</button>
            </a>
          </div>
          <div className="split socialIcons">
            <div className="Icon">
              <a href="https://github.com/Siddharth34" target="_blank">
                <i
                  className="fab fa-github git_ic"
                  style={{
                    color: `${currentTheme.iconColor}`,
                  }}
                />
              </a>
            </div>

            <div className="Icon">
              <a
                href="https://www.linkedin.com/in/siddharth-chavan-8897ab1b2/"
                target="_blank"
              >
                <img src="https://img.icons8.com/fluency/50/000000/linkedin.png" />
              </a>
            </div>

            <div className="Icon">
              <a href="mailto:chavansiddharth.54@gmail.com" target="_blank">
                <img src="https://img.icons8.com/fluency/48/000000/gmail-new.png" />
              </a>
            </div>

            {/* <div className="Icon">
              <a href="https://www.instagram.com/siddharrrtthh/" target="_blank">
                <img src="https://img.icons8.com/fluency/50/000000/instagram-new.png" />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
