import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface LeftMenuProps {

}

const LeftMenu = (props: LeftMenuProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 290,
                    height: 'calc(100vh - 40px)',
                },
            }}
        >
            <Paper id="left-menu" elevation={3} >
                <Paper
                    id="left-menu-header"
                    elevation={2}
                    sx={{ padding: "30px", height: 235, textAlign: "-webkit-center" }}
                >
                    <Avatar
                        id="left-menu-header-avatar"
                        alt="Louis Li Avatar"
                        src="/image/Avatar.jpg"
                        sx={{ width: 90, height: 90, position: "relative", mb: 1 }}
                    />
                    <Typography
                        id="left-menu-header-name"
                        gutterBottom
                        sx={{
                            mb: 1,
                            color: "#fafafc",
                            transition: "0.4s ease-in-out",
                            fontSize: "18px",
                            fontWeight: 600,
                            fontFamily: '"Poppins", sans-serif'
                        }}>
                        Zhi Xu, Li
                    </Typography>
                    <Typography
                        id="left-menu-header-text"
                        gutterBottom
                        sx={{
                            color: "#7a7a7a",
                            fontSize: "13px",
                            lineHeight: 1.7
                        }}>
                        Front-end Developer
                        <br />
                        UI/UX Designer
                        <br />
                        MIS Manager
                    </Typography>
                </Paper>
                <Paper
                    id="left-menu-scroll-frame"
                    elevation={1}
                    sx={{
                        width: "100%",
                        height: 'calc(100vh - 320px)',
                        overflow: "auto",
                        display: "block"
                    }}
                >
                     
                </Paper>
            </Paper>
        </Box>
    )
}

export default LeftMenu;