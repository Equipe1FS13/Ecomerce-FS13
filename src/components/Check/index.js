import React from "react";
import {Checkbox, FormGroup, FormControlLabel} from '@mui/material';
import './styles.scss'

export default function Check() {
    return(
            <div className="checkbox">
                <span>Marka</span>
                    <div>
                        <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Adiddas" />
                        <FormControlLabel control={<Checkbox />} label="Calenciaga" />
                        <FormControlLabel control={<Checkbox />} label="K-Swiss" />
                        <FormControlLabel control={<Checkbox />} label="Nike" />
                        <FormControlLabel control={<Checkbox />} label="Puma" />
                        </FormGroup>
                    </div>

                    <span>Categoria</span>
                    <div>
                        <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Esporte e lazer" />
                        <FormControlLabel control={<Checkbox />} label="Casual" />
                        <FormControlLabel control={<Checkbox />} label="Utilitário" />
                        <FormControlLabel control={<Checkbox />} label="Corrida" />
                        </FormGroup>
                    </div>

                    <span>Gênero</span>
                    <div>
                        <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Masculino" />
                        <FormControlLabel control={<Checkbox />} label="Feminino" />
                        <FormControlLabel control={<Checkbox />} label="Unisex" />
                        </FormGroup>
                    </div>

                    <span>Estado</span>
                    <div>
                        <FormGroup>
                        <FormControlLabel control={<Checkbox />} label="Novo" />
                        <FormControlLabel control={<Checkbox />} label="Usado" />
                        </FormGroup>
                    </div>
            </div>
    )
}
