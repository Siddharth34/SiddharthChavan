import { useContext } from "react";
import ContextTheme from "../Context/ContextTheme";
import AppTheme from "../color";
import ProjectImg from "../img/ecommerceProject.png";
import ProjectImg2 from "../img/Shop.jpg";
import ProjectImg3 from "../img/awsLive.png";
import ProjectImg4 from "../img/doker+aws.png"

const Projects = () => {
  const ThemeMode = useContext(ContextTheme)[0];
  const currentTheme = AppTheme[ThemeMode];
  return (
    <div
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <h1 className="center-text text">
        <i className="fas fa-file-code text-icon" />
        Projects
      </h1>

      <div className="row row-cols-1 row-cols-md-2 g-4 rowr">
        <div className="col">
          <div className="card text-col card-cl">
            <img src={ProjectImg3} />
            <div className="card-body">
              <h5 className="card-title">AWS - Live (Website  )</h5>
              <p className="card-text">      
              Throughout the project, I demonstrated proficiency in AWS services, including RDS, S3, EC2, and Git, while also showcasing my ability to effectively configure, deploy, and manage infrastructure components.      
              </p>
              <a href="https://github.com/Siddharth34/aws-live" target="_blank">
                <i className="fab fa-github-square git_btn" />
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-col card-cl">
            <img src={ProjectImg4} />
            <div className="card-body">
              <h5 className="card-title">Docker on aws</h5>
              <p className="card-text">            
              To deploy a React.js application on AWS seamlessly, leverage the power of continuous integration (CI) pipelines for streamlined and automated deployment processes, ensuring efficient delivery and maintenance of your application.
              </p>
              <a href="https://github.com/Siddharth34/Docker-react" target="_blank">
                <i className="fab fa-github-square git_btn" />
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-col card-cl">
            <img src={ProjectImg} />
            <div className="card-body">
              <h5 className="card-title">Ecommerce Site</h5>
              <p className="card-text">            
                This is a full-fledged shopping website with Admin Login, CRUD using API
                This is my Final year ongoing academic project The technology used in this project is React JS, Django, and MySQL
              </p>
              <a href="https://github.com/Siddharth34/Ecomm" target="_blank">
                <i className="fab fa-github-square git_btn" />
              </a>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card text-col card-cl">
            <img src={ProjectImg2} />
            <div className="card-body">
              <h5 className="card-title">UniformShop Website</h5>
              <p className="card-text">
                This is a Website for shopkeepers to display design gallery &
                fill customer info . I have created this website in React JS and
                for stored information used google firebase .
              </p>
              <a
                href="https://github.com/Siddharth34/UniformHouse"
                target="_blank"
              >
                <i className="fab fa-github-square git_btn" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
