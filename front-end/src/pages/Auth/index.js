import React from 'react';

import SignIn from './SignIn'
import SignUp from './SignUp'

const Auth = () => {
    const [newUser, setNewUser] = React.useState(true)
    return newUser ? <SignUp setNewUser={setNewUser}/> : <SignIn setNewUser={setNewUser}/>;
}

export default Auth;