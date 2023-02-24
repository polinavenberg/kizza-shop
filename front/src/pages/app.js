import React from "react";
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";

import Main from "./main";
import Header from "./header";
import Login from "./login";
import Catalogue from "./catalogue_items";
import Item from "./item";
import Footer from "./footer";
import Registration from "./registration";

const Layout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Main/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Registration/>}/>
                    <Route path="catalogue" element={<Catalogue/>}/>
                    <Route path="item" element={<Item/>}/>
                    <Route path="main" element={<Main/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App