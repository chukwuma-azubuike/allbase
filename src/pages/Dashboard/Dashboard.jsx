import { Navigate } from "react-router"

export default function Dashboard() {

    if (!sessionStorage.getItem('loggedIn')) return <Navigate to='/login' /> //Access Criteria

    const handleLogout = () => {
        sessionStorage.clear()
        window.location.reload(false) //force window reload
    }

    return (
        <div>
            Dashboard
            <p
                className='cursor-pointer'
                onClick={handleLogout}
            >
                Logout
            </p>
        </div>
    )
}