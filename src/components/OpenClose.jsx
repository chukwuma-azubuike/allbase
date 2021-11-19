import { useState } from "react"

export default function OpenClose(props) {

    const [transform, setTransform] = useState(false);

    const handleclick = () => {
        setTransform(!transform)
        props.onClick()
    }

    return (
        <div className={props.className} >
            <div onClick={handleclick} id='open-close' className='transition-all bg-primarygreen' >
                <div onClick={handleclick} style={{ transform: transform ? 'rotate(-45deg)' : 'none', top: transform && '12px' }} className='bg-primarygreen h-0.5 w-8 rounded-lg my-1 absolute top-0 transition-transform' />
                <div onClick={handleclick} style={{ opacity: transform ? '0' : '1.0' }} className='bg-primarygreen h-0.5 w-8 rounded-lg my-1 transition-all absolute top-3' />
                <div onClick={handleclick} style={{ transform: transform ? 'rotate(45deg)' : 'none', top: transform && '12px' }} className='bg-primarygreen h-0.5 w-8 rounded-lg my-1 transition-transform absolute top-6' />
            </div>
        </div>
    )
}