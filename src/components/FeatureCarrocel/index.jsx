import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import "./styles.scss"

export default function FeatureCarrocel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const image = 'https://equipe1fs13.github.io/img/tenisCarrosel.png';

    return (
        <div className='boxcarousel'>
            <div className='divcarousel'>
                <div className='divinformation'>
                    <span>Melhores ofertas personalizadas</span>
                    <h1>Queima de stoque Nike</h1>
                    <p>
                        Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                    </p>
                    <button className="Buttonpropscarro">Ver Ofertas</button>
                </div>
                <div className='imagedivbox'>
                    <img src={image} alt=""/>
                </div>
            </div>
            <MobileStepper className='dotscomponets'
                variant="dots"
                steps={6}
                position="static"
                activeStep={activeStep}
                sx={{ maxWidth: 400, flexGrow: 1 }}
                nextButton={
                    <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
                        Next
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        {theme.direction === 'rtl' ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                        Back
                    </Button>
                }
            />
        </div>);
}