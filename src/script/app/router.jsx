import React from "react";
import App from "./app";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Tester from "@/script/pages/test";

const rutes = [
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/test",
        element: <Tester/>
    }
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
