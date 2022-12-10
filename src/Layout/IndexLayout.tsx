import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import LeftMenu from "./LeftMenu";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const IndexLayout = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container maxWidth="xl" fixed sx={{ p: 1 }}>
                <LeftMenu />
            </Container>
        </ThemeProvider>
    )
}

export default IndexLayout;