import React, { useState} from 'react';
import { Grid } from "@mui/material";
import star from './img/Stars.svg';
import avaliable from './img/Group 1103.svg';
import arrowleft from './img/Vector 2.svg';
import arrowright from './img/Vector 1.svg';
import './styles.scss';

export default function FeatureImageGallery() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [items, setItems] = React.useState([]);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

    React.useEffect(() => {  
        fetch('http://localhost:8000/productDetails')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    
    const CardsMain = (props) => {
      return(
      <>
        <Grid item xs={6}>
          <div className='divimagecarrocel'>
            <button><img src={arrowleft} alt="" className='arrows' /></button>
              <img className='tenismain' src={props.image} alt="" />
            <button><img src={arrowright} alt="" className='arrows'/></button>
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className="componentright">
            <h1>{props.title}</h1>

            <p>{props.details}</p>
            <div className="imageAvaliable">
              <img src={star} alt="" />
              <img src={avaliable} alt="" />
            </div>

            <div className="priceDiv">
              <p>
                R$ <span>{props.value}</span>,00
              </p>
              <span className='spandecoration'>{props.newValue}</span>
            </div>

            <h3>Descrição do produto</h3>

            <p className='descriptionsparag'>
              {props.description}
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
        </Grid>
      </>
      )
    }


    const Card = (props) => {
      return(
          <>
            <Grid item xs={2.4}>
              <div className='grid' >
                <div className='cards' style={{ backgroundColor: props.color }}>
                  <img className="imgcard" src={props.image} alt="" />
                </div>
              </div>
            </Grid>
          </>
        )
    }


  return (
    <div>
      <div className="divisioncard">
        <div>
          <div className="rota"> 
           <strong>Home</strong> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino
          </div>

          <Grid container> 
          
            <CardsMain image={items[0]?.image} title={items[0]?.title} details={items[0]?.details} value={items[0]?.value} newValue={items[0]?.newValue} description={items[0]?.description}/>
         
            <Card  image={items[0]?.image} color={'#E2E3FF'} />
            <Card  image={items[1]?.image} color={'#FFE8BC'}/>
            <Card  image={items[2]?.image} color={'#FFC0BC'}/>
            <Card  image={items[3]?.image} color={'#DEC699'}/>
            <Card  image={items[4]?.image} color={'#E8DFCF'}/>
          </Grid>
        </div>
        
        
      </div>
    </div>
  );
}
