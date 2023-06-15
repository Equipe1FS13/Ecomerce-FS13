import React from "react";
import { Grid } from "@mui/material";
import './styles.scss'
/* import '../FeaturedCollections/styles.scss' */

export default function FeaturedSpecialOffer() {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:8000/specialOffer')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    const Card = (props) => {
        return (
            <>
                <Grid item xs={5}>
                    <div className="card">
                        <img src={props.image} alt="" />
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <div className="card">
                        <div className="Title">Oferta especial</div> <br />

                        <div className="propsTitle">{props.title}</div> <br />

                        <div className="propsText">{props.text}</div> <br />

                        <button className="buttonOffer">Ver Oferta</button>
                    </div>
                </Grid>
            </>
        )
    }

    return (
        // feature / specialOffer
        <div className="featured-specialoffer" >

            <Grid container spacing={2}>
                {items.map(cada => (
                    <Card image={cada.image} title={cada.title} text={cada.text} />
                ))}
            </Grid>
        </div>
    )
}