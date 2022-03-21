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
          Education
        </h1>

        <div class="d-flex align-items-center">
          <ul class="eduTable list-group p-3 mx-auto">
            <li class="list-group-item">
              <div class="small">2017 - 2019</div>
              <div class="large font-weight-bold mt-2">SSC & HSC</div>
              <div class="font-weight-light mt-1">
                {" "}
                Sangola Vidyamandir Sangola
              </div>
              <div class="small">Sangola, Maharashtra</div>
            </li>
            <li class="list-group-item">
              <div class="small">2019 - Present</div>
              <div class="large font-weight-bold mt-2"> BSC (ECS)</div>
              <div class="font-weight-light mt-1">
                Sangola Mahavidyalaya Sangola
              </div>
              <div class="small">Sangola, Maharashtra</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
