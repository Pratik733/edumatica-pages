import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Container from '@mui/material/Container';
import ClassSchedule from './components/classSchedule.js';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './schedule.css';
import ScheduleTable from './components/scheduleTable.js';

export default function Schedule() {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <Container maxWidth="lg" style={{ padding: "30px 2.5%" }}>
            <ClassSchedule />
            <Box className='jss850'>
                <Grid container>
                    <Grid item xs={5} style={{ paddingTop: "10px", marginBottom: "10px" }}>
                        <Typography variant='body1' style={{ fontSize: "20px", fontWeight: "500", color: "rgb(61, 61, 61)" }}>Schedule</Typography>
                    </Grid>
                    <Grid item xs={6} style={{ marginBottom: "10px" }}>
                        <Box className='jss2610'>
                            <Box className='jss2611'>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Tutor</InputLabel>
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
                                </FormControl>
                            </Box>
                            <Box className='jss2612'><FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-standard-label">Subject</InputLabel>
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
                                    <MenuItem value={10}>All Subjects</MenuItem>
                                    <MenuItem value={20}>Science</MenuItem>
                                    <MenuItem value={30}>Mathematics</MenuItem>
                                    <MenuItem value={30}>English</MenuItem>
                                </Select>
                            </FormControl></Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "15px" }}>
                        <ScheduleTable />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}
