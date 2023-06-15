import React from "react";
import { Grid } from "@mui/material";
import "./styles.scss";


export default function FeaturedCollections() {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:8000/collections')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    const Card = (props) => {
        return (
            <Grid item xs={4}>
                <div className="card">
                    <div className="propsText">

                        <span className="rotulo">
                            {props.discount}
                            {props.discount && "% OFF"}
                        </span>
                        <br />
                        <span className="spanText">{props.text}</span> <br />

                        <button className="Buttonprops">Comprar</button>
                    </div>

                    <div>
                        <img src={props.image} />
                    </div>
                </div>
            </Grid>
        )
    }

    return (
        <div className="featured-collections">
            
            <span className="collectionTitle"> Coleções em Destaque </span>

            <Grid container spacing={2}>
                {items.map(cada => (
                    <Card text={cada.title} discount={cada.discount} image={cada.image} />
                ))}
            </Grid>
        </div>
    )
}