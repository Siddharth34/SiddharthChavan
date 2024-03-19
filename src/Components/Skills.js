import { useContext } from "react";
import ContextTheme from "../Context/ContextTheme";
import AppTheme from "../color";
const Skills = () => {
  const ThemeMode = useContext(ContextTheme)[0];
  const currentTheme = AppTheme[ThemeMode];

  const skillsArray = [
    {
      title: "AWS",
      icon: "https://img.icons8.com/color/50/000000/amazon-web-services.png",
    },
    {
      title: "Docker",
      icon: "https://img.icons8.com/color/50/000000/docker.png",
    },
    {
      title: "Git/Github",
      icon: "https://img.icons8.com/color/50/000000/git.png",
    },
    {
      title: "kubernetes",
      icon: "https://img.icons8.com/color/50/kubernetes.png",
    },  
    {
      title: "Bash scripting",
      icon: "https://img.icons8.com/color/50/bash.png",
    },
    {
      title: "Cisco-CUCM",
      icon: "https://img.icons8.com/plasticine/54/cisco-webex-meetings.png",
    },
    {
      title: "JSON/YAML",
      icon: "https://img.icons8.com/pulsar-color/50/json.png",
    },
    {
      title: "Jenkins",
      icon: "https://img.icons8.com/color/52/jenkins.png",
    },
    {
      title: "Python",
      icon: "https://img.icons8.com/color/48/000000/python--v1.png",
    },
    {
      title: "JavaScript",
      icon: "https://img.icons8.com/color/50/000000/javascript.png",
    },
    {
      title: "MySQL",
      icon: "https://img.icons8.com/color/48/000000/mysql--v1.png",
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
      title: "React JS",
      icon: "https://img.icons8.com/color/45/000000/react-native.png",
    },
    {
      title: "PHP",
      icon: "https://img.icons8.com/offices/52/000000/php-logo.png",
    },   
    {
      title: "Django",
      icon: "https://img.icons8.com/nolan/50/django.png",
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
