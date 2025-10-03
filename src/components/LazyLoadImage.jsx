// LazyLoadImage.js
import { useEffect, useRef, useState } from 'react';

const LazyLoadImage = ({ src, alt, ...props }) => {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after loading the image
        }
      });
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <div ref={imgRef} {...props}>
      {isVisible ? <img src={src} alt={alt} loading="lazy" /> : <div className="placeholder" />} {/* Placeholder can be styled */}
    </div>
  );
};

export default LazyLoadImage;
