import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import MainFeaturedContainer from '../Component/MainFeaturedContainer';

const MainFeatured = () => {
    return (
        <Box
            sx={{
                paddingLeft: { xs: 0, sm: 0, lg: '300px' },
                overflow: 'hidden',
                paddingRight: { xs: 0, sm: 0, lg: '80px' },
                m: 1,
                position: 'relative',
                mt: { xs: 6, sm: 6, lg: 1 }
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(30, 30, 40, 0.88)',
                    position: 'absolute',
                    zIndex: 9,
                    left: 0,
                    width: '100%',
                    pointerEvents: 'none',
                    opacity: 0
                }}
            />
            <Box
                sx={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/image/MainFeaturedBG.jpg)`,
                    overflow: 'hidden',
                    position: 'absolute',
                    width: '100%',
                    backgroundPosition: 'center',
                    height: '400px',
                    backgroundSize: 'cover'
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        height: '100%',
                        width: '100%',
                        backgroundImage: 'linear-gradient(180deg, rgba(30, 30, 40, 0.9) 0%, rgba(30, 30, 40, 0.95) 70%, rgba(30, 30, 40, 0.99) 80%, #1e1e28 100%)'
                    }}
                />
            </Box>
            <MainFeaturedContainer />
        </Box>
    )
}

export default MainFeatured;