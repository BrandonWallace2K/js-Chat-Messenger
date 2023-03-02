import React from 'react'
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer } from './components';

import './App.css';

const apiKey = 'ptsx8wq4edpc';

const client = StreamChat.getInstance(apiKey);

// creates boilerplate for the component
const App = () => {
  return (
    <div className='app_wrapper'>
        <Chat client={client} theme="team light">
            <ChannelListContainer 

            />
            <ChannelContainer

            />
        </Chat>
    </div>
  );
}

export default App;