import Box from '@mui/material/Box';
import MainFeaturedHeader from './MainFeaturedHeader';
import MainFeaturedSecond from './MainFeaturedSecond';
import MainFeaturedAboutMe from './MainFeaturedAboutMe';
import MainFeaturedTimeTree from './MainFeaturedTimeTree';
import MainFeaturedProject from './MainFeaturedProject';

const MainFeaturedContainer = () => {
    return (
        <Box
            sx={{
                opacity: 1,
                boxSizing: 'border-box'
            }}
        >
            <Box
                sx={{
                    height: 'auto',
                    overflow: 'visible',
                    width: '100%',
                    boxSizing: 'border-box'
                }}
            >
                <Box sx={{ hyphens: 'manual', boxSizing: 'border-box' }}>
                    <MainFeaturedHeader />
                    <MainFeaturedSecond />
                    <MainFeaturedAboutMe />
                    <MainFeaturedTimeTree />
                    <MainFeaturedProject />
                </Box>
            </Box>
        </Box>
    )
}

export default MainFeaturedContainer;