import React from "react";
import DrawerLeft from "../DrawerLeft/index.js";
import Grid from "@mui/material/Grid";
import "./style.css";
import { ThemeContext, themes } from "../Theme/base.js";

function UserPanel() {
  const [darkMode, setDarkMode] = React.useState(true);
  const darkModeButton = () => (
    <ThemeContext.Consumer>
      {({ changeTheme }) => (
        <button
          color="link"
          onClick={() => {
            setDarkMode(!darkMode);
            changeTheme(darkMode ? themes.light : themes.dark);
          }}
        >
          <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          <span className="d-lg-none d-md-block">Switch</span>
        </button>
      )}
    </ThemeContext.Consumer>
  );
  return (
    <Grid container>
      <Grid item xs={11} className="user_panel_heading">
        Daily Tracker
      </Grid>


      <Grid container item container xs={1} className="user_panel">
        <Grid item xs={6}>{darkModeButton()}</Grid>
        <Grid item xs={6}>
          <DrawerLeft />
        </Grid>
      </Grid>


    </Grid>
  );
}

export default UserPanel;
