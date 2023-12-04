import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home, About, Footer, Contact, Portfolio, LandPage, } from "./components/index.js";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path="/" element={<LandPage />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="portfolio" element={<Portfolio />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
