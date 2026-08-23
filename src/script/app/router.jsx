import React from "react";
import App from "./app";
import { HashRouter, Route, Routes } from "react-router-dom";
import Tester from "@/script/pages/test";

const rutes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <App />,
  },
  {
    path: "/test",
    element: <Tester />,
  },
];

export default function RouterJsx() {
  return (
    <HashRouter>
      <Routes>
        {rutes.map((rute) => (
          <Route path={rute.path} element={rute.element}></Route>
        ))}
      </Routes>
    </HashRouter>
  );
}
