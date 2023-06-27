import * as React from 'react';
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import PageProducts from "../../components/PageProducts"

export default function Products() {
     

    return (
        <div>
            <Navbar/>
            <Menu/>

            <PageProducts/>

            <Footer/>
        </div>
    )
}