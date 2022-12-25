import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const LeftMenuHeader = () => {
    return (
        <Paper
            id="left-menu-header"
            elevation={2}
            sx={{ padding: "30px", height: 250, textAlign: "-webkit-center" }}
        >
            <Avatar
                id="left-menu-header-avatar"
                alt="Louis Li Avatar"
                src={`${process.env.PUBLIC_URL}/image/Avatar.jpg`}
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
                Full-Stack Developer
                <br />
                UI/UX Designer
                <br />
                MIS Engineer
            </Typography>
        </Paper>
    )
}

export default LeftMenuHeader;