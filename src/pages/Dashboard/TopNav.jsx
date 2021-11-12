import person from '../../assets/user.png'
import email from '../../assets/email.png'
import bell from '../../assets/bell.png'

export default function TopNav() {
    return (
        <nav className='h-20 container-shadow px-14 py-4 flex items-center sticky top-0 bg-white'>
            <img alt='user' src={person} className='w-10 absolute right-14' />
            <img alt='email' src={email} className='w-8 absolute right-56' />
            <img alt='notification' src={bell} className='w-8 absolute right-40' />
        </nav>
    )
}