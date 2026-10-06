import { useEffect, useState } from "react";

export default function useIsMobile(breakpoint = 768) {
    const get = () => window.innerWidth < breakpoint;
    const [isMobile, setIsMobile]=useState(get);
    useEffect(()=>{
        const onResize = () => setIsMobile(get());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [breakpoint]);
    return isMobile;
}