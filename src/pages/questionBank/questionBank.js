import React from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import Button from '@mui/material/Button';
import './questionBank.css';


export default function QuestionBank() {
    return (
        <Container maxWidth="lg" style={{ padding: "30px 2.5%" }}>
            <Box className='jss85'>
                <Grid container spacing={2}>
                    <Grid item xs={8} container

                        justifyContent="flex-start"
                        alignItems="center">
                        <item >
                            <Grid container
                                direction="column"
                                justifyContent="center"
                                alignItems="flex-start">
                                <item>
                                    <Typography id="jss287" variant='body1'>All Assignment</Typography>
                                </item>
                                <item>
                                    <Typography variant='body1'>Create Assignments | Assign it to Batches | Evaluate Assignments</Typography>
                                </item>
                            </Grid>
                        </item>
                    </Grid>
                    <Grid item xs={4}>
                        <img src={img2} alt="" style={{ height: 150, float: 'right' }} />
                    </Grid>

                </Grid>
            </Box>
            <Box className='jss850'>
                <Grid container xs={3} style={{maxWidth: "100%"}}>
                    <Grid item xs={12} md={7} >
                        <Typography variant='body1' style={{ marginTop: "15px", marginBottom: "40px", color: "rgb(61, 61, 61)", fontSize: "35px", fontWeight: "500" }}>
                            Create Your Own Question Banks
                        </Typography>
                        <ul style={{ color: "rgb(61, 61, 61)", fontSize: "18px", fontWeightht: "400" }}>
                            <li>
                                You can create as many question as you want to.
                            </li>
                            <li style={{marginTop: "25px"}}>
                                Here you can create all type of question for any standard
                            </li>
                            <li style={{marginTop: "25px"}}>
                                Enjoy limitless chances to edit questions and import while taking test
                            </li>
                            <li style={{marginTop: "25px"}}>
                                An interface where you can add any kind of numerical questions also
                            </li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} md={5} style={{ textAlign: "center" }}>
                        <img src={img1} alt="Cover" style={{height: "350px"}} />
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "15px" }}>
                        <Button variant="outlined" className='jss1697'  tabindex={0} >Import Question</Button>
                        <Button variant="contained" className='jss1697 jss1699' style={{marginLeft: "20px"}} tabindex={0}>Add Assignment</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
