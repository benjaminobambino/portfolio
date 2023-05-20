import { useState, useEffect } from 'react';

const getWindowWidth = () => {
    return window.innerWidth
}

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(getWindowWidth())
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(getWindowWidth())
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    return windowWidth;
}

export default useWindowWidth;