import React from 'react'
import BatchManagement from './components/batchManagement.js';
import Container from '@mui/material/Container';
import EduTable from '../eduTable/eduTable.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function Batches() {
    return (
        <Container maxWidth="lg" style={{padding: "30px 2.5%"}}>
            <BatchManagement />
            <Box className='jss850'>
                <Grid container>
                    <Grid item xs={5} style={{ paddingTop: "10px", marginBottom: "10px" }}>
                        <Typography variant='body1' style={{ fontSize: "20px", fontWeight: "500", color: "rgb(61, 61, 61)" }}>Batches</Typography>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "15px" }}>
                        <EduTable />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
