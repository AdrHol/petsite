import { useEffect, useState } from "react"


const useWindowSize = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    const MOBILE_SIZE = 620;

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth);

        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    const isMobile = () => {
        return width < MOBILE_SIZE;
    } 


    return {
        width, 
        isMobile
    };
}

export default useWindowSize;