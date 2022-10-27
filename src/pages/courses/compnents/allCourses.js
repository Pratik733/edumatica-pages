import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import img1 from './img1.svg';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AllCourses() {
    let buttons = {backgroundColor: "white", 
        marginRight: "15px",
        color: "#4C8BF5",
        padding: "10px",
        fontSize: "15px",
        fontFamily: "Roboto",
        fontWeight: "500",
        lineHeight: "18px",
        borderRadius: "4px",
        letterSpacing: "1.25px",
        textTransform: "capitalize",
        maxHeight: "37px"

    }

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
                                <Typography  id="jss287" variant='body1'>All Courses</Typography>
                            </item>
                            <item>
                                <Typography  variant='body1'>Create your Courses | Delete Courses</Typography>
                            </item>
                            <Box className='jss288'>
                            <Button variant="contained" className='jss370'style={buttons} >Add Courses</Button>
                            </Box>
                        </Grid>
                    </item>
                </Grid>
                <Grid item xs={4}>
                    <img src={img1} alt="" style={{height:150, float:'right'}} />
                </Grid>

            </Grid>
        </Box>
    )
}
