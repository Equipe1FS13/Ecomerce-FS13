import React from 'react';
import {Grid} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import './styles.scss'

import logo from './img/logoDigitalCollege.png';
import facebook from './img/facebook.png'

export default function Footer() {

    return (
        <div className="featureFooter">
            <Grid container className="cards">
                <Grid item xs={5}>
                    <div className="card">  
                        <div className="divLogo">
                            <img className="logo" src={logo} alt="/"/>
                            <span className="titleLogo">Digital Store</span> <br/>
                        </div>
                        <div className="textLogo">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore.
                            </div>

                        <div className="iconsFooter">
                            <a href="/"><img src={facebook} alt="/" /></a>
                            <a href="/"><InstagramIcon/></a>
                            <a href="/"><TwitterIcon/></a>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2} className="card">
                    <div className="card">
                        <span className="spanTitle">Informação</span> <br/>
                        <div className="divLink">
                            <a className="link" href="/" >Sobre Drip Store</a> 
                            <a className="link" href="/">Segurança</a>
                            <a className="link" href="/">Wishlist </a>
                            <a className="link" href="/">Blog</a>
                            <a className="link" href="/">Trabalhe conosco</a>
                            <a className="link" href="/">Meus Pedidos</a>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2} className="card">
                    <div className="card">
                        <span className="spanTitle">Categorias</span> <br/>
                        <div className="divLink">
                            <a className="link" href="/">Camisetas</a> 
                            <a className="link" href="/">Calças</a>
                            <a className="link" href="/">Bonés</a>
                            <a className="link" href="/">Headphones</a>
                            <a className="link" href="/">Tênis</a>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={3} className="card">
                    <div className="card">
                        <span className="spanTitle">Contato</span> <br/>
                        <div className="divText">
                        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 
                        60150-161
                        </div>
                        <div className="divNumber">
                        (85) 3051-3411
                        </div>
                    </div>
                </Grid>
            </Grid>
            <div className="divFooter">@ 2022 Digital College</div>
        </div>
    )
}