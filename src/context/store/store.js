import React, { createContext } from 'react';

export const user = {
    email: 'example@example.com',
    setEmail: '',
    password: '12345678',
    setPassword: '',
    isLoggedIn: false,
    setIsLoggedIn: '',
    myEmail: 'mhmtcbbr@gmail.com'
}

const Context = React.createContext(user);

export default Context;
