import { useEffect } from "react"

const useLinkTracking = () => {
  useEffect(() => {
    const handleClick = (event) => {
      const target = event.target.closest("a"); // Identify the closest anchor tag
      if (target && window.gtag) {
        window.gtag("event", "link_click", {
          event_category: "Link",
          event_label: target.href, // The href of the clicked link
        })
      }
    }

    // Add a global event listener for clicks
    document.addEventListener("click", handleClick)

    // Cleanup on component unmount
    return () => {
      document.removeEventListener("click", handleClick);
    }
  }, [])
}

export default useLinkTracking
