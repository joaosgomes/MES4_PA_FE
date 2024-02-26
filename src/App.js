import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axiosInstance from "./config/Config";
import { AppLayout, AppRoutes } from "./components";

function App() {
  React.useEffect(() => {
    // Fetch events when the component mounts
    const getStatus = async () => {
      try {
        const status = await axiosInstance.get("/live");
        console.log(status);
      } catch (error) {
        console.log(error);
      }
    };

    getStatus();
  }, []);

  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
}

export default App;
