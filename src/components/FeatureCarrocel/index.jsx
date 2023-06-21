import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import './styles.scss'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Queima de stoque Nike',
        imgPath:
            'https://equipe1fs13.github.io/img/tenisCarrosel.png',
    },
    {
        label: 'Queima de stoque Nike',
        imgPath:
            'https://equipe1fs13.github.io/img/tenisCarrosel.png',
    },
    {
        label: 'Queima de stoque Nike',
        imgPath:
            'https://equipe1fs13.github.io/img/tenisCarrosel.png',
    },
    {
        label: 'Queima de stoque Nike',
        imgPath:
            'https://equipe1fs13.github.io/img/tenisCarrosel.png',
    },
];

export default function FeatureCarrocel() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;


    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
            <Paper
                square
                elevation={0}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    height: 50,
                    pl: 2,
                    bgcolor: 'background.default',
                }}
            >

            </Paper>
            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <div className='divcarousel'>
                                <section className='sectioninformation'>
                                    <span>
                                        Melhores ofertas personalizadas
                                    </span>
                                    <h1>Queima de <br/>stoque Nike 🔥</h1>
                                    <p>Consequat culpa exercitation mollit nisi excepteur do <br /> do tempor laboris eiusmod irure consectetur.</p>
                                    <button>Ver Ofertas</button>
                                </section>
                                <section>
                                    <img src={step.imgPath} />
                                </section>
                            </div>
                        ) : null}
                        <MobileStepper
                            steps={maxSteps}
                            position="static"                            
                            activeStep={activeStep}
                            nextButton={<div></div>}
                            backButton={<div></div>}
                            style={{backgroundColor:"#F5F5F5", paddingBottom:"50px"}}                            
                        />
                    </div>
                ))}
            </AutoPlaySwipeableViews>
        </Box>
    );
}

