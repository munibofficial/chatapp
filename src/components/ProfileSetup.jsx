import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function ProfileSetup() {
    const [profilePic, setProfilePic] = useState(null);
    const [username, setUsername] = useState('');
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

    const handleSubmit = () => {
        console.log('Profile Picture:', profilePic);
        console.log('Username:', username);
        // You can send this data to your backend or another service.
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
                sx={{ marginTop: 2 }}
            />
            <Button onClick={handleSubmit} sx={{ marginTop: 2 }}>Save</Button>
        </Box>
    );
}
