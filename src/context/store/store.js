import { createContext } from 'react';

export const user = {
    email: 'example@example.com',
    password: '12345678',
    isLoggedIn: false,
    setIsLoggedIn: '',
    myEmail: 'mhmtcbbr@gmail.com'
}

const Context = createContext(user);

export default Context;
