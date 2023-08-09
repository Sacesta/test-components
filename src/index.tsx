import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from 'react-router-dom';
import App from "./App";
import { Login } from "./Login.web";
import LayoutWeb from "./layout/Layout.web";
import { Box } from "@material-ui/core";
import UserProfile from "./Cards/UserProfile";
import UserInfo from "./Cards/UserInfo";
import OrgInfo from "./Cards/OrgInfo";
import Activity from "./Cards/Activity";
import Achievements from "./Cards/Achievements";
import FollowerList from "./Cards/FollowerList";
import RequesManagement from "./Cards/RequestManagement";
import AchievementsUser from "./Cards/Achievements_user";

ReactDOM.render(
  <Box width={"100%"} height={"100%"} display="flex" flexDirection={"column"}>
    <LayoutWeb>
      <AchievementsUser />
      <RequesManagement />
      <FollowerList />
      <UserProfile />
      <UserInfo />
      <OrgInfo />
      <Activity />
      <Achievements />
    </LayoutWeb>
  </Box>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
