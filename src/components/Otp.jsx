import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion, AnimatePresence } from 'framer-motion';

function Otp() {
  const [otp, setOtp] = useState({ digit1: '', digit2: '', digit3: '', digit4: '' });
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [counter, setCounter] = useState(40);
  const [isVerified, setIsVerified] = useState(false);

  const refs = {
    digit1: useRef(null),
    digit2: useRef(null),
    digit3: useRef(null),
    digit4: useRef(null)
  };

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setInterval(() => {
        setCounter(prevCounter => prevCounter - 1);
      }, 1000);
    } else {
      setIsTimerActive(true);
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [counter]);

  useEffect(() => {
    if (Object.values(otp).join("").length === 4) {
      // Here, you would typically make an API call to verify the OTP.
      // For the sake of this example, we'll simulate a successful verification.
      setIsVerified(true);
    }
  }, [otp]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.length <= 1 && /^[0-9]*$/.test(value)) {
      setOtp(prevState => ({ ...prevState, [name]: value }));
      if (value.length === 1) {
        const nextDigit = `digit${parseInt(name.charAt(5)) + 1}`;
        if (refs[nextDigit]) {
          refs[nextDigit].current.focus();
        }
      }
    }
  };

  const inputStyle = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
    textAlign: 'center',
    borderRadius: '5px',
    border: '2px solid #ddd',
    fontSize: '18px',
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    outline: 'none'
  };

  if (isVerified) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <AnimatePresence>
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.5, opacity: 0 }}>
            <CheckCircleIcon style={{ fontSize: 80, color: 'green' }} />
          </motion.div>
        </AnimatePresence>
      </Box>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: '#f8f8f8', borderRadius: '10px' }}>
        <div className='inputOtp' style={{ display: 'flex', marginBottom: '20px' }}>
          {['digit1', 'digit2', 'digit3', 'digit4'].map((digit, index) => (
            <input
              key={digit}
              type="text"
              maxLength="1"
              name={digit}
              value={otp[digit]}
              onChange={handleInputChange}
              ref={refs[digit]}
              style={{ ...inputStyle, marginRight: index === 3 ? '0' : inputStyle.marginRight }}
            />
          ))}
        </div>
        <Box display="flex" alignItems="center" marginBottom="20px">
            {isTimerActive ? (
                <Button variant='outlined' size='small'
                style={{ borderRadius: '20px', marginRight: '10px' }}
                >Resend OTP</Button>
            ) : (
                <>
                <Button disabled variant='outlined'
                    style={{ borderRadius: '20px', marginRight: '10px' }}
                    size='small'>Resend OTP</Button>
                <Box position="relative" display="inline-flex">
                    <CircularProgress variant="determinate" value={(counter/40)*100} size={40} thickness={5} style={{color:'black'}}/>
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <span>{counter}</span>
                    </Box>
                </Box>
                </>
            )}
        </Box>
        <Button variant='contained' style={{alignSelf:'center', padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', borderRadius: '20px'}} onClick={() => console.log('Verify OTP')}>Verify</Button>
    </div>
  );
}

export default Otp;
