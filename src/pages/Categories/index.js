import React from 'react';
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";

export default function Categories() {
    const [name, setName] = React.useState('');

    return (
        <div>
            <Navbar/>
            <Menu/>

            <h1>Olá meu nome é: {name}</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />        

            <Footer/>
        </div>
    )
}