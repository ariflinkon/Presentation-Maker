import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useSocket } from '../hooks/useSocket';
import { presentationState } from '../hooks/usePresentation';
import SlideArea from './SlideArea';
import { Container, Grid } from '@mui/material';

const App = () => {
  const [nickname, setNickname] = useState('');
  const [connected, setConnected] = useState(false);
  const [presentation, setPresentation] = useRecoilState(presentationState);
  const socket = useSocket(presentation.id);

  useEffect(() => {
    if (connected) {
      socket.on('presentationData', (data) => {
        setPresentation(data);
      });
    }
  }, [connected, socket, setPresentation]);

  const handleJoin = () => {
    socket.emit('join', { nickname });
    setConnected(true);
  };

  return !connected ? (
    <div className="nickname-input">
      <input
        type="text"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Enter your nickname"
      />
      <button onClick={handleJoin}>Join</button>
    </div>
  ) : (
    <Container>
      <Grid container spacing={2}>
        {/* grid items here */}
        <Grid item xs={10}>
          <SlideArea />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;