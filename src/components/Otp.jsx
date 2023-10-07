import React, { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';

function Otp() {
  const [otp, setOtp] = useState({ digit1: '', digit2: '', digit3: '', digit4: '' });
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [counter, setCounter] = useState(40);  // Initialize the counter to 40 seconds

  const refs = {
    digit1: useRef(null),
    digit2: useRef(null),
    digit3: useRef(null),
    digit4: useRef(null)
  };

  useEffect(() => {
    let timer;

    // If the counter is greater than 0, start decrementing it every second
    if (counter > 0) {
      timer = setInterval(() => {
        setCounter(prevCounter => prevCounter - 1);
      }, 1000);
    } else {
      setIsTimerActive(true);  // Enable the button when the counter reaches 0
      clearInterval(timer);   // Clear the interval to stop decrementing
    }

    // Cleanup function to clear the interval when the component unmounts or when the counter changes
    return () => clearInterval(timer);
  }, [counter]);

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
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className='inputOtp' style={{ display: 'flex' }}>
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
        {isTimerActive ? (
            <Button variant='outlined' size='small'
            style={{alignSelf:'flex-end', marginTop:'10px',marginBottom:'20px'}}
            >Resend OTP</Button>
        ) : (
          <>
            <Button disabled variant='outlined'
            style={{alignSelf:'flex-end', marginTop:'10px',marginBottom:'20px'}}
            size='small'>Resend OTP {counter} Seconds</Button>
          </>
        )}
        <Button variant='contained' style={{alignSelf:'flex-end', marginTop:'20px'}} onClick={() => console.log('Verify OTP')}>Verify</Button>
    </div>
  );
}

export default Otp;
