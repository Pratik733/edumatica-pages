import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Meeting from './components/meeting.js';
import EduTable from '../eduTable/eduTable.js';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormHelperText from '@mui/material/FormHelperText';


export default function MeetingHistor() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Container maxWidth="lg" style={{ padding: "30px 2.5%"}}>
            <Meeting />
            <Box className='jss850'>
                <Grid container>
                    <Grid item xs={5} style={{ paddingTop: "10px", marginBottom: "10px", display: "flex", alignItems: "center"}}>
                        <Typography variant='body1' style={{ fontSize: "20px", fontWeight: "500", color: "rgb(61, 61, 61)" }}>Meeting History</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ marginBottom: "10px" }}>
                        <Box className='jss2610'>
                            <Box className='jss2611'>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Select Batch</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={age}
                                        onChange={handleChange}
                                        label="Age"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>All Tutors</MenuItem>
                                    </Select>
                                    <FormHelperText>View classes of selected batch</FormHelperText>
                                </FormControl>
                            </Box>
                            <Box className='jss2612'>
                                <FormGroup>
                                    <FormControlLabel control={<Switch defaultChecked />} label="Show Recordings Only" />
                                </FormGroup></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "15px" }}>
                        <EduTable />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
