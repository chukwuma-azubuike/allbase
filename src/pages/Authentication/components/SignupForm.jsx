import { Link } from "react-router-dom";
import Button from "../../../components/Button";

export default function SignupForm() {
    return (
        <form>
            <label>
                <input
                    type='text'
                    placeholder='Full Name'
                    className='rounded placeholder-primarygrey border-primarygrey py-4 px-3 w-full border-2 text-sm my-2'
                />
            </label>
            <label>
                <input
                    type='email'
                    placeholder='Email'
                    className='rounded placeholder-primarygrey border-primarygrey py-4 px-3 w-full border-2 text-sm my-2'
                />
            </label>
            <label>
                <input
                    type='tel'
                    placeholder='Phone Number'
                    className='rounded placeholder-primarygrey border-primarygrey py-4 px-3 w-full border-2 text-sm my-2'
                />
            </label>
            <label>
                <input
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
                <Button text='Create account →' />
                <div className='mt-7 text-xs' >
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