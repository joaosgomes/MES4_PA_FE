// Routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {EventEdit,EventForm,EventDetail,EventList } from "../index.js";


const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/MES4_PA_FE" element={<EventList />} />
      <Route path="/MES4_PA_FE/event/:eventId" element={<EventDetail />} />
      <Route path="/MES4_PA_FE/new-event" element={<EventForm />} />
      <Route path="/MES4_PA_FE/edit-event/:eventId" element={<EventEdit />} /> {/* New route for EditEvent */}
    </Routes>
  );
};

export default AppRoutes;