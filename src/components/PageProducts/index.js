import React from "react";
import { Grid, MenuItem, FormControl, Select } from "@mui/material";
import Check from "../Check";
import './styles.scss'

export default function PageProducts() {
    const [items, setItems] = React.useState([]);
    const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    React.useEffect(() => {
        fetch('http://localhost:8000/products')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const Cards = (props) => {
        return(
            <>
            
            <Grid item xs={3}>
              <div className="card">
                    <span className={`discount ${props.discount ? 'discounted' : ''}`}>
                        {props.discount}
                        {props.discount && "% OFF"}
                    </span>
                    <br/>
                    <div className="img">
                        <img src={props.image} alt="" />
                    </div>
              </div>

              <div className="cardText">
                    <span className="title">{props.title}</span>
                    <br/>
                    <span className="text">{props.text}</span>
                    <br/>
                    <span className="value">{props.value}</span>
                    <span className="newValue">{props.newValue}</span>
              </div>
              
            </Grid>
            </>
        )
    }

    return(
        <div className="featuredProducts">
            <div className="divTitle">
                <span className="productsTitle">Resultados para "Tênis" - 389 produtos</span>

                <div className="link">
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            >    
                            <MenuItem value="">
                                <em><strong>Ordernar por:</strong> mais relevantes</em></MenuItem>
                            <MenuItem value={10}>Mais Vendidos</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <Grid container spacing={1} className="container">
                <Grid item xs={3}>
                    <Check/> 
                </Grid>              
                    {items.map(cada => {
                        return <Cards 
                                discount={cada.discount} 
                                image={cada.image} 
                                title={cada.title} 
                                text={cada.text} 
                                value={cada.value} 
                                newValue={cada.newValue}/>
                        })}
            </Grid>
        </div>
    )
}