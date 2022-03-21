import { useContext } from "react";
import ContextTheme from "../Context/ContextTheme";
import AppTheme from "../color";
const Skills = () => {
  const ThemeMode = useContext(ContextTheme)[0];
  const currentTheme = AppTheme[ThemeMode];

  const skillsArray = [
    {
      title: "Java",
      icon: "https://img.icons8.com/color/54/000000/java-coffee-cup-logo.png",
    },
    {
      title: "JavaScript",
      icon: "https://img.icons8.com/color/50/000000/javascript.png",
    },
    {
      title: "Python",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png",
    },
    {
      title: "C++",
      icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png",
    },
    {
      title: "PHP",
      icon: "https://img.icons8.com/offices/50/000000/php-logo.png",
    },
    {
      title: "HTML",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      title: "CSS",
      icon: "https://img.icons8.com/color/48/000000/css3.png",
    },
    {
      title: "Bootstrap",
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      title: "React JS",
      icon: "https://img.icons8.com/color/45/000000/react-native.png",
    },
    {
      title: "Firebase",
      icon: "https://img.icons8.com/color/48/000000/firebase.png",
    },
    {
      title: "MySQL",
      icon: "https://img.icons8.com/color/48/000000/mysql--v1.png",
    },
    {
      title: "Django",
      icon: "https://img.icons8.com/windows/48/000000/django.png",
    },
    {
      title: "AWS",
      icon: "https://img.icons8.com/color/48/000000/amazon-web-services.png",
    },
    {
      title: "Docker",
      icon: "https://img.icons8.com/color/48/000000/docker.png",
    },
    {
      title: "Git/Github",
      icon: "https://img.icons8.com/color/48/000000/git.png",
    },
    {
      title: "Adobe Xd",
      icon: "https://img.icons8.com/color/48/000000/adobe-xd--v1.png",
    },
   
  ];

  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <h1 className="center-text text">
        <i className="fas fa-laptop-code text-icon" />
        Tech I am familiar with
      </h1>
      <div className="skill text">
        <div className="row row-div">
          {skillsArray.map((skillObj, index) => {
            return (
              <div className="col-3 col-div" key={index}>
                <img src={skillObj.icon} />
                <span className="skill_name">{skillObj.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
