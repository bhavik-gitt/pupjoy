import React, { useEffect, useState } from 'react';

export default function TextSpinner() {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length < 3 ? prev + '.' : ''));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="text-muted fw-semibold my-3 fs-5" 
      role="status" 
      aria-live="polite" 
      aria-label="Loading"
      style={{color:"white"}}
    >
      Loading{dots}
    </div>
  );
}
