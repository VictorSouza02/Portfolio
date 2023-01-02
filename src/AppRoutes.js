import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" exact />
                <Route element={<About />} path="/about"/>
                <Route element={<Projects />} path="/projects"/>
                <Route element={<Contact />} path="/contact"/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;