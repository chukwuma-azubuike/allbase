import logo from '../../assets/logo small.png'
import dashboard from '../../assets/dashboard.png'
import inventory from '../../assets/inventory.png'
import accessories from '../../assets/tools.png'
import crm from '../../assets/crm.png'
import serviceRequest from '../../assets/customer.png'
import device from '../../assets/monitor.png'
import paymentHistory from '../../assets/wallet.png'
import ticket from '../../assets/invoice.png'
import settings from '../../assets/settings.png'
import arrow from '../../assets/arrow.svg'
import logout from '../../assets/logout.png'
import useOpenClose from '../../hooks/UseOpenClose'

export default function MobileSideNav() {

    const handleLogout = () => {
        sessionStorage.clear()
        window.location.reload(false) //force window reload
    }

    const { openCloseFunc } = useOpenClose()

    const handleOpenClose = () => {
        openCloseFunc('mob-side-nav')
    }

    return (
        <nav id='mob-side-nav' className='w-full container-shadow p-4 text-3xl h-full absolute top-0 -left-100 sm:hidden transition-all bg-white' >
            <div><img className='w-auto m-auto' src={logo} alt='logo' /></div>
            <div className='py-16 box-border' >
                <ul className='font-light max-w-max m-auto'>
                    <div>
                        <li className='flex items-center mb-8 cursor-pointer' ><img alt='dashboard' className='w-10 mr-16' src={dashboard} /> <span>Dashboard</span> </li>
                        <li className='flex items-center mb-8 cursor-pointer text-gray-400' >
                            <img className='w-10 mr-16' src={inventory} alt='inventory' />
                            <span className='flex justify-between w-full' >
                                <span>Inventory</span>
                                <img alt='arrow' className='' src={arrow} />
                            </span>
                        </li>
                        <li className='flex items-center mb-8 cursor-pointer text-gray-400' >
                            <img className='w-10 mr-16' src={accessories} alt='accessories' />
                            <span className='flex justify-between w-full' >
                                <span>Accessories</span>
                                <img alt='arrow' className='' src={arrow} />
                            </span>
                        </li>
                        <li className='flex items-center mb-8 cursor-pointer text-gray-400' ><img alt='crm' className='w-10 mr-16' src={crm} /> <span>CRM</span> </li>
                        <li className='flex items-center mb-8 cursor-pointer text-gray-400' ><img alt='service request' className='w-10 mr-16' src={serviceRequest} /> <span>Service Request</span> </li>
                        <li className='flex items-center mb-8 cursor-pointer text-gray-400' ><img alt='device' className='w-10 mr-16' src={device} /> <span>Device</span> </li>
                        <li className='flex items-center mb-8 cursor-pointer text-gray-400' >
                            <img className='w-10 mr-16' src={paymentHistory} alt='payment-history' />
                            <span className='flex justify-between w-full' >
                                <span>Payment History</span>
                                <img alt='arrow' className='' src={arrow} />
                            </span>
                        </li>
                        <li className='flex items-center mb-8 cursor-pointer text-gray-400' >
                            <img className='w-10 mr-16' src={ticket} alt='ticket' />
                            <span className='flex justify-between w-full' >
                                <span>Ticket</span>
                                <img alt='arrow' className='' src={arrow} />
                            </span>
                        </li>
                    </div>
                    <div className='absolute bottom-8'>
                        <li className='flex items-center mt-24 cursor-pointer text-gray-400' >
                            <img className='w-10 mr-16 ' src={settings} alt="settings" />
                            <span>Settings</span>
                        </li>
                        <li className='flex items-center mt-8 cursor-pointer text-gray-400' onClick={handleLogout}>
                            <img className='w-10 mr-16 ' src={logout} alt="settings" />
                            <span>Logout</span>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
    )
}