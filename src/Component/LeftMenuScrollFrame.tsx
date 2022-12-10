import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const LeftMenuScrollFrame = () => {
    return (
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
            <List sx={{ width: '100%', maxWidth: 360, pl: 1, pr: 1 }}>
                <ListItem
                    sx={{ pt: 0, pb: 0 }}
                    secondaryAction={
                        <Typography variant="body2" sx={{ color: "#7A7A7A" }}>Taiwan</Typography>
                    }
                >
                    <ListItemText primary={`Residence:`} />
                </ListItem>
                <ListItem
                    sx={{ pt: 0, pb: 0 }}
                    secondaryAction={
                        <Typography variant="body2" sx={{ color: "#7A7A7A" }}>Kaohsiung</Typography>
                    }
                >
                    <ListItemText primary={`City:`} />
                </ListItem>
                <ListItem
                    sx={{ pt: 0, pb: 0 }}
                    secondaryAction={
                        <Typography variant="body2" sx={{ color: "#7A7A7A" }}>26</Typography>
                    }
                >
                    <ListItemText primary={`Age:`} />
                </ListItem>
            </List>
            <Divider variant="middle" />
        </Paper>
    )
}

export default LeftMenuScrollFrame;