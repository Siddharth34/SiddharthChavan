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
              <h4>MSC - Computer Science</h4>
              <h5>2022 - Present</h5>
              <ul>
                <li>Ramkrishna More College Akurdi</li>
                <li>Pune, Maharashtra</li>
                <li> 1st year Graduated with : 62 %</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>BSC - Computer Science</h4>
              <h5 className="Rtext">2019 - 2022</h5>
              <ul>
                <li>Sangola Mahavidyalaya Sangola</li>
                <li>Sangola, Maharashtra</li>
                <li>Graduated with : 82.35 %</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>System Administrator</h4>
              <h5 className="Rtext">Aug-22 - Present</h5>
              <p>
              <h4>TCS - Tata Consultancy Services</h4>
              </p>
              <ul>
                <li>Strong understanding of AWS services, including Cloud Watch, IAM, EC2 instances, EBS, and S3.</li>
                <li>Expertise in managing and monitoring both AWS cloud infrastructure and on-premises systems.</li>
                <li>Designated as an SPOC for Business Continuity Planning (BCP).</li>
                <li>Worked closely with teams across the organization to design and implement scalable solutions on AWS. Made sure our systems aligned with our business goals.</li>
               <li> Regularly checked the health and performance of our systems using AWS CloudWatch. Created custom alerts and metrics to ensure everything ran smoothly.</li>
               <li>Assistance and troubleshooting for any issues related to our AWS setup, ensuring problems were resolved quickly to minimize disruptions.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Web developer (Traineeship)</h4>
              <h5 className="Rtext">Mar- 22 to Sep- 22</h5>
              <p> 
              <h4 className="resume-title">KPIT</h4>
              </p>
              <ul>
                <li>Collaborated with the development team to design and implement user-friendly interfaces using React.js, ensuring seamless navigation and optimal user experience.</li>
                <li>Utilized Django framework to build robust backend systems, handling data management, authentication, and API integrations effectively.</li>
                <li>Participated in code reviews and debugging sessions to identify and resolve issues, ensuring the delivery of high-quality, error-free code.</li>
                <li>Mastered version control with Git, facilitating seamless collaboration and efficient code management across the team.</li>
                <li>My time at KPIT allowed me to strengthen my expertise in React.js and Django, while also providing me with valuable insights into the development lifecycle of web applications.</li>
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
