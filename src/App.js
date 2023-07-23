import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/home.components";
import About from "./pages/About/about.components";
import MainNavigation from "./shared/Navigation/Main-Navigation/main-navigation.componenrts";
import Events from "./pages/Events/events.components";
import UserEvents from "./events/pages/User-Event/user-events.components";

const App = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MainNavigation />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/all-events" element={<Events />} />
          <Route path="/:uid/events" element={<UserEvents />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
