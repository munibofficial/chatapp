import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Otp from './Otp';

export default function Registration(props) {
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [buttonText, setButtonText] = useState("Send Verification →");

    const handleSendOtp = () => {
        setButtonText("Sending...");
        
        setTimeout(() => {
            setButtonText("Sent!");
            setIsOtpSent(true);
        }, 2000);
    }

    if (isOtpSent) {
        return <Otp onComplete={props.onComplete} />;  // Pass down the onComplete prop to the Otp component
    }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'background.default',
                padding: '40px',
                borderRadius: '10px',
                boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            {/* <TextField 
                id="username" 
                size="small" 
                label="Username" 
                variant="filled"
                fullWidth
                sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: '5px'
                }}
            /> */}
            <TextField 
                id="filled-number" 
                size="small" 
                label="Number" 
                type='number' 
                variant="filled" 
                fullWidth
                sx={{
                    backgroundColor: 'background.paper',
                    borderRadius: '5px'
                }}
            />
            <Button 
                size='medium' 
                onClick={handleSendOtp} 
                sx={{ 
                    alignSelf: 'center',
                    marginTop: '20px',
                    padding: '10px 10px',
                    backgroundColor: 'primary.main',
                    color: 'background.paper',
                    borderRadius: '20px',
                    boxShadow: '0px 3px 10px rgba(0,0,0,0.2)',
                    '&:hover': {
                        backgroundColor: 'primary.dark'
                    },
                    '& .arrow': {
                        display: 'inline-block',
                        transition: 'transform 0.3s',
                    },
                    '&:hover .arrow': {
                        transform: 'translateX(5px)',
                    },
                }} 
                variant="contained"
            >
                {buttonText.split('→').map((part, i, arr) => 
                    i !== arr.length - 1 
                        ? <span key={i}>{part}<span className="arrow">→</span></span> 
                        : part
                )}
            </Button>
        </Box>
    );
}
