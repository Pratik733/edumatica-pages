import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img1 from './img1.svg';
import './welcome.css';
import Typography from '@mui/material/Typography';


export default function Welcome() {
    return (
        <Box  className='jss85'>
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
                                <Typography color='white' variant='body1'>Hello,</Typography>
                            </item>
                            <item>
                                <Typography id='jss6' variant='body1'>Welcome, User !</Typography>
                            </item>
                            <item>
                                <Typography variant='body1'>Please Complete the following Steps</Typography>
                            </item>
                        </Grid>
                    </item>
                </Grid>
                <Grid item xs={4}>
                    <img src={img1} alt="" style={{height:150, float:'right'}} />
                </Grid>

            </Grid>
        </Box>
    );
}