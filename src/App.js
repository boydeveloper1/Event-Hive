import "./App.css";
import React, { Fragment, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import MainNavigation from "./shared/Navigation/Main-Navigation/main-navigation.componenrts";
import Home from "./pages/Home/home.components";
import About from "./pages/About/about.components";
import Events from "./pages/Events/events.components";
import Blog from "./pages/Blog/blog.components";
import Dashboard from "./pages/Dashboard/dashboard.components";
import Contact from "./pages/Contact/contact.components";
import UserEvents from "./events/pages/User-Events/user-events.components";
import NewEvent from "./events/pages/New-Event/new-event.components";
import UpdateEvent from "./events/pages/Update-Event/update-event.components";
import Authentication from "./user/pages/Authentication/authentication.components";
import EventDetailPage from "./pages/Event-Details/eventdetails.components";
import Provinces from "./pages/Provinces/provinces.components";
import Categories from "./pages/Categories/categories.components";
import Footer from "./shared/footer/footer.components";
import FooterCopyright from "./shared/footer-copyright/footer-copyright.components";

import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  const { token, login, logout, userId, image } = useAuth();

  let routes;

  if (token) {
    routes = (
      <Fragment>
        <Route index element={<Home />} />
        <Route path="/all-events" element={<Events />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/:loggedID/dashboard" element={<Dashboard />} />
        <Route path="/event/details/:id" element={<EventDetailPage />} />
        <Route path="/event/category/:category" element={<Categories />} />
        <Route path="/event/province/:province" element={<Provinces />} />
        <Route path="/add-new-event" element={<NewEvent />} />
        <Route path="/event/:eventId" element={<UpdateEvent />} />
      </Fragment>
    );
  } else {
    routes = (
      <Fragment>
        <Route index element={<Home />} />
        <Route path="/all-events" element={<Events />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/authentication" element={<Authentication />} />
        <Route path="/event/details/:id" element={<EventDetailPage />} />
        <Route path="/event/category/:category" element={<Categories />} />
        <Route path="/event/province/:province" element={<Provinces />} />
        <Route path="*" element={<Navigate replace to="/authentication" />} />
      </Fragment>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        token: token,
        image: image,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainNavigation />}>
            {routes}
          </Route>
        </Routes>
        <Footer />
        <FooterCopyright />
      </main>
    </AuthContext.Provider>
  );
};

export default App;
