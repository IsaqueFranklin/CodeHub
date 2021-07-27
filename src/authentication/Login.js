import React, { useState } from 'react'
import firebase from '../firebase'
import useFormValidation from './useFormValidation'
import validateLogin from './validateLogin'
import { Link } from 'react-router-dom'
import { Form, Card } from 'react-bootstrap'
import CenteredContainer from './CenteredContainer'

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
}

function Login(props){

    const { handleChange, handleSubmit, handleBlur, errors, isSubmitting, values } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser)
    const [login, setLogin] = useState(true)
    const [firebaseError, setFirebaseError] = useState(null)

    async function authenticateUser() {
        const { name, email, password } = values

        try {
            login
                ? await firebase.login(email, password)
                : await firebase.register(name, email, password)
            props.history.push('/')
        } catch(err) {
            console.error('Authentication error!')
            setFirebaseError(err.message)
        }
    }

    return (
        <CenteredContainer>
            
        </CenteredContainer>
    )
}

export default Login