import React, { useState } from 'react';
import { ReactComponent as Tshirticon} from "./img/camisa.svg"
import { ReactComponent as Pantsicon} from "./img/Vector.svg"
import { ReactComponent as Pantsicon2} from "./img/Vector.svg"
import { ReactComponent as Phoneicon} from "./img/fone.svg"
import { ReactComponent as Shoesicon} from "./img/sapato.svg"
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
                        onMouseEnter={() => handleMouseEnter('tshirt')}
                        onMouseLeave={() => handleMouseLeave('tshirt')}
                    >
                        <Tshirticon  fill={iconColors.tshirt} />
                        
                    </div>
                    <span>Camisetas</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        onMouseEnter={() => handleMouseEnter('pants')}
                        onMouseLeave={() => handleMouseLeave('pants')}
                    >
                        <Pantsicon stroke={iconColors.pants} />
                    </div>
                    <span>Calças</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        onMouseEnter={() => handleMouseEnter('pants2')}
                        onMouseLeave={() => handleMouseLeave('pants2')}
                    >
                        <Pantsicon2 stroke={iconColors.pants2} />
                    </div>
                    <span>Bonés</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        onMouseEnter={() => handleMouseEnter('headphones')}
                        onMouseLeave={() => handleMouseLeave('headphones')}
                    >
                        <Phoneicon stroke={iconColors.headphones} />
                    </div>
                    <span>Headphone</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        onMouseEnter={() => handleMouseEnter('sneakers')}
                        onMouseLeave={() => handleMouseLeave('sneakers')}
                    >
                        <Shoesicon stroke={iconColors.sneakers} />
                    </div>
                    <span>Tênis</span>
                </section>
            </div>
        </div>
    )
}
