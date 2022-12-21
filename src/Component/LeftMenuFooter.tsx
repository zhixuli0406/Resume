import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const LeftMenuFooter = () => {
    return (
        <Box sx={{ textAlign: "center", pt: 1 }}>
            <IconButton
                color="inherit"
                size="small"
                sx={{ m: 0.5 }}
                onClick={() => window.open("https://www.linkedin.com/in/ZhiXuLi0406/", "_blank")}
            >
                <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
                color="inherit"
                size="small"
                sx={{ m: 0.5 }}
                onClick={() => window.open("https://github.com/zhixuli0406", "_blank")}
            >
                <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
                color="inherit"
                size="small"
                sx={{ m: 0.5 }}
                onClick={() => window.open("https://www.instagram.com/zhixu_li", "_blank")}
            >
                <InstagramIcon fontSize="small" />
            </IconButton>
        </Box>
    )
}

export default LeftMenuFooter;