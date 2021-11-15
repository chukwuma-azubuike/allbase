import Activities from "./components/Activities";
import Summary from "./components/Summary";
import customers from '../../data/customers.json'
import Appointments from "./components/Appointments";
import installations from '../../data/installations.json';
import payments from '../../data/payments.json';
import installed from '../../data/installed.json'

export default function Body() {
    return (
        <div className='px-8 py-11 bg-bodybg body-container' >
            <h1 className='text-primaryblue text-2xl'>Dashboard</h1>
            <div className='mt-4 grid justify-between gap-3 grid-cols-5 summary-container' >
                <Summary figure='10' desc='Total Customers' />
                <Summary figure='10' desc='Paid Invoices' />
                <Summary figure='10' desc='Due Invoices' />
                <Summary figure='10' desc='Pending Requests' />
                <Summary figure='10' desc='Monitoring Devices' />
            </div>
            <h1 className='text-primaryblue text-2xl mt-11 mb-6'>Activities</h1>
            <div className='justify-between grid gap-14 activities-container' >
                <Activities title='Recent Customer' desc='Most Recent List Of Customers' all='All Customers' list={customers} />
                <Activities width='40%' title='Successful Payment' desc='Most Recent List Of Successful Payments' all='All Payments' list={payments} />
                <Activities title='Installed System' desc='Most Recent Completed Installations' all='All Details' list={installed} />
            </div>
            <h1 className='text-primaryblue text-2xl mt-11 mb-6'>Upcoming Apointments (5)</h1>
            <div className='flex justify-between' >
                <Appointments title='Recent Customer' desc='Most Recent List Of Customers' all='All Appointments' list={installations} />
            </div>
        </div>
    )
}