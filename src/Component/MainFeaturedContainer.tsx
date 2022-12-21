import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MainFeaturedHeader from './MainFeaturedHeader';

const MainFeaturedContainer = () => {
    return (
        <Box
            id="scrollbar"
            sx={{
                opacity: 1
            }}
        >
            <Box
                id="post-177"
                sx={{
                    height: 'auto',
                    overflow: 'visible',
                    width: '100%'
                }}
            >
                <Box sx={{ hyphens: 'manual' }}>
                    <Box>
                        <Box>
                            <MainFeaturedHeader />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MainFeaturedContainer;