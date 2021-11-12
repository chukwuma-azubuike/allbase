import padlock from '../../../assets/padlock.png'

export default function FormContainer(props) {
    return (
        <div className="bg-authbg form-container">
            <div className='container-shadow w-96 rounded-lg border-t-4 border-primarygreen bg-white py-8 px-10 box-border'>
                <div className='flex mb-9 items-center' >
                {/* top-1/4 left-2/4 absolute */}
                    <img src={padlock} alt='padlock' className='w-12 h-12 mr-3' />
                    <div>
                        <p>{props.header}</p>
                        <p className='text-xs' >{props.desc}</p>
                    </div>
                </div>
                <div>
                    {props.form}
                </div>
            </div>
        </div>
    )
}