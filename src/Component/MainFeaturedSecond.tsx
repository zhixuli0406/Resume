import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface GridItemProps {
    value: string,
    text: string
}

const itemList = [
    {
        value: "4+",
        text: "Years Experience",
    },
    {
        value: "30+",
        text: "Customer Software project",
    },
    {
        value: "4+",
        text: "Years ISMS Set up Experience",
    },
    {
        value: "50+",
        text: "Virtual Machines maintenance",
    }
]

const GridItem = (props: GridItemProps) => {
    const { value, text, ...other } = props
    return (
        <Grid
            item
            xs={6} sm={6} lg={3}
            sx={{
                display: 'flex',
                marginBottom: '30px',
                alignItems: 'center',
                WebkitBoxAlign: 'center',
                position: 'relative'
            }}
        >
            <Box
                sx={{
                    minWidth: '60px',
                    boxSizing: 'border-box',
                    display: 'block',
                    textAlign: 'center'
                }}
            >
                <span style={{ color: "#FFC107", fontFamily: '"Poppins", sans-serif', fontWeight: 600, fontSize: '22px' }}>{value}</span>
            </Box>
            <Typography gutterBottom sx={{ color: '#FFFFFF', fontSize: '13px', fontWeight: 400, mb: 0, wordWrap: 'break-word' }}>
                {text}
            </Typography>
        </Grid>
    )
}

const MainFeaturedSecond = () => {
    return (
        <Box
            component="section"
            id="second-section"
            sx={{
                paddingTop: { xs: '10px', sm: '30px', lg: '30px' },
                position: 'relative',
            }}
        >
            <Box
                sx={{
                    overflow: 'hidden',
                    padding: { xs: '0 10px', sm: '0 30px', lg: '0 30px' },
                    position: 'relative',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    width: '100%'
                }}
            >
                <Grid container spacing={1}>
                    {
                        itemList.map((item) => (
                            <GridItem key={item.text} value={item.value} text={item.text} />
                        ))
                    }

                </Grid>

            </Box>
        </Box>
    )
}

export default MainFeaturedSecond;