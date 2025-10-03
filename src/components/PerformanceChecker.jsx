import React, { createContext, useContext, useState, useEffect } from 'react';

const PerformanceContext = createContext();

export const PerformanceProvider = ({ children }) => {
    const [isHighPerformance, setIsHighPerformance] = useState(false);

    useEffect(() => {
        const checkPerformance = () => {
            const memory = performance.memory; // Available in most modern browsers
            const cpuCores = navigator.hardwareConcurrency || 1; // Default to 1 if not supported

            // Detect mobile devices
            const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

            // Define criteria for high-performance devices
            const hasSufficientMemory = memory && memory.jsHeapSizeLimit > 50 * 1024 * 1024;
            const hasSufficientCores = cpuCores > 2;

            // Determine if the device is high performance
            const deviceIsHighPerformance = hasSufficientMemory && hasSufficientCores;

            setIsHighPerformance(deviceIsHighPerformance || isMobileDevice);
        };


        checkPerformance();
        window.addEventListener('resize', checkPerformance); // Optional: Update on resize

        return () => {
            window.removeEventListener('resize', checkPerformance);
        };
    }, []);

    return (
        <PerformanceContext.Provider value={isHighPerformance}>
            {children}
        </PerformanceContext.Provider>
    );
};

export const usePerformance = () => useContext(PerformanceContext);
