import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function LoginForm() {
    return (
        <form>
            <label>
                <p className='text-xs' >Email</p>
                <input
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
                    type='password'
                    placeholder='Enter a password'
                    className='rounded placeholder-primarygrey border-primarygrey py-4 px-3 w-full border-2 text-sm my-2'
                />
            </label>
            <div className='text-center'>
                <Button text='Login →' />
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