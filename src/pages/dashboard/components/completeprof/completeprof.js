import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './completeprof.css'
import prof from './prof.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';

export default function Completeprof() {
    return (
        <Box style={{height: "100%"}} className='jss87'>
        <Grid container>
            <Grid item xs={12} md={6}>
                <Box style={{height: '100%'}} className='jss88'>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center" alignItems="center" style={{height: '100%'}}>
                                <Grid item xs={12} md={8}>
                                    <Box className='jss89'>
                                        <Box className='jss90'>
                                            <img src={prof} alt='profile'></img>
                                        </Box>
                                        <Box className='jss91'>
                                            <Typography id='jss13' variant='body1'>
                                                Complete Profile
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                <Button variant="contained" style={{background:"rgb(76, 139, 245)", float:"right"}}>Complete</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                        <LinearProgress variant="determinate" value={80} />
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
        </Box>
    )
}
