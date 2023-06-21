import React, { useState } from 'react';
import Icon from '@mdi/react';
import { mdiTshirtCrewOutline, mdiShoeSneaker, mdiHeadphones, mdiSunglasses, mdiDumbbell } from '@mdi/js';
import './styles.scss';

export default function FeatureMainCollections() {

    const [iconColors, setIconColors] = useState({
        tshirt: '#8F8F8F',
        dumbbell: '#8F8F8F',
        sunglasses: '#8F8F8F',
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
        <div>
            <h1 className='h1maincolection'>Coleções em destaque</h1>
            <div className='maincolectionsdiv'>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        onMouseEnter={() => handleMouseEnter('tshirt')}
                        onMouseLeave={() => handleMouseLeave('tshirt')}
                    >
                        <Icon path={mdiTshirtCrewOutline} size={4} color={iconColors.tshirt} />
                    </div>
                    <span>Camisetas</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        onMouseEnter={() => handleMouseEnter('dumbbell')}
                        onMouseLeave={() => handleMouseLeave('dumbbell')}
                    >
                        <Icon path={mdiDumbbell} size={4} color={iconColors.dumbbell} />
                    </div>
                    <span>Treino</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        onMouseEnter={() => handleMouseEnter('sunglasses')}
                        onMouseLeave={() => handleMouseLeave('sunglasses')}
                    >
                        <Icon path={mdiSunglasses} size={4} color={iconColors.sunglasses} />
                    </div>
                    <span>Oculos</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        onMouseEnter={() => handleMouseEnter('headphones')}
                        onMouseLeave={() => handleMouseLeave('headphones')}
                    >
                        <Icon path={mdiHeadphones} size={4} color={iconColors.headphones} />
                    </div>
                    <span>Headphone</span>
                </section>
                <section className='sectioncolection'>
                    <div
                        className='divcontroler'
                        onMouseEnter={() => handleMouseEnter('sneakers')}
                        onMouseLeave={() => handleMouseLeave('sneakers')}
                    >
                        <Icon path={mdiShoeSneaker} size={4} color={iconColors.sneakers} />
                    </div>
                    <span>Tenis</span>
                </section>
            </div>
        </div>
    )
}
