import React, { useState } from 'react';
import tshirt from "./img/camisa.svg"
import pants from "./img/Vector.svg"
import fones from "./img/fone.svg"
import shoes from "./img/sapato.svg"
import './styles.scss';

export default function FeatureMainCollections() {

    const [iconColors, setIconColors] = useState({
        tshirt: '#8F8F8F',
        pants: '#8F8F8F',
        pants2: '#8F8F8F',
        headphones: '#8F8F8F',
        sneakers: '#8F8F8F',
    });

    const handleMouseEnter = (element) => {
        setIconColors(prevColors => ({
            ...prevColors,
            [element]: '#C92071',
        }));
    };

    const handleMouseLeave = (element) => {
        setIconColors(prevColors => ({
            ...prevColors,
            [element]: '#8F8F8F',
        }));
    };

    return (
        <div className="colectionsMain">
            <h1 className='h1maincolection'>Coleções em destaque</h1>
            <div className='maincolectionsdiv'>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        
                    >
                        <img src={tshirt} alt="tshirt" />
                        
                    </div>
                    <span>Camisetas</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        
                    >
                        <img src={pants} alt="pants" />
                    </div>
                    <span>Calças</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        
                    >
                        <img src={pants} alt="pants" />
                    </div>
                    <span>Bonés</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        
                    >
                        <img src={fones} alt="fones" />
                    </div>
                    <span>Headphone</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        
                    >
                        <img src={shoes} alt="shoes" />
                    </div>
                    <span>Tênis</span>
                </section>
            </div>
        </div>
    )
}
