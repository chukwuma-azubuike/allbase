export default function Button(props) {
    return (
        <button className='rounded bg-primarygreen w-auto button-shadow text-white px-12 py-3 text-xs mt-6' >
            {props.text}
        </button>
    )
}