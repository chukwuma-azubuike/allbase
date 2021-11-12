import FormContainer from "./components/FormContainer";
import SideNav from "./components/SideNav";
import SignupForm from "./components/SignupForm";

export default function Signup() {
    return (
        <div className='auth-container'>
            <SideNav />
            <FormContainer
                header='Create an account'
                desc='Enter your email and set a password to begin'
                form={<SignupForm />}
            />
        </div>
    )
}