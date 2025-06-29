import "../style/style.css";
import React from "react";
import { createRoot } from "react-dom/client";
import RouterJsx from "./app/router";

const content = document.getElementById("content");
const root = createRoot(content);

root.render(RouterJsx());
