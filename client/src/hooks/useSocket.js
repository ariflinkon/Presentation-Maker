import { useEffect } from 'react';
import io from 'socket.io-client';

export const useSocket = (presentationId) => {
  const socket = io('http://localhost:5000', {
    query: { presentationId },
    transports: ['websocket'],
    withCredentials: true,
    extraHeaders: {
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    },
  });

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [presentationId]);

  return socket;
};