import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

const MainFeaturedHeader = () => {
    return (
        <Box
            sx={{
                paddingTop: '30px',
                position: 'relative',
                alignSelf: 'initial',
                order: 'initial',
                flexGrow: 'initial',
                flexBasis: 'initial'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    position: 'relative'
                }}
            >
                <Box
                    sx={{
                        overflow: 'hidden',
                        padding: '0 30px',
                        position: 'relative',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        width: '100%'
                    }}
                >
                    <Box
                        sx={{
                            paddingTop: '30px',
                            paddingBottom: 0,
                            display: 'flex',
                            marginRight: '-15px',
                            marginLeft: '-15px'
                        }}
                    >
                        <Box
                            sx={{
                                flex: '0 0 100%',
                                maxWidth: '100%',
                                position: 'relative',
                                width: '100%',
                                paddingLeft: '15px',
                                paddingRight: '15px'
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundImage: `url(${process.env.PUBLIC_URL}/image/MainFeaturedBG.jpg)`,
                                    opacity: 1,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                    boxShadow: '0 3px 8px 0 rgb(15 15 20 / 20%)',
                                    zIndex: 99,
                                    marginBottom: '30px'
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '-30px',
                                        width: '90%',
                                        height: '30px',
                                        marginLeft: '5%',
                                        boxShadow: '0 3px 8px 0 rgb(15 15 20 / 20%)',
                                        borderTopLeftRadius: '3px',
                                        borderTopRightRadius: '3px',
                                        background: 'rgba(30, 30, 40, 0.88)'
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        padding: '60px',
                                        width: '100%',
                                        backgroundImage: 'linear-gradient(90deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%)'
                                    }}
                                >
                                    <Box
                                        id='banner-title'
                                        sx={{
                                            width:'100%'
                                        }}
                                    >
                                        <h1><span>Discover my Amazing<br/>Art Space!</span></h1>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MainFeaturedHeader;