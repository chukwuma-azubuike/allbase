import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { CircularProgress } from "@material-ui/core";
import { BASE_URL } from "../../../api/baseUrl";
import { Navigate } from 'react-router-dom';

export default function SignupForm() {

    const [fullName, setFullName] = useState()
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [password, setPassword] = useState()
    const [submitButtonTitle, setSubmitButtonTitle] = useState('Create account →');
    const [loggedIn, setLoggedIn] = useState()

    if (loggedIn) return <Navigate to="/login" /> //Redirect to login on successful signup

    const handleSumbit = (e) => {
        e.preventDefault();
        setSubmitButtonTitle(<CircularProgress style={{ color: '#FFFFFF', width: '25px', height: 'auto' }} />)


        const data = {
            // fullName: fullName,
            // email: email,
            // password: password,
            // phoneNumber: phone,
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

        fetch(`${BASE_URL}/register`, options)
            .then(res => res.json())
            .then(response => {
                if (response.token) {
                    sessionStorage.setItem('loggedIn', response)
                    setLoggedIn(JSON.stringify(response.token))
                }
            })
            .catch(err => { console.warn(err) })
    }

    return (
        <form onSubmit={handleSumbit}>
            <label>
                <input
                    onChange={(e) => { setFullName(e.target.value) }}
                    type='text'
                    placeholder='Full Name'
                    className='rounded placeholder-primarygrey border-primarygrey py-4 px-3 w-full border-2 text-sm my-2'
                />
            </label>
            <label>
                <input
                    onChange={(e) => { setEmail(e.target.value) }}
                    type='email'
                    placeholder='Email'
                    className='rounded placeholder-primarygrey border-primarygrey py-4 px-3 w-full border-2 text-sm my-2'
                />
            </label>
            <label>
                <input
                    onChange={(e) => { setPhone(e.target.value) }}
                    type='tel'
                    placeholder='Phone Number'
                    className='rounded placeholder-primarygrey border-primarygrey py-4 px-3 w-full border-2 text-sm my-2'
                />
            </label>
            <label>
                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    type='password'
                    placeholder='Password'
                    className='rounded placeholder-primarygrey border-primarygrey py-4 px-3 w-full border-2 text-sm my-2'
                />
            </label>
            <label>
                <input
                    type='password'
                    placeholder='Confirm Password'
                    className='rounded placeholder-primarygrey border-primarygrey py-4 px-3 w-full border-2 text-sm my-2'
                />
            </label>
            <div className='text-center'>
                <Button text={submitButtonTitle} type='submit' />
                <div className='mt-7 text-xs'>
                    <span>Already have an account?</span>
                    <span className='text-primarygreen cursor-pointer'>
                        <Link to='/login'>
                            {' '}Login
                        </Link>
                    </span>
                </div>
            </div>
        </form>
    )
}