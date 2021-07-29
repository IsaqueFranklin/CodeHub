import React, { useState } from 'react'
import firebase from '../firebase'
import useFormValidation from './useFormValidation'
import validateLogin from './validateLogin'
import { Link } from 'react-router-dom'
import { Form, Card } from 'react-bootstrap'
import CenteredContainer from '../authentication/CenteredContainer'

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
            props.history.push(`/${email}`)
        } catch(err) {
            console.error('Authentication error!')
            setFirebaseError(err.message)
        }
    }

    return (
        <CenteredContainer>
            <Card border="dark">
                <Card.Body>
                    <h2 className="titulo">{login ? "Login" : "Crie sua conta"}</h2>
                    <br></br>
                    <Form onSubmit={handleSubmit} className="flex flex-column">
                    {!login && (
                    <>
                    <Form.Group id="name">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        type="text"
                        placeholder="your name"
                        autoComplete="off"
                        name="name" 
                        className="input" />
                    </Form.Group>
                    {errors.name && <p className="error-text">{errors.name}</p>}
                    <br></br>
                    </>
                    )}

                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        type="email"
                        placeholder="your email"
                        autoComplete="off"
                        name="email"
                        className={errors.email ? 'error-input' : "input"} />
                    </Form.Group>
                    {errors.email && <p className="error-text">{errors.email}</p>}
                    <br></br>
                    <Form.Group id="password">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        type="password"
                        placeholder="chose a secure password"
                        name="password"
                        className={errors.password ? "error.input" : "input"} />
                    </Form.Group>
                    {errors.password && <p className="error-text">{errors.password}</p>}
                    {firebaseError && <p className='error-text'>{firebaseError}</p>}
                    <br></br>
                    <button type="submit" className="" disbaled={isSubmitting}>
                            {login ? "Entrar" : "Criar conta"}
                        </button>
                        <button type="button" className="" onClick={() => setLogin(prevLogin => !prevLogin)}>
                            {login ? "Ainda não tem uma conta?" : "Já tem uma conta?"}
                        </button>
                    </Form>
                    <div className="w-100 text-left mt-3">
                    <Link to="/forgot">Esqueci minha senha</Link>
                    </div>
                </Card.Body>
            </Card>
        </CenteredContainer>
    )
}

export default Login