import { useEffect } from 'react';

export const SearchBox = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cse.google.com/cse.js?cx=86728cb4e8bc44ada";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full mx-auto flex justify-center">
      <div className="w-full max-w-[584px]">
        <div className="gcse-search"></div>
      </div>
    </div>
  );
};