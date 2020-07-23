import React from 'react'

import FormInput from '../form-input/FormInput.component'
import CustomButton from '../custom-button/CustomButton.component'

import {auth , signInWithGoogle} from '../../firebase/firebase.utils'


import './signin.styles.scss'


class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({[name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault()
        const {email, password} =this.state
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''})
        } catch (err) {
            console.log(err)
        }
        this.setState({ email: '', password: ''})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='text' value={this.state.email} handleChange={this.handleChange} label="email" required />                    
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label="password" required />
                    
                    <div className="buttons">
                        <CustomButton type='submit'>Sign In </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>                   
                </form>
            </div>
        )
    }
}

export default SignIn