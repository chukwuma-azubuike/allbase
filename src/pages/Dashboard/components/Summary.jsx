import icon from '../../../assets/Ellipse 5.png'

export default function Summary(props) {
    return (
        <div className='summary py-7 px-4 w-auto max-h-28 container-shadow rounded-md flex items-center bg-white' >
            <img src={icon} className='mr-4' alt='icon' />
            <div>
                <h1 className=' text-2xl'>{props.figure}</h1>
                <p className='text-primaryblue text-sm'>{props.desc}</p>
            </div>
        </div>
    )
}