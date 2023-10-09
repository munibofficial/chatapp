import React from 'react';
import { Box, Typography } from '@mui/material';

function ChatArea({ activeChat }) {
    return (
        <Box sx={{ width: '70%', padding: 2 }}>
            {activeChat ? (
                <>
                    <Typography variant="h6">{activeChat.name}</Typography>
                    <Box>
                        {/* Chat messages will be displayed here */}
                        {/* For now, let's just display a dummy message */}
                        <Typography>{activeChat.lastMessage}</Typography>
                    </Box>
                </>
            ) : (
                <Typography>Select a chat to start messaging</Typography>
            )}
        </Box>
    );
}

export default ChatArea;
