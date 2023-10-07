import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

import Otp from './Otp';


export default function Registration() {
    const [isOtpSent, setIsOtpSent] = useState(false);  // New state for tracking if OTP is sent

  const handleSendOtp = () => {
    // Add any additional logic if required (e.g., API calls to send OTP)
    setIsOtpSent(true);
  }

  // If OTP is sent, render the OtpComponent. Otherwise, render the registration form.
  if (isOtpSent) {
    return <Otp />;
  }

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >

            <TextField id="username" size="small"
                label="Username" variant="filled" />
            <TextField id="filled-number"
                size="small"

                sx={{

                }}
                label="Number" tyoe="number" type='number' variant="filled" />
            <Button size='small' onClick={handleSendOtp}
                sx={{
                    alignSelf: 'flex-end',
                      // Aligns the button to the left

                }}
            variant="contained">Send OTP</Button>



        </Box>
    );
}
