import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";

const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Menu = React.lazy(() => import("./components/Menu"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <React.Suspense
              fallback={
                <>
                  <h1 style={{ marginTop: "50px" }}>Loading...</h1>
                </>
              }
            >
              <Home />
            </React.Suspense>
          }
        />
        <Route
          path="about"
          element={
            <React.Suspense
              fallback={
                <>
                  <h1 style={{ marginTop: "50px" }}>Loading...</h1>
                </>
              }
            >
              <About />
            </React.Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <React.Suspense
              fallback={
                <>
                  <h1 style={{ marginTop: "50px" }}>Loading...</h1>
                </>
              }
            >
              <Contact />
            </React.Suspense>
          }
        />
        <Route
          path="menu"
          element={
            <React.Suspense
              fallback={
                <>
                  <h1 style={{ marginTop: "50px" }}>Loading...</h1>
                </>
              }
            >
              <Menu />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
