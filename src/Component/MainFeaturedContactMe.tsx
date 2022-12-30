import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import MessageIcon from '@mui/icons-material/Message';
import emailjs from '@emailjs/browser';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const MainFeaturedContactMe = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");
    const [isValidateMail, setValidateMail] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor | undefined>("success");

    useEffect(() => {
        let regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]+$/i;
        let isValidate = regex.test(mail);
        setValidateMail(isValidate);
    }, [mail]);

    const snackbarHandleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setSnackbarOpen(false);
    };

    const sendMessageOnClick = () => {
        let data = {
            name: name,
            mail: mail,
            message: message
        }
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, data, process.env.REACT_APP_USER_ID)
            .then((result) => {
                setSnackbarMessage("Thank you for your message. It has been sent.")
                setSnackbarSeverity("success");
                setSnackbarOpen(true);
            }, (error) => {
                setSnackbarMessage("Something went wrong, but don't worry — it's not your fault.")
                setSnackbarSeverity("error");
                setSnackbarOpen(true);
            });
    }

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
                <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={snackbarHandleClose}>
                    <Alert onClose={snackbarHandleClose} severity={snackbarSeverity} sx={{ width: '100%' }}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
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
                        autoComplete="name"
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
                        autoComplete="email"
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
                        onClick={() => sendMessageOnClick()}
                    >
                        Send Message
                    </Button>
                </Paper>
            </Box>
        </Box>
    )

}

export default MainFeaturedContactMe;