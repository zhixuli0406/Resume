import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper";

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

interface MainFeaturedProjectCardProps {
    name: string,
    url: string,
    image: string
}

const projectList = [
    {
        name: "PilotGaea Demo",
        url: "https://demo.pilotgaea.com.tw/",
        image: ""
    },
    {
        name: "Pilotgaea Sample",
        url: "https://sample.pilotgaea.com.tw/demo/",
        image: ""
    },
    {
        name: "Story Map",
        url: "https://demo-3dgdp.colife.org.tw/storymap/",
        image: ""
    },
    {
        name: "ProgrammingGuide",
        url: "https://sample.pilotgaea.com.tw/demo/ProgrammingGuide/",
        image: ""
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
                    slidesPerView={3}
                    slidesPerGroup={3}
                    spaceBetween={10}
                    centeredSlides={true}
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
                    modules={[Autoplay, Pagination, Navigation]}
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
                                            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                                            alt={item.name}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
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