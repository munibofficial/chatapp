import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Avatar, IconButton, InputAdornment } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function ProfileSetup(props) {
    const [profilePic, setProfilePic] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);  // State to manage password visibility
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAvatarClick = () => {
        fileInputRef.current.click();
    };

    const handleTogglePasswordVisibility = () => {  // Toggle password visibility
        setShowPassword(!showPassword);
    };

    const handleSubmit = () => {
        console.log('Profile Picture:', profilePic);
        console.log('Username:', username);
        console.log('Password:', password);   // In a real-world scenario, avoid logging sensitive info!
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            
            <Box sx={{ position: 'relative', width: 120, height: 120 }}>
                <Avatar 
                    alt="User's profile picture" 
                    src={profilePic || undefined} 
                    sx={{ width: '100%', height: '100%' }}
                />
                <IconButton 
                    sx={{
                        position: 'absolute', 
                        bottom: 5, 
                        right: 5, 
                        backgroundColor: 'white', 
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.7)' }
                    }}
                    onClick={handleAvatarClick}
                >
                    <AddIcon color="action" />
                </IconButton>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    style={{ display: 'none' }} 
                    onChange={handleImageChange} 
                />
            </Box>

            <TextField
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Choose a username"
                variant="standard"
                sx={{ marginTop: 2, height: '56px' }}  // Explicitly set the height
            />

<TextField
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                variant="standard"
                sx={{ marginTop: 2, height: '56px' }}  // Explicitly set the height
                InputProps={{  // Adornment for password visibility toggle
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                edge="end"
                                onClick={handleTogglePasswordVisibility}
                            >
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />


<Button onClick={() => {
        handleSubmit();
        props.onComplete && props.onComplete();
    }} sx={{ marginTop: 2, borderRadius: 10 }}>Save</Button>      </Box>
    );
}
