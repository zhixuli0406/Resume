import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import LeftMenuHeader from '../Component/LeftMenuHeader';
import LeftMenuScrollFrame from '../Component/LeftMenuScrollFrame';


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
                <LeftMenuHeader />
                <LeftMenuScrollFrame />
            </Paper>
        </Box>
    )
}

export default LeftMenu;