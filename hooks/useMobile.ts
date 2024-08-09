import {useEffect, useState} from "react";

export default function useMobile (width = 767):boolean {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useEffect(() => {
        if(window.innerWidth < width) setIsMobile(() => true)
    }, []);

    return isMobile;
}