import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MessageIcon from '@mui/icons-material/Message';

const MainFeaturedContactMe = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [isValidateMail, setValidateMail] = useState(false);

    useEffect(() => {
        let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;
        let isValidate = regex.test(mail);
        setValidateMail(isValidate);
    }, [mail])

    return (
        <Box
            component="section"
            id="contact-section"
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
                    Get in touch
                </Typography>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Paper
                    elevation={3}
                    sx={{ p: 5, mt: 2 }}
                >
                    <TextField
                        id="contact-section-name-textfield"
                        label="Name"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        autoComplete="none"
                        variant="outlined"
                        sx={{ mb: 3 }}
                    />
                    <TextField
                        id="contact-section-mail-textfield"
                        label="Email"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AlternateEmailIcon />
                                </InputAdornment>
                            ),

                        }}
                        value={mail}
                        onChange={(event) => setMail(event.target.value)}
                        autoComplete="none"
                        variant="outlined"
                        error={!isValidateMail}
                        sx={{ mb: 3 }}
                    />
                    <TextField
                        id="contact-section-name-textfield"
                        label="Message"
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MessageIcon />
                                </InputAdornment>
                            ),
                        }}
                        multiline
                        rows={5}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        autoComplete="none"
                        variant="outlined"
                        sx={{ mb: 3 }}
                    />
                    <Button
                        variant="contained"
                        disabled={!isValidateMail}
                    >
                        Send Message
                    </Button>
                </Paper>
            </Box>
        </Box>
    )

}

export default MainFeaturedContactMe;