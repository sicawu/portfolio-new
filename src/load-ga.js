// Load Google Analytics script dynamically
const GA_ID = import.meta.env.VITE_GA_ID; // Access the GA_ID from .env

if (GA_ID) {
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  script.onload = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_ID);
  };
} else {
  console.error("Google Analytics ID is not defined.");
}
