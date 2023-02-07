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
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 700, color: 'yellow' }}>
                    Experience
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 600 }}>
                    I am a Full-stack Developer with approximately 4 years experience in software design and development. I had served as a MIS engineer for one year. Additionally, I also have 3 years of experience in working as a Full-stack Developer and System Designer for PilotGaea.
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 700, color: 'yellow' }}>
                    Certified
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 600 }}>
                    While working as a MIS engineer for PilotGaea, I was responsible for building company-wide website design and web development on my own. I obtained ISO 27001 lead auditor certification, not to mention introducing ISO 27001 ISMS and implementing training programs to the company. Besides, I conducted the internal audit at least 3 times.
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 600 }}>
                    On top of that, I have capablility of designing and building both network layer firewall and application layer firewall. I also have extensive experience in more than 50 systems development and management, including Git, SVN, and Jenkins.
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 700, color: 'yellow' }}>
                    Development experience
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 600 }}>
                    While serving as a Full-stack Developer in PilotGaea company, I had executed more than 30 large customized projects. Furthermore, at least 15 projects was individually developed by myself. I have highly positive cooperation experience with government agencies such as NCHC, Academia Sinica, etc.
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 700, color: 'yellow' }}>
                    Leadership
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 600 }}>
                    In my current position at PilotGaea company, I am a System Designer. Consequently, I inspired a project development team of more than 3 engineers. I was responsible for training at least 5 new engineers. Therefore, All of them can improve their ability to participate in development, solve technical problems and write a high-quality program within 4 weeks based on my professional training.
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 700, color: 'yellow' }}>
                    Education and training lecturer
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 600 }}>
                    I held the post of senior product development training instructors and system designer at the same time. Also, I had token charge of at no less than 15 external product education lecture. Moreover, I have succeeded at writing the program of product development.
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 700, color: 'yellow' }}>
                    Looking for an opportunity
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 600 }}>
                    In conclusion, I have several experience with full stack web development, information security, systems integration and management training program.
                </Typography>
                <Typography gutterBottom sx={{ lineHeight: 1.7, fontWeight: 600 }}>
                    Please feel free to get in touch with me at <a href="mailto:zhixuli0406@gmail.com">zhixuli0406@gmail.com</a>  –  I look forward to hearing from you!
                </Typography>
            </Box>
        </Box>
    )
}

export default MainFeaturedAboutMe; 