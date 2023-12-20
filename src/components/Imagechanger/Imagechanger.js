import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Imagechanger() {
    const [accordionHeight, setAccordionHeight] = React.useState('auto');

    React.useEffect(() => {
        const accordionElement = document.getElementById('accordion-container');
        if (accordionElement) {
            setAccordionHeight(`${accordionElement.clientHeight}px`);
        }
    }, []);
    return (
        <div>
            <div id="accordion-container" className='container bg-gray-100 rounded-lg h-110'>
                <div className='grid grid-cols-2'>
                    <div className='col-span-1 mb-4px'>
                        <Accordion style={{
                            marginLeft: '80px', marginTop: '40px', marginBottom: '5px', border: 'none', boxShadow: 'none', backgroundColor: 'transparent'
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel2a-header"
                                style={{ backgroundColor: 'transparent' }}
                            >
                                <Typography style={{ fontSize: '24px', fontWeight: 'bold' ,marginTop:'5px'}}>
                                    Trending Choices
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion style={{
                            marginLeft: '80px', marginTop: '30px', marginBottom: '5px', border: 'none', boxShadow: 'none', backgroundColor: 'transparent'
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel2a-header"
                                style={{ backgroundColor: 'transparent' }}
                            >
                                <Typography style={{ fontSize: '24px', fontWeight: 'bold' }}>
                                    Trending Choices
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion style={{
                            marginLeft: '80px', marginTop: '30px', marginBottom: '30px', border: 'none', boxShadow: 'none', backgroundColor: 'transparent'
                        }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel2a-header"
                                style={{ backgroundColor: 'transparent' }}
                            >
                                <Typography style={{ fontSize: '24px', fontWeight: 'bold' }}>
                                    Trending Choices
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>



                    </div>
                    <div className='col-span-1'>
                        <div
                            style={{
                                display: 'block',
                                width: 600,
                                height: accordionHeight,
                                paddingLeft: 20,
                            }}
                        >
                            <Carousel>
                                <Carousel.Item interval={2500}>
                                    <img
                                        className="d-block w-70 h-84 mt-12 mb-12 ml-24 mr-12 rounded-xl"
                                        src="https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?q=80&w=1141&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Image One"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={2500}>
                                    <img
                                        className="d-block w-70 h-84 mt-12 mb-12 ml-24 mr-12 rounded-xl"
                                        src="https://images.unsplash.com/photo-1701293773299-423854fabb0a?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image One"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item> 
                                <Carousel.Item interval={2500}>
                                    <img
                                        className="d-block w-70 h-84 mt-12 mb-12 ml-24 mr-12 rounded-xl"
                                        src="https://images.unsplash.com/photo-1701295463149-e8ab9a5acc71?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Image One"
                                    />
                                    <Carousel.Caption>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
