import person from '../../assets/user.png'
import email from '../../assets/email.png'
import bell from '../../assets/bell.png'
import OpenClose from '../../components/OpenClose'
import useOpenClose from '../../hooks/UseOpenClose'

export default function TopNav() {

    const { openCloseFunc } = useOpenClose()

    const handleOpenClose = () => {
        openCloseFunc('mob-side-nav')
    }

    return (
        <nav className='h-20 container-shadow px-14 py-4 flex items-center sticky top-0 bg-white'>
            <OpenClose onClick={handleOpenClose} className='absolute left-10 top-5 cursor-pointer block sm:hidden' /> 
            <img alt='user' src={person} className='w-10 absolute right-14' />
            <img alt='email' src={email} className='w-6 absolute right-56' />
            <img alt='notification' src={bell} className='w-6 absolute right-40' />
        </nav>
    )
}