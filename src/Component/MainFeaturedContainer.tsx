import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MainFeaturedHeader from './MainFeaturedHeader';

const MainFeaturedContainer = () => {
    return (
        <Box
            sx={{
                opacity: 1,
                boxSizing: 'border-box'
            }}
        >
            <Box
                sx={{
                    height: 'auto',
                    overflow: 'visible',
                    width: '100%',
                    boxSizing: 'border-box'
                }}
            >
                <Box sx={{ hyphens: 'manual', boxSizing: 'border-box' }}>
                    <MainFeaturedHeader />
                </Box>
            </Box>
        </Box>
    )
}

export default MainFeaturedContainer;