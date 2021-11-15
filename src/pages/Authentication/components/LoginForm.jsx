import Button from "../../../components/Button";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { BASE_URL } from "../../../api/baseUrl";
import { Navigate } from 'react-router-dom';

export default function LoginForm() {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [submitButtonTitle, setSubmitButtonTitle] = useState('Login →');
    const [loggedIn, setLoggedIn] = useState()

    useEffect(() => {
        if (sessionStorage.getItem('loggedIn')) {
            setLoggedIn(sessionStorage.getItem('loggedIn'))
        }
    })

    if (loggedIn) return <Navigate to="/dashboard" /> //Redirect to login on successful signup

    const handleSumbit = (e) => {
        e.preventDefault();
        setSubmitButtonTitle(<CircularProgress style={{ color: '#FFFFFF', width: '25px', height: 'auto' }} />)


        const data = {
            email: email,
            password: password,
            email: "eve.holt@reqres.in",
            password: "pistol"
        }

        let jsonData = JSON.stringify(data)

        let options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonData,
            redirect: 'follow'
        }

        fetch(`${BASE_URL}/login`, options)
            .then(res => res.json())
            .then(response => {
                if (response.token) {
                    sessionStorage.setItem('loggedIn', response)
                    setLoggedIn(response.token)
                }
            })
            .catch(err => { console.warn(err) })
    }

    return (
        <form onSubmit={handleSumbit} >
            <label>
                <p className='text-xs' >Email</p>
                <input
                    required
                    type='email'
                    placeholder='Enter your email address'
                    className='rounded placeholder-primarygrey border-primarygrey py-4 px-3 w-full border-2 text-sm my-2'
                />
            </label>
            <label>
                <div className='text-xs mt-6 flex justify-between' >
                    <span>Password</span>
                    <span className='text-primarygreen cursor-pointer' >
                        <Link to='/forgot-password'>
                            Forgot Password?
                        </Link>
                    </span>
                </div>
                <input
                    required
                    type='password'
                    placeholder='Enter a password'
                    className='rounded placeholder-primarygrey border-primarygrey py-4 px-3 w-full border-2 text-sm my-2'
                />
            </label>
            <div className='text-center'>
                <Button text={submitButtonTitle} />
                <div className='mt-7 text-xs' >
                    <span>Don’t have an account?</span>
                    <span className='text-primarygreen cursor-pointer'>
                        <Link to='/signup'>
                            {' '}Create an account
                        </Link>
                    </span>
                </div>
            </div>
        </form>
    )
}