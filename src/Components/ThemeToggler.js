import React, { useContext } from "react";
import ContextTheme from "../Context/ContextTheme";
import AppTheme from "../color";

const ThemeToggler = () => {
  const ThemeMode = useContext(ContextTheme)[0];
  const currentTheme = AppTheme[ThemeMode];

  const [Theme, setTheme] = useContext(ContextTheme);

  const handalChange = () => {
    setTheme(Theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className="themeToggler"
      style={{
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`,
      }}
    >
      <div>
        <input
          type="checkbox"
          class="checkbox"
          id="chk"
          onClick={handalChange}
        />
        <label class="label" for="chk">
          <i class="fas fa-sun" />
          <i class="fas fa-moon" />
          <div class="ball"></div>
        </label>
      </div>
    </div>
  );
};

export default ThemeToggler;
