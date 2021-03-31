import React from 'react';

import materialBaseline from './MaterialBaseline';
import Home from './pages/Home';
import Auth from './pages/Auth';

const isLoggedIn = true;

function App() {
    return (
        isLoggedIn ? <Home/> : <Auth/>
    );
}

export default materialBaseline(App);
