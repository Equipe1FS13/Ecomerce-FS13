import React from "react";
import {Checkbox, FormGroup, FormControlLabel, Radio, RadioGroup} from '@mui/material';
import './styles.scss'

export default function CheckBox() {
    const [checkbox, setCheckbox] = React.useState("");
    const [radio, setRadio] = React.useState("");

    const selected = (event) => {
        setCheckbox(event.target.value);
    }

    const  select = (event) => {
        setRadio(event.target.value);
    };

    return(
            <div className="checkbox">
                <div className="title">
                    <span >Filtrar por</span>
                </div>
                <hr/>
                <span className="titleSelect">Marka</span>
                    <div className="options">
                        <FormGroup value={checkbox} onChange={selected}>
                        <FormControlLabel control={<Checkbox />} label="Adiddas" />
                        <FormControlLabel control={<Checkbox />} label="Calenciaga" />
                        <FormControlLabel control={<Checkbox />} label="K-Swiss" />
                        <FormControlLabel control={<Checkbox />} label="Nike" />
                        <FormControlLabel control={<Checkbox />} label="Puma" />
                        </FormGroup>
                    </div>

                    <span className="titleSelect">Categoria</span>
                    <div className="options">
                        <FormGroup value={checkbox} onChange={selected}>
                        <FormControlLabel control={<Checkbox />} label="Esporte e lazer" />
                        <FormControlLabel control={<Checkbox />} label="Casual" />
                        <FormControlLabel control={<Checkbox />} label="Utilitário" />
                        <FormControlLabel control={<Checkbox />} label="Corrida" />
                        </FormGroup>
                    </div>

                    <span className="titleSelect">Gênero</span>
                    <div className="options">
                        <FormGroup value={checkbox} onChange={selected}>
                        <FormControlLabel control={<Checkbox />} label="Masculino" />
                        <FormControlLabel control={<Checkbox />} label="Feminino" />
                        <FormControlLabel control={<Checkbox />} label="Unisex" />
                        </FormGroup>
                    </div>

                    <span className="titleSelect">Estado</span>
                    <div className="options">
                        <FormGroup>
                        <RadioGroup value={radio} onChange={select}>
                        <FormControlLabel control={<Radio />} value="novo" label="Novo" />
                        <FormControlLabel control={<Radio />} value="usado" label="Usado" />
                        </RadioGroup>
                        </FormGroup>
                    </div>
            </div>
    )
}
