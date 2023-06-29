import React, { useState } from 'react';
import { Grid } from "@mui/material";
import star from './img/Stars.svg';
import avaliable from './img/Group 1103.svg';
import arrowleft from './img/Vector 2.svg';
import TenisMain from './img/TenisMain.svg';
import arrowright from './img/Vector 1.svg';
import './styles.scss';

export default function FeatureImageGallery() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [items, setItems] = React.useState([]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

    React.useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

  return (
    <div>
      <div className="divisioncard">
        <div className="containerimg">
          <div className='divimagecarrocel'>
            <button><img src={arrowleft} alt="" className='arrows' /></button>
            <img className='tenismain' src={TenisMain} alt="" />
            <button><img src={arrowright} alt="" className='arrows'/></button>
          </div>
          <Grid container spacing={4}>
            <Grid item xs={2}>
              <div className='grid' >
                <div className='cards' justifyContent="center">
                  <img className="imgcard" src={TenisMain} alt="" />
                </div>
                <div  className='cards' >
                  <img className="imgcard" src={TenisMain} alt="" />
                </div>
                <div  className='cards'>
                  <img className="imgcard" src={TenisMain} alt="" />
                </div>
                <div  className='cards'>
                  <img className="imgcard" src={TenisMain} alt="" />
                </div>
                <div  className='cards'>
                  <img className="imgcard" src={TenisMain} alt="" />
                </div>
              </div>
            </Grid>
            </Grid>
        </div>

        <div className="componentright">
          <h1>Tênis Nike Revolution 6 Next Nature Masculino</h1>

          <p>Casual | Nike | REF:38416711</p>
          <div className="imageAvaliable">
            <img src={star} alt="" />
            <img src={avaliable} alt="" />
          </div>

          <div className="priceDiv">
            <p>
              R$ <span>219</span>,00
            </p>
            <span className='spandecoration'>219</span>
          </div>

          <h3>Descrição do produto</h3>

          <p className='descriptionsparag'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>

          <h3>Tamanho</h3>

          <div className="heightdiv">
            <button
              className={selectedSize === '39' ? 'selected' : ''}
              onClick={() => handleSizeClick('39')}
            >
              39
            </button>
            <button
              className={selectedSize === '40' ? 'selected' : ''}
              onClick={() => handleSizeClick('40')}
            >
              40
            </button>
            <button
              className={selectedSize === '41' ? 'selected' : ''}
              onClick={() => handleSizeClick('41')}
            >
              41
            </button>
            <button
              className={selectedSize === '42' ? 'selected' : ''}
              onClick={() => handleSizeClick('42')}
            >
              42
            </button>
            <button
              className={selectedSize === '43' ? 'selected' : ''}
              onClick={() => handleSizeClick('43')}
            >
              43
            </button>
          </div>

          <h3>Tamanho</h3>

          <div className='divcolors'>
            <div className='Azulclaro'></div>
            <div className='Laranja'></div>
            <div className='Preto'></div>
            <div className='Azulescuro'></div>
          </div>

          <button className='buttoncomponentfinal'>Comprar</button>
        </div>
      </div>
    </div>
  );
}
