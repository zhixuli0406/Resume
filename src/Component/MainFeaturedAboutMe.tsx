import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const MainFeaturedAboutMe = () => {
    return (
        <Box
            component="section"
            id="about-me-section"
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
                    About Me
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Typography variant="subtitle1" gutterBottom>
                    I am a Software Engineer with over 4 years' experience in software design and development, including ERP platform and geographic data visualization at PilotGaea, and highly innovative and interactive user experiences that combine physical and virtual realities at Phalanity.
                    <br />
                    I am adept in translating business requirements to technical solutions; devising opportunities to enhance process, infrastructure and operational efficiencies; driving continuous improvement; and accelerating staff domain knowledge via documentation and team guidance.
                    <br />
                    My strong experience include full stack web development, systems integration, and games development; with working knowledge of cyber security.
                </Typography>
            </Box>
        </Box>
    )
}

export default MainFeaturedAboutMe; 