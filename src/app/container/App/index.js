/**
 *
 * App
 *
 */

import React from "react";

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';

import Grid from "@mui/material/Grid";
import Mainpage from "../MainPage/index.js";
import "./style.css";
import UserPanel from "../../component/UserPanel/index.js";

export function FirstApp() {
  return (
    <Grid container>
        <Grid item xs={2} className="basic">
          side panel
        </Grid>
        <Grid item xs={10} className="basic">
          <UserPanel />
          <Mainpage />
        </Grid>
    </Grid>
  );
}

// FirstApp.propTypes = {
//   dispatch: PropTypes.func.isRequired,
// };

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch,
//   };
// }

// const withConnect = connect(null, mapDispatchToProps);

export default FirstApp;
