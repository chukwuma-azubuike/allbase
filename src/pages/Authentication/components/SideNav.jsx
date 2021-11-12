import logo from '../../../assets/logo small.png'

export default function SideNav() {
    return (
        <nav className='px-10 py-20 side-nav w-96 h-screen bg-lightgreen'>
            <img src={logo} alt='logo' />
            <div className='w-full my-52'>
                <h1 className='text-blue' >OUR SOLUTION</h1>
                <p className='my-3' >
                    Our solution provides low-cost, carbon-free on
                    demand power for households and small business
                    across Nigeria.
                </p>
                <div className='flex' >
                    <div className='h-1 w-9 mr-3 bg-primarygreen' />
                    <div className='h-1 w-9 mr-3 bg-white' />
                    <div className='h-1 w-9 mr-3 bg-white' />
                </div>
                <div className='mt-48 flex justify-between'>
                    <span className='text-sm cursor-pointer' >Privacy policy</span>
                    <span className='text-sm cursor-pointer' >Terms & Conditions</span>
                    <span className='text-sm cursor-pointer' >Faqs</span>
                </div>
            </div>
        </nav>
    )
}