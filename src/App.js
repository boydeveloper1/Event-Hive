import "./App.css";
import React, { Fragment, useEffect, lazy, Suspense } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { AuthContext } from "./shared/context/auth-context";
import { useAuth } from "./shared/hooks/auth-hook";
import LoadingSpinner from "./shared/Loading-Spinner/loading-spinner.components";

// lazy loading

const MainNavigation = lazy(() =>
  import("./shared/Navigation/Main-Navigation/main-navigation.componenrts")
);

const Home = lazy(() => import("./pages/Home/home.components"));
const About = lazy(() => import("./pages/About/about.components"));
const Events = lazy(() => import("./pages/Events/events.components"));
const Blog = lazy(() => import("./pages/Blog/blog.components"));
const Dashboard = lazy(() => import("./pages/Dashboard/dashboard.components"));
const Contact = lazy(() => import("./pages/Contact/contact.components"));
const NewEvent = lazy(() =>
  import("./events/pages/New-Event/new-event.components")
);
const UpdateEvent = lazy(() =>
  import("./events/pages/Update-Event/update-event.components")
);
const Authentication = lazy(() =>
  import("./user/pages/Authentication/authentication.components")
);
const EventDetailPage = lazy(() =>
  import("./pages/Event-Details/eventdetails.components")
);
const Provinces = lazy(() => import("./pages/Provinces/provinces.components"));
const Categories = lazy(() =>
  import("./pages/Categories/categories.components")
);
const Footer = lazy(() => import("./shared/footer/footer.components"));
const FooterCopyright = lazy(() =>
  import("./shared/footer-copyright/footer-copyright.components")
);
const Checkout = lazy(() => import("./pages/Checkout/checkout.components"));
const ErrorPage = lazy(() => import("./pages/404/404.components"));

// takes user to top of page after navigation
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/add-new-event" element={<NewEvent />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/:loggedID/dashboard" element={<Dashboard />} />
        <Route path="/event/:eventId" element={<UpdateEvent />} />
        <Route path="/event/details/:id" element={<EventDetailPage />} />
        <Route path="/event/category/:category" element={<Categories />} />
        <Route path="/event/province/:province" element={<Provinces />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
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
    <Suspense
      fallback={
        <div>
          <LoadingSpinner />
        </div>
      }
    >
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
    </Suspense>
  );
};

export default App;
