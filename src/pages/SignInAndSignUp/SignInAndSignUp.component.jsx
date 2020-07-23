import React from 'react';
import SignIn from '../../components/sign-in/SignIn.component'
import SignUp from '../../components/sign-up/SignUp.component'
import './Signinandsignup.styles.scss'

const SignInAndSignUp = () => (
    <div className='sign-in-and-signup'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUp