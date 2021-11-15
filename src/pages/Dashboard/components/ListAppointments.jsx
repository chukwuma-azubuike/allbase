export default function ListAppointments(props) {
    return (
        <div className='items-center h-14 py-3 slim-border-bottom justify-between grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 grid'>
            <p className='hidden xxs:block'>{props.name}</p>
            <p className='hidden sm:block'>{props.requestType}</p>
            <p className='hidden xxs:block'>{props.requestDate}</p>
            <p className='hidden md:block'>{props.contactPerson}</p>
            <p className='hidden xl:block'>{props.status}</p>
            <p className='hidden 2xl:block'>{props.action}</p>
        </div>
    )
}