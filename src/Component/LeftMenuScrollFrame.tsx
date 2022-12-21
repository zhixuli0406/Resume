import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import { pink } from '@mui/material/colors';

interface SkillsItemProps {
    skillname: string,
    value: number
}

interface KnowledgesItemProps {
    knowledgeText: string
}

const skillsList = [
    {
        name: "React",
        value: 95
    },
    {
        name: "Node.js",
        value: 75
    },
    {
        name: "Python",
        value: 70
    },
    {
        name: "CSS Framework",
        value: 85
    },
    {
        name: "Linux",
        value: 75
    }
]

const knowledgesList = [
    "Material UI, Bootstrap, Primereact",
    "Javascript, Typescript",
    "Css, Sass, Less",
    "MongoDB, PostgreSQL, SQLlite",
    "Docker, Kubernetes",
    "Information Security, ISMS",
    "GIT knowledge"
]

const SkillsItem = (props: LinearProgressProps & SkillsItemProps) => {
    const { skillname, value, ...other } = props;
    return (
        <Box sx={{ m: 2.5, ml: 3, mb: 0, position: "relative" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <span
                    style={{
                        fontSize: "14px",
                        lineHeight: "0.8",
                        color: "#70798C"
                    }}
                >
                    {skillname}
                </span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress variant="determinate" {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" color="text.secondary">{`${Math.round(
                        value,
                    )}%`}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

const KnowledgesItem = (props: KnowledgesItemProps) => {
    const { knowledgeText } = props;
    return (
        <Stack
            direction="row"
            alignItems="center"
            gap={1}
            sx={{ mt: 1.35, mr: 2.5, ml: 3, mb: 0 }}
        >
            <CheckIcon sx={{ color: pink[200] }} />
            <Typography variant="body1" sx={{ fontSize: "12px" }}>{knowledgeText}</Typography>
        </Stack>
    )
}

const LeftMenuScrollFrame = () => {
    return (
        <Paper
            id="left-menu-scroll-frame"
            elevation={1}
            sx={{
                width: "100%",
                height: 'calc(100vh - 340px)',
                overflow: "auto",
                display: "block",
                scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': {
                    width: '0.4em',
                },
                '&::-webkit-scrollbar-track': {
                    background: "#302e2e",
                    borderRadius: "10px"
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#888',
                    borderRadius: "10px"
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    background: '#AAA'
                }
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
            <Divider variant="middle" sx={{ mt: 1 }} />
            {
                skillsList.map((item) => <SkillsItem skillname={item.name} value={item.value} key={item.name} />)
            }
            <Divider variant="middle" sx={{ mt: 2 }} />
            {
                knowledgesList.map((item, index) => <KnowledgesItem knowledgeText={item} key={index} />)
            }
        </Paper>
    )
}

export default LeftMenuScrollFrame;