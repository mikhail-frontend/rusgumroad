import React, {useCallback, useEffect, useRef, useState} from "react";

export default function useAnimation<T>(list: T[], setList: React.Dispatch<React.SetStateAction<T[]>>): React.RefObject<HTMLUListElement>  {
    const [animated, setAnimated] = useState<boolean>(false);
    const wrapRef = useRef<HTMLUListElement>(null);


    const setElementIsAnimated:React.EffectCallback = useCallback(() => {
        const globalCopy:T[] = list.slice();
        globalCopy.forEach((item, index) => {
            const timer:number = (index + 1) * 70;
            setTimeout(() => {
                setList((prevValue) => {
                    const copy = prevValue.slice();
                    copy[index] = {...copy[index], animated: true};
                    return copy
                })
            }, timer)
        })
    }, [list, setList]);

    useEffect(() => {
        const target: Element | null = (wrapRef)?.current;
        const handleIntersection = (entries: IntersectionObserverEntry[]):void => {
            if (animated) return;
            for (let entry of entries) {
                if (entry.isIntersecting) {
                    setElementIsAnimated();
                    setAnimated(() => true)
                }
            }
        }
        const observer: IntersectionObserver = new IntersectionObserver(handleIntersection);
        if (animated) observer.disconnect()
        observer.observe(target as Element);
        return () => {
            observer.disconnect();
        }
    }, [animated, setElementIsAnimated]);

    return wrapRef;
}
