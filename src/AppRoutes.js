import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route element={<About />} path="/about" />
                    <Route element={<Projects />} path="/projects" />
                    <Route element={<Contact />} path="/contact" />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;