import ForgotPasswordForm from "./components/ForgotPasswordForm";
import FormContainer from "./components/FormContainer";
import SideNav from "./components/SideNav";

export default function ForgotPassword() {
    return (
        <div className='auth-container'>
            <SideNav />
            <FormContainer
                header='Forgot Password'
                desc='Enter your email to reset password'
                form={<ForgotPasswordForm />}
            />
        </div>
    )
}