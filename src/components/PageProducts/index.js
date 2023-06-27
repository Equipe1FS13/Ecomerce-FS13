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
            <Grid item xs={4} className="cards">
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
                <div className="productsText">
                <span className="productsTitle">Resultados para "Tênis" - </span>
                <span>398 produtos</span>
                </div>
                

                <div className="link">
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            renderValue={(selected) => (
                                <span>
                                    <strong className="select">Ordenar por:</strong> {selected || "mais relevantes"}
                                </span>
              
                              )}
                            >    
                            <MenuItem value="mais relevantes">mais relevantes</MenuItem>
                            <MenuItem value="mais vendidos">mais vendidos</MenuItem>
                            <MenuItem value="menor preço">menor preço</MenuItem>
                            <MenuItem value="maior preço">maior preço</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>

            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Check/>
                </Grid>
                    
                <Grid item xs={9}>
                    <Grid container spacing={1} justifyContent="flex-end">
                        {items.map((cada) => (
                            <Cards
                                discount={cada.discount}
                                image={cada.image}
                                title={cada.title}
                                text={cada.text}
                                value={cada.value}
                                newValue={cada.newValue}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}