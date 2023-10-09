import React, { useState } from 'react';
import Registration from "./components/Registration";

import ProfileList from './components/ProfileList';
import ChatPage from './components/ChatPage';

export default function App() {
    const [stage, setStage] = useState('registration');  // registration, profileSetup, chat

    return (
        <>
            <header className="header">
                <p>Header</p>
            </header>
            <main className="main-content">
                { 
                    stage === 'registration' && <Registration onComplete={() => setStage('profileSetup')} />
                }
                {
                    stage === 'profileSetup' && <ProfileSetup onComplete={() => setStage('chat')} />
                }
                {
                    stage === 'chat' && <ChatPage />
                }
            </main>
            <footer className="footer">
                {/* footer content */}
            </footer>
        </>
    );
}
