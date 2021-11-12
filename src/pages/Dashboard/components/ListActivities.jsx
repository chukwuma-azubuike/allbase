import naira from '../../../assets/naira.svg'

export default function ListActivities(props) {
    return (
        <div className=' flex items-center h-14 py-3 slim-border-bottom justify-between'>
            {props.email && <div>
                <p>{props.name}</p>
                <div className='flex items-center text-sm' >
                    <p className='mr-6' >{props.email}</p>
                    <p className='text-primarygreen'>{props.phone} </p>
                </div>
            </div>}
            {props.mode &&
                <div className='flex text-sm' >
                    <div className='flex items-center justify-between' >
                        <div className='bg-primarygreen h-1 w-1 mr-3 rounded-3xl' />
                        <div>
                            <div className='flex' >
                                <span>{props.mode} - </span>
                                <span className='mr-6' >{props.date}</span>
                            </div>
                            <p>Payment ID: {props.paymentId}</p>
                        </div>
                    </div>
                </div>}
            {props.id &&
                <div className='flex text-sm' >
                    <div className='flex items-center justify-between' >
                        <div className='bg-primarygreen h-1 w-1 mr-3 rounded-3xl' />
                        <div>
                            <div className='flex' >
                                <span>{props.id}</span>
                                <span className='mr-6' >{props.date}</span>
                            </div>
                            <p>{props.name}</p>
                        </div>
                    </div>
                </div>}
            {props.amount && <p className='text-primarygreen flex'> <img src={naira} alt='naira' /> {props.amount} </p>}
        </div>
    )
}