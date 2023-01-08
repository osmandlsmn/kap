import React, { createContext, useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io();

export default function SocketProvider({ children }) {
  useEffect(() => {
    socket.on('connect', () => {});

    socket.on('disconnect', () => {});

    socket.on('pong', () => {});

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  };

  const data = {};

  return (
    <SocketContext.Provider value={data}>{children}</SocketContext.Provider>
  );
}

const SocketContext = createContext({});
export const useSocket = () => useContext(SocketContext);
