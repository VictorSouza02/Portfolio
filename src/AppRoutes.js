import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./pages/layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route element={<About />} path="/about" />
                    <Route element={<Projects />} path="/projects" />
                    <Route element={<Contact />} path="/contact" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;