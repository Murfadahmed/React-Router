import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Portfolio,
  Home,
  Footer,
  LandPage,
} from "./components";

function App() {
  return (
    <>
      <ul
        style={{
          width: 100,
          minHeight: "100px",
          display: "flex",
          gap: "10rem",
          listStyle: "none",
          textDecoration: "none",
          color: "red",
        }}
      >
        <li>
          <Link
            style={{
              textDecoration: "none",
              color: "darkolivegreen",
              fontSize: 30,
              backgroundColor: "lightgray",
              padding: 10,
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link  style={{
              textDecoration: "none",
              color: "darkolivegreen",
              fontSize: 30,
              backgroundColor: "lightgray",
              padding: 10,
            }}
            to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link style={{
              textDecoration: "none",
              color: "darkolivegreen",
              fontSize: 30,
              backgroundColor: "lightgray",
              padding: 10,
            }} to="/portfolio">Portfolio</Link>
        </li>
        <li>
          {" "}
          <Link  style={{
              textDecoration: "none",
              color: "darkolivegreen",
              fontSize: 30,
              backgroundColor: "lightgray",
              padding: 10,
            }}
            to="/contact">Contact</Link>
        </li>
        <li>
          {" "}
          <Link style={{
              textDecoration: "none",
              color: "darkolivegreen",
              fontSize: 30,
              backgroundColor: "lightgray",
              padding: 10,
            }} to="/footer">Footer</Link>
        </li>
        <li>
          <Link style={{
              textDecoration: "none",
              color: "darkolivegreen",
              fontSize: 30,
              backgroundColor: "lightgray",
              padding: 10,
            }} to="/landPage">LandPage</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/landPage" element={<LandPage />} />
      </Routes>
    </>
  );
}

export default App;
