import { Link, NavLink } from "react-router-dom"
import { PiTreePalmDuotone } from "react-icons/pi"
import { useState, useEffect } from "react"

function NavBar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 20
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300
                        ${scrolled ? 'bg-mint/95 backdrop-blur-sm shadow-lg' : 'bg-mint shadow-md'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center h-16">
                    <Link 
                        to="/" 
                        className="flex items-center group transition-transform duration-300 hover:scale-110"
                        aria-label="Home"
                    >
                        <PiTreePalmDuotone 
                            size={24} 
                            className="group-hover:text-darkmint transition-colors" 
                        />
                    </Link>

                    <ul className="flex items-center space-x-1 font-gilda uppercase text-sm tracking-wide">
                        {[
                            { to: "/projects", label: "Projects" },
                            { to: "/work", label: "Work" },
                            { to: "/about", label: "About" },
                            { to: "/contact", label: "Contact" }
                        ].map((link) => (
                            <li key={link.to}>
                                <NavLink
                                    to={link.to}
                                    className={({ isActive }) => `px-3 py-2 rounded-md transition-all duration-300 hover:bg-darkmint hover:text-white
                                        ${isActive ? 
                                            'bg-darkmint text-white' : 
                                            'text-darkgreen hover:text-white'
                                        }
                                    `}
                                >
                                    {link.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar