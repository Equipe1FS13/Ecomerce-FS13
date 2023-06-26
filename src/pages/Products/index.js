import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import FeaturedProducts from "../../components/FeaturedProducts"

export default function Products() {
     const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

    return (
        <div>
            <Navbar/>
            <Menu/>

            <div>Resultados para "Tênis" - 389 produtos</div>

            <div>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        >    
                        <MenuItem value=""><em> <strong>Ordernar por:</strong></em></MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <FeaturedProducts/>

            <Footer/>
        </div>
    )
}