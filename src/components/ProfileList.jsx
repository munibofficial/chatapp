import React from 'react';
import { List, ListItem, ListItemText, Avatar, Box } from '@mui/material';

function ProfileList({ setActiveChat }) {
    const dummyProfiles = [
        { id: 1, name: 'John Doe', avatar: '', lastMessage: 'Hey there!' },
        { id: 2, name: 'Jane Smith', avatar: '', lastMessage: 'How are you?' },
        // ... Add more dummy profiles as needed
    ];

    return (
        <Box sx={{ width: '30%', borderRight: '1px solid #ccc' }}>
            <List>
                {dummyProfiles.map(profile => (
                    <ListItem button key={profile.id} onClick={() => setActiveChat(profile)}>
                        <Avatar>{profile.name[0]}</Avatar>
                        <ListItemText primary={profile.name} secondary={profile.lastMessage} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
}

export default ProfileList;
