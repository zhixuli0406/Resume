import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import LeftMenuHeader from '../Component/LeftMenuHeader';
import LeftMenuScrollFrame from '../Component/LeftMenuScrollFrame';
import LeftMenuFooter from '../Component/LeftMenuFooter';


interface LeftMenuProps {
    ifLeftMenuOpen: boolean,
    leftMenuOnClose(isClose: boolean): void,
    window?: () => Window;
}

const LeftMenuDrawer = (
    <Paper id="left-menu" elevation={3} >
        <LeftMenuHeader />
        <LeftMenuScrollFrame />
        <LeftMenuFooter />
    </Paper>
)

const LeftMenu = (props: LeftMenuProps) => {
    const { ifLeftMenuOpen, leftMenuOnClose, window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <Box
            sx={{
                m: 1,
                display: 'flex',
                position: 'fixed',
                flexWrap: 'wrap',
                height: 'calc(100vh - 40px)',
                width: { lg: 300 },
                flexShrink: { lg: 0 },
                zIndex: 999
            }}
        >
            <Box
                sx={{
                    display: { xs: 'none', sm: 'none',lg: 'flex' },
                    '& > :not(style)': { boxSizing: 'border-box', width: 300 },
                }}
            >
                {LeftMenuDrawer}
            </Box>

            <Drawer
                container={container}
                variant="temporary"
                open={ifLeftMenuOpen}
                onClose={() => leftMenuOnClose(false)}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'flex',sm: 'flex', lg: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 300 },
                }}
            >
                {LeftMenuDrawer}
            </Drawer>
        </Box >
    )
}

export default LeftMenu;