import { useContext } from "react";
import ContextTheme from "../Context/ContextTheme";
import AppTheme from "../color";
const Education = () => {
  const ThemeMode = useContext(ContextTheme)[0];
  const currentTheme = AppTheme[ThemeMode];

  return (
    <div>
      <div
        style={{
          backgroundColor: `${currentTheme.backgroundColor}`,
          color: `${currentTheme.textColor}`,
        }}
      >
        <h1 className="center-text text">
          <i class="fas fa-graduation-cap text-icon" />
          Education & Work Experience
        </h1>

        <section id="resume" className="resume">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>MSc Computer Science</h4>
              <h5>2022 - 2024</h5>
              <ul>
                <li>Ramkrishna More College</li>
                <li>Pune, Maharashtra</li>
                <li> Grade: A</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>BSc Computer Science</h4>
              <h5 className="Rtext">2019 - 2022</h5>
              <ul>
                <li>Sangola Mahavidyalaya </li>
                <li>Sangola, Maharashtra</li>
                <li>Grade: A+</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Assistant System Engineer</h4>
              <h5 className="Rtext">Aug-22 - Present</h5>
              <p>
              <h4>TCS - Tata Consultancy Services</h4>
              </p>
              <ul>
                <li>Strong understanding of AWS services such as CloudWatch, IAM, EC2, EBS,S3 and CloudFormation with
                expertise in managing and monitoring both AWS cloud infrastructure and on-premises systems.</li>
                <li>Managed and monitored AWS and on-premises infrastructure, optimizing system health through
                CloudWatch custom metrics and alerts, resulting in a 20% decrease in downtime.</li>
                <li>Acted as the Single Point of Contact (SPOC) for Business Continuity Planning, implementing measures
                that improved recovery speed and operational resilience.</li>
                <li>Provided swift troubleshooting and support for infrastructure-related issues, reducing downtime and
                ensuring minimal impact on business operations.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Web developer (Internship)</h4>
              <h5 className="Rtext">Mar- 22 to Sep- 22</h5>
              <p> 
              <h4 className="resume-title">KPIT</h4>
              </p>
              <ul>
                <li>Collaborated in developing React.js interfaces and Django-based backend systems, resulting in a 15%
                improvement in user experience.</li>
                <li>Integrated API solutions for seamless data management and authentication, improving application
                reliability and security.</li>
                <li>Participated in code reviews, minimizing bugs by 20% through peer review and debugging practices.</li>
                <li>Mastered version control with Git, enabling seamless team collaboration and efficient code management.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </div>
  );
};

export default Education;
