import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typed from 'react-typed';

const MainFeaturedHeader = () => {
    return (
        <Box
            component="section"
            id="started-section"
            sx={{
                paddingTop: { xs: '0', sm: '30px', lg: '30px' },
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    position: 'relative'
                }}
            >
                <Box
                    sx={{
                        overflow: 'hidden',
                        padding: { xs: '0', sm: '0 30px', lg: '0 30px' },
                        position: 'relative',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        width: '100%'
                    }}
                >
                    <Box
                        sx={{
                            paddingTop: '30px',
                            paddingBottom: 0,
                            display: 'flex',
                            marginRight: '-15px',
                            marginLeft: '-15px'
                        }}
                    >
                        <Box
                            sx={{
                                flex: '0 0 100%',
                                maxWidth: '100%',
                                position: 'relative',
                                width: '100%',
                                paddingLeft: '15px',
                                paddingRight: '15px'
                            }}
                        >
                            <Box
                                sx={{
                                    backgroundImage: `url(${process.env.PUBLIC_URL}/image/MainFeaturedBG.webp)`,
                                    opacity: 1,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    position: 'relative',
                                    boxShadow: '0 3px 8px 0 rgb(15 15 20 / 20%)',
                                    zIndex: 99,
                                    marginBottom: '30px'
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '-15px',
                                        width: '95%',
                                        height: '15px',
                                        marginLeft: '4%',
                                        boxShadow: '0 3px 8px 0 rgb(15 15 20 / 20%)',
                                        borderTopLeftRadius: '3px',
                                        borderTopRightRadius: '3px',
                                        background: 'rgba(30, 30, 40, 0.6)'
                                    }}
                                />
                                <Box
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        padding: { xs: '50px', sm: '50px', lg: '60px' },
                                        width: '100%',
                                        backgroundImage: 'linear-gradient(90deg, rgba(45, 45, 58, 0.9) 15%, rgba(45, 45, 58, 0.7) 50%, rgba(43, 43, 53, 0.7) 100%)'
                                    }}
                                >
                                    <Box
                                        id='banner-title'
                                        sx={{
                                            width: '100%'
                                        }}
                                    >
                                        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', textAlign: { xs: 'center', sm: 'center', lg: 'left' } }}>
                                            Welcome to my
                                        </Typography>
                                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', textAlign: { xs: 'center', sm: 'center', lg: 'left' } }}>
                                            Secret Code Space!
                                        </Typography>
                                        <Box
                                            sx={{
                                                boxSizing: 'border-box',
                                                fontFamily: '"Courier Prime", monospace',
                                                color: '#fafafc',
                                                mt: 1,
                                                mb: 3,
                                                fontSize: '16px',
                                                textAlign: { xs: 'center', sm: 'center', lg: 'left' }
                                            }}
                                        >
                                            {"<"}
                                            <i style={{ color: '#FFC107' }}>code</i>
                                            {"> What I can do is "}
                                            <Typed
                                                strings={['establish Website UI/UX', 'create RESTful API', 'perform system maintenance', 'set up ISMS']}
                                                typeSpeed={70}
                                                backSpeed={50}
                                                backDelay={800}
                                                loop
                                            />
                                            {"</"}
                                            <i style={{ color: '#FFC107' }}>code</i>
                                            {">"}
                                        </Box>
                                        <Box sx={{ textAlign: { xs: 'center', sm: 'left', lg: 'left' } }}>
                                            <Button
                                                variant="outlined"
                                                onClick={e => {
                                                    let hero = document.getElementById("contact-section");
                                                    e.preventDefault();  // Stop Page Reloading
                                                    hero && hero.scrollIntoView({ behavior: "smooth", block: "start" });
                                                }}
                                            >
                                                Get in touch
                                            </Button>
                                        </Box>
                                    </Box>
                                    <Box
                                        component="img"
                                        sx={{
                                            width: { xs: 0, sm: 0, lg: '320px' },
                                            height: { xs: 0, sm: 0, lg: '320px' },
                                            position: 'absolute',
                                            right: 0,
                                            bottom: 0,
                                            maxWidth: '100%',
                                            border: 'none',
                                            borderRadius: 0,
                                            boxShadow: 'none',
                                            verticalAlign: 'middle'
                                        }}
                                        alt="Photo"
                                        src={process.env.PUBLIC_URL + "/image/MainFeaturedHeader.webp"}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default MainFeaturedHeader;