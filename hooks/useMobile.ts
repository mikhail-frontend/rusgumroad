import {useEffect, useState} from "react";

export default function useMobile ():boolean {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        if(window.innerWidth < 767) setIsMobile(() => true)
    }, []);

    return isMobile;
}