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
      icon: "https://img.icons8.com/color/49/bash.png",
    },
    {
      title: "VMware",
      icon: "https://img.icons8.com/?size=50&id=38687&format=png&color=000000",
    },
    {
      title: "JSON",
      icon: "https://img.icons8.com/pulsar-color/50/json.png",
    },
    {
      title: "YAML",
      icon: "https://img.icons8.com/?size=49&id=67360&format=png&color=000000",
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
      title: "React JS",
      icon: "https://img.icons8.com/color/45/000000/react-native.png",
    },   
    {
      title: "Django",
      icon: "https://img.icons8.com/nolan/50/django.png",
    }, 
    {
      title: "HTML",
      icon: "https://img.icons8.com/color/48/000000/html-5--v1.png",
    },
    {
      title: "CSS",
      icon: "https://img.icons8.com/color/48.5/000000/css3.png",
    }
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
