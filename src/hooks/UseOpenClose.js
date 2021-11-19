import { useState } from "react"

export default function useOpenClose() {

    const [open, setOpen] = useState(false);

    const openCloseFunc = (id, bool) => {
        setOpen(!open)
        if (bool === false) {
            document.getElementById(id).style.position = 'absolute';
            document.getElementById(id).style.left = '-36rem';
            return
        }
        if (!open) {
            setTimeout(() => {
                document.getElementById(id).style.left = '0';
                document.getElementById(id).style.position = 'fixed';
            }, 150)
        } else if (open) {
            // alert('close')
            document.getElementById(id).style.position = 'absolute';
            document.getElementById(id).style.left = '-36rem';
        }
    }

    return {
        openCloseFunc,
        setOpen
    }
}