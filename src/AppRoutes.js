import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

import LayoutPT from "./Portuguese layout/layout/layoutPT";
import Inicio from "./Portuguese layout/pages/inicio";
import Sobre from "./Portuguese layout/pages/sobre";
import Projetos from "./Portuguese layout/pages/Projetos";

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

                <Route path='/pt' element={<LayoutPT />}>
                    <Route index element={<Inicio />} />
                    <Route element={<Sobre />} path="sobre" />
                    <Route element={<Projetos />} path="projetos" />
                    <Route element={<Contact />} path="contact" />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;