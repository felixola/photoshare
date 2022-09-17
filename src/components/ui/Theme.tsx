import React from 'react';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary:{
            main: '#1F4690', 
           
        },
        secondary: {
            light: '#FFFFFF',   
            main: '#FFFFFF',
        },
    },
    typography: {
        fontFamily: [
            'Inter',
             'sans-serif',
        ].join(','),

        h3: {
            color: '#00000'
        },
    },
    breakpoints:{
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
})

export default theme;