import FormContainer from "./components/FormContainer";
import LoginForm from "./components/LoginForm";
import SideNav from "./components/SideNav";

export default function Login() {
    return (
        <div className='auth-container'>
            <SideNav />
            <FormContainer
                header='Login to your account'
                desc='Login with your email and password'
                form={<LoginForm />}
            />
        </div>
    )
}