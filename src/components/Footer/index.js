import React from 'react';
import {Grid} from '@mui/material'; 
import './styles.scss'

export default function Footer() {

    return (
        <div className="featureFooter">
            <Grid container className="cards">
                <Grid item xs={5}>
                    <div className="card">
                        <img src={""} alt=""/>
                        <span className="spanLogo">Digital Store</span> <br/>
                        <div className="divLogo">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore.
                            </div>

                        <div className="iconsFooter">
                            <a href="/">icon</a>
                            <a href="/">icon</a>
                            <a href="/">icon</a>
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
        </div>
    )
}