import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    const GA_ID = import.meta.env.VITE_GA_ID; 
    if (window.gtag && GA_ID) {
      window.gtag("config", GA_ID, {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

export default usePageView;
