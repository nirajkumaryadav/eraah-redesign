import { useEffect, useRef } from 'react';

const useAnimations = () => {
    const elementRef = useRef(null);

    const animateOnScroll = () => {
        const element = elementRef.current;
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', animateOnScroll);
        return () => {
            window.removeEventListener('scroll', animateOnScroll);
        };
    }, []);

    return elementRef;
};

export default useAnimations;