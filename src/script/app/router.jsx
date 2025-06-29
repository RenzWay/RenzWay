import React from "react";
import App from "./app";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rutes = [
  {
    path: "/",
    element: <App />,
  },
];

export default function RouterJsx() {
  return (
    <BrowserRouter>
      <Routes>
        {rutes.map((rute) => (
          <Route path={rute.path} element={rute.element}></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
}
