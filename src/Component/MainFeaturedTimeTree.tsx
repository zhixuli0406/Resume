import Box from '@mui/material/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import SchoolIcon from '@mui/icons-material/School';
import ComputerIcon from '@mui/icons-material/Computer';
import DataObjectIcon from '@mui/icons-material/DataObject';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

interface TimelineItemComponentProps {
    color: "inherit" | "grey" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined,
    time: string,
    title: string,
    text: string,
    icon: React.ReactNode
}

function TimelineItemComponent(props: TimelineItemComponentProps) {
    const { color, time, title, text, icon, ...other } = props;
    return (
        <TimelineItem>
            <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
            >
                {time}
            </TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color={color}>
                    {icon}
                </TimelineDot>
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    {title}
                </Typography>
                <Typography>{text}</Typography>
            </TimelineContent>
        </TimelineItem>
    );
}

const timelineItemList: {
    color: "inherit" | "grey" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined,
    time: string,
    title: string,
    text: string,
    icon: React.ReactNode
}[] = [
        {
            color: "success",
            time: "2014 - 2018",
            text: "National Taitung University",
            title: "CSIE bachelor degree",
            icon: <SchoolIcon />
        },
        {
            color: "primary",
            time: "2019 - 2020",
            text: "PilotGaea Technologies CO.,LTD",
            title: `MIS Engineer / Front-end Developer`,
            icon: <ComputerIcon />
        },
        {
            color: "secondary",
            time: "2020 - 2022",
            text: "PilotGaea Technologies CO.,LTD",
            title: "Full-Stack Developer",
            icon: <DataObjectIcon />
        },
        {
            color: "info",
            time: "2022 - Now",
            text: "PilotGaea Technologies CO.,LTD",
            title: `System Analyst / Full-Stack Developer`,
            icon: <WysiwygIcon />
        }
    ]

const MainFeaturedTimeTree = () => {
    return (
        <Box
            component="section"
            id="time-tree-section"
            sx={{
                paddingTop: { xs: '10px', sm: '30px', lg: '30px' },
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    overflow: 'hidden',
                    padding: { xs: '0 5px', sm: '0 30px', lg: '0 30px' },
                    position: 'relative',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    width: '100%'
                }}
            >
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Experience
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Timeline position="alternate">
                    {
                        timelineItemList.map((item) => (
                            <TimelineItemComponent
                                color={item.color}
                                time={item.time}
                                title={item.title}
                                text={item.text}
                                icon={item.icon}
                            />
                        ))
                    }
                </Timeline>
            </Box>
        </Box>
    )
}

export default MainFeaturedTimeTree;