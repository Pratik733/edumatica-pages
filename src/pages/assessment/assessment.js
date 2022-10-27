import React from 'react'
import AllAssessment from './components/allAssessment.js'
import Container from '@mui/material/Container';
import EduTable from '../eduTable/eduTable.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


export default function CourseContent() {
    return (
        <Container maxWidth="lg" style={{padding: "30px 2.5%"}}>
            <AllAssessment />
            <Box className='jss850'>
                <Grid container>
                    <Grid item xs={5} style={{ paddingTop: "10px", marginBottom: "10px" }}>
                        <Typography variant='body1' style={{ fontSize: "20px", fontWeight: "500", color: "rgb(61, 61, 61)" }}>Assessment</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ marginBottom: "10px" }}>
                            <Box className='jss2612'>
                                <FormGroup>
                                    <FormControlLabel control={<Switch defaultChecked />} label="Show Archived" />
                                </FormGroup></Box>
                            
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "15px" }}>
                        <EduTable />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
