import React from 'react';
import './options.css';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import img1 from './img1.svg';
import img2 from './img2.svg';
import img3 from './img3.svg';
import img4 from './img4.svg';
import img5 from './img5.svg';
import img6 from './img6.svg';
import img7 from './img7.svg';

export default function Options() {
    return (
        <Box className='jss436' style={{position:"relative"}}>
            <div style={{position: "relative", overflow: "hidden", width: "100%", height: "auto", minHeight: "0px", maxHeight: "270px"}}>
                <div style={{position: "relative", overflow: "scroll", marginRight: "-14px", marginBottom: "-14px", minHeight: "14px", maxHeight: "calc(284px)"}}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item xs={6} sm={6} md={3} lg={2} style={{textAlign: "center"}}>
                            <Box className='jss443'>
                                <Box className='jss444'>
                                    <img src={img1} alt='Add Tutor' class='jss352'></img>
                                    <Typography variant='body1' className='jss353 jss356'>Add Tutor</Typography>
                                    <Typography variant='body1' className='jss358'></Typography>
                                </Box>
                                <Box className='jss445'>
                                    <img src={img6} alt="lineup" style={{marginLeft: "10%", marginTop: "20px"}} />
                                </Box>
                            </Box>            
                        </Grid>
                        <Grid item xs={6} sm={6} md={3} lg={2} style={{textAlign: "center"}}>
                            <Box className='jss443'>
                                <Box className='jss444'>
                                    <img src={img2} alt='Add Tutor' class='jss352'></img>
                                    <Typography variant='body1' className='jss353 jss356'>Add Tutor</Typography>
                                    <Typography variant='body1' className='jss358'></Typography>
                                </Box>
                                <Box className='jss445'>
                                    <img src={img7} alt="lineup" style={{marginLeft: "10%", marginTop: "20px"}} />
                                </Box>
                            </Box>            
                        </Grid><Grid item xs={6} sm={6} md={3} lg={2} style={{textAlign: "center"}}>
                            <Box className='jss443'>
                                <Box className='jss444'>
                                    <img src={img3} alt='Add Tutor' class='jss352'></img>
                                    <Typography variant='body1' className='jss353 jss356'>Add Tutor</Typography>
                                    <Typography variant='body1' className='jss358'></Typography>
                                </Box>
                                <Box className='jss445'>
                                    <img src={img6} alt="lineup" style={{marginLeft: "10%", marginTop: "20px"}} />
                                </Box>
                            </Box>            
                        </Grid><Grid item xs={6} sm={6} md={3} lg={2} style={{textAlign: "center"}}>
                            <Box className='jss443'>
                                <Box className='jss444'>
                                    <img src={img4} alt='Add Tutor' class='jss352'></img>
                                    <Typography variant='body1' className='jss353 jss356'>Add Tutor</Typography>
                                    <Typography variant='body1' className='jss358'></Typography>
                                </Box>
                                <Box className='jss445'>
                                    <img src={img7} alt="lineup" style={{marginLeft: "10%", marginTop: "20px"}} />
                                </Box>
                            </Box>            
                        </Grid><Grid item xs={6} sm={6} md={3} lg={2} style={{textAlign: "center"}}>
                            <Box className='jss443'>
                                <Box className='jss444'>
                                    <img src={img5} alt='Add Tutor' class='jss352'></img>
                                    <Typography variant='body1' className='jss353 jss356'>Add Tutor</Typography>
                                    <Typography variant='body1' className='jss358'></Typography>
                                </Box>
                                <Box className='jss445'>
                                    <img src={img6} alt="lineup" style={{marginLeft: "10%", marginTop: "20px"}} />
                                </Box>
                            </Box>            
                        </Grid>
                        
                    </Grid>
                </div>
                
            </div>
        </Box>
    )
}
