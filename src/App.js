import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {axiosInstance} from "./config/Config";
import {
  AppLayout,
  AppRoutes,
  OnlineStatusIndicator,
  ConnectionStatusMonitor,
} from "./components";

function App() {
  return (
    <AppLayout>
      <OnlineStatusIndicator />
      <ConnectionStatusMonitor />
      <AppRoutes />
    </AppLayout>
  );
}

export default App;
