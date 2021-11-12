export default function ListAppointments(props) {
    return (
        <div className='items-center h-14 py-3 slim-border-bottom justify-between grid-cols-6 grid'>
            <p>{props.name}</p>
            <p>{props.requestType}</p>
            <p>{props.requestDate}</p>
            <p>{props.contactPerson}</p>
            <p>{props.status}</p>
            <p>{props.action}</p>
        </div>
    )
}