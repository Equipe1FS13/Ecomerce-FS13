import React from "react";
import { Grid } from "@mui/material";
import EastIcon from '@mui/icons-material/East';
import './styles.scss'

export default function FeaturedProducts() {
    const [items, setItems] = React.useState([]);

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

    const filteredItems = items.slice(0, 8);

    return(
        <div className="featuredProducts">

            <div className="divTitle">
                <span className="productsTitle">Produtos em alta</span>

                <div className="link">
                    <a href="/">Ver todos</a>
                    <EastIcon/>
                </div>
            </div>

            <Grid container spacing={4} className="container">
                {filteredItems.map((cada, index) => (
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
        </div>
    )
}