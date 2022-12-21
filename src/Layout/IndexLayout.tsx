import React, { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Grow from '@mui/material/Grow';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LeftMenu from "./LeftMenu";
import MainFeatured from "./MainFeatured";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const IndexLayout = () => {
    const [isLoading, setLoading] = useState(false);
    const [ifLeftMenuOpen, setLeftMenuOpen] = useState(false);
    useEffect(() => {
        setLoading(true);
    }, [])
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Grow
                in={isLoading}
                style={{ transformOrigin: '0 0 0' }}
                {...(isLoading ? { timeout: 1500 } : {})}
            >
                <Container fixed sx={{ p: 1 }}>
                    <AppBar
                        position="fixed"
                        sx={{
                            display: { xs: 'flex', sm: 'flex', lg: 'none' }
                        }}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={() => setLeftMenuOpen(true)}
                                sx={{ mr: 2, display: { lg: 'none' } }}
                            >
                                <MoreVertIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <LeftMenu ifLeftMenuOpen={ifLeftMenuOpen} leftMenuOnClose={setLeftMenuOpen} />
                    <MainFeatured />
                </Container>
            </Grow>
        </ThemeProvider>
    )
}

export default IndexLayout;