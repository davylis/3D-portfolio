import React, { useEffect, useState } from 'react';

const Preloader = (props) => {
    const { element, seconds } = props;
    const milliseconds = seconds * 1000
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, milliseconds);

        // Cleanup the timer on page reload
        return () => clearTimeout(timer);
    }, [milliseconds]);

    return (
        <>
            {isVisible && (
                <div className="preloaderBg" id="preloader">
                    <div className="preloader-container">
                        <div class="preloader-logo">
                            {element}
                        </div>
                        <div class="preloader-spinner"></div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Preloader;
