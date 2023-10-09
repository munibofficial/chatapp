import React, { useState } from 'react';
import { Box } from '@mui/material';
import ProfileList from './ProfileList';
import ChatArea from './ChatArea';

function ChatPage() {
    const [activeChat, setActiveChat] = useState(null);

    return (
        <Box sx={{ display: 'flex', height: '100vh' }}>
            <ProfileList setActiveChat={setActiveChat} />
            <ChatArea activeChat={activeChat} />
        </Box>
    );
}

export default ChatPage;
