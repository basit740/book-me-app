// useScroll.js
import { useEffect, useState } from 'react';

const useScroll = () => {
    const [navClass, setNavClass] = useState<string>('');

    const scrollNavigation = () => {
        var scrollUp = document.documentElement.scrollTop;
        if (scrollUp >= 50) {
            setNavClass('nav-sticky');
        } else {
            setNavClass('');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollNavigation, true);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('scroll', scrollNavigation, true);
        };
    }, []);

    return navClass;
};

export default useScroll;
