import ListAppointments from './ListAppointments'

export default function Appointments(props) {
    return (
        <div className='container-shadow rounded-md bg-white w-full'>
            <div className='rounded-t-md px-4 py-2 flex items-center justify-between text-primarygreen w-full' >
                <h1>Pending Installation Request</h1>
                <p className='cursor-pointer text-sm' >View All</p>
            </div>
            <div className='px-4 py-4 text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 bg-primarygreen w-full' >
                <h1 className='hidden xxs:block'>Customer Name</h1>
                <h1 className='hidden sm:block'>Request Type</h1>
                <h1 className='hidden xxs:block'>Request Date</h1>
                <h1 className='hidden md:block'>Contact Person</h1>
                <h1 className='hidden xl:block'>Status</h1>
                <h1 className='hidden 2xl:block'>Action</h1>
            </div>
            <div className='px-4' >
                <ul>
                    {props.list && props.list.map((item) =>
                        <li>
                            <ListAppointments
                                name={item.name}
                                requestType={item.requestType}
                                requestDate={item.requestDate}
                                contactPerson={item.contactPerson}
                                status={item.status}
                                action={item.action}
                            />
                        </li>
                    )}
                </ul>
            </div>
            <div className='text-center text-primarygreen bg-lowerbg'>
                <p className='text-xs py-2 mt-2'>{props.all}</p>
            </div>
        </div>
    )
}