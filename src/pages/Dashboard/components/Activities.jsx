import ListActivities from './ListActivities'

export default function Activities(props) {
    return (
        <div className='container-shadow rounded-md bg-white'
            style={{
                width: props.width ? props.width : '25%'
            }}
        >
            <div className='rounded-t-md px-4 py-2 text-white bg-primarygreen w-full' >
                <h1>{props.title}</h1>
                <p className='text-sm'>{props.desc}</p>
            </div>
            <div className='px-4' >
                <ul>
                    {props.list && props.list.map((item) =>
                        <li>
                            <ListActivities
                                name={item.name} email={item.email} phone={item.phone} id={item.id}
                                mode={item.mode} date={item.date} paymentId={item.paymentId} amount={item.amount}
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