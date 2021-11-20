import { Navigate } from "react-router"
import Body from "./Body"
import DashSideNav from "./DashSideNav"
import MobileSideNav from "./MoibleSideNav"
import TopNav from "./TopNav"

export default function Dashboard() {

    if (!sessionStorage.getItem('loggedIn')) return <Navigate to='/login' /> //Access Criteria

    return (
        <div className='dashboard-container sm:grid' >
            <DashSideNav />
            <MobileSideNav />
            <div className='dashboard-body' >
                <TopNav />
                <Body />
            </div>
        </div>
    )
}