import React from 'react'
import Container from '@mui/material/Container';
import Welcome from './components/welcome/welcome.js';
import Completeprof from './components/completeprof/completeprof.js'
import Options from './components/options/options.js';

export default function dashboard() {
    return (
        <Container maxWidth="lg" style={{padding: "30px 2.5%"}}>
            <Welcome />
            <Completeprof />
            <Options />
        </Container>
    )
}
