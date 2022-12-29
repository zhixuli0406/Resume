import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

const projectList = [
    {
        name: "Pilotgaea Official Website",
        url: "https://www.pilotgaea.com.tw/",
        image: process.env.PUBLIC_URL + "/image/PilotgaeaOfficialWebsite.PNG"
    },
    {
        name: "PilotGaea Demo",
        url: "https://demo.pilotgaea.com.tw/",
        image: process.env.PUBLIC_URL + "/image/PilotgaeaDemo.PNG"
    },
    {
        name: "Pilotgaea Sample",
        url: "https://sample.pilotgaea.com.tw/demo/",
        image: process.env.PUBLIC_URL + "/image/PilotgaeaSample.PNG"
    },
    {
        name: "Story Map",
        url: "https://demo-3dgdp.colife.org.tw/storymap/",
        image: process.env.PUBLIC_URL + "/image/StoryMap.PNG"
    },
    {
        name: "JGIS",
        url: "https://demo.pilotgaea.com.tw/jgis/",
        image: process.env.PUBLIC_URL + "/image/JGIS.PNG"
    },
    {
        name: "Kaohsiung Pipeline Demo",
        url: "http://demo.pilotgaea.com.tw/KaohsiungPipeline/",
        image: process.env.PUBLIC_URL + "/image/KaohsiungPipeline.PNG"
    },
    {
        name: "Programming Guide",
        url: "https://sample.pilotgaea.com.tw/demo/ProgrammingGuide/",
        image: process.env.PUBLIC_URL + "/image/ProgrammingGuide.PNG"
    },
]

const MainFeaturedProject = () => {
    return (
        <Box
            component="section"
            id="project-section"
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
                    Customer Project
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    spaceBetween={10}
                    centeredSlides={true}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
                    className="projectSwiper"
                    style={{ width: '100%', height: '100%' }}
                >
                    {
                        projectList.map((item) => (
                            <SwiperSlide>
                                <Card
                                    onClick={() => window.open(item.url)}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant='h6' component="div" align='center'>
                                                {item.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </Box>
    )
}

export default MainFeaturedProject;