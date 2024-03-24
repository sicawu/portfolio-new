import { Link } from "react-router-dom"
import { PiTreePalmDuotone } from "react-icons/pi"


function NavBar() {
    return (
        <>
            <nav className="flex justify-between px-4 py-2 bg-mint">
                <ul className="flex items-center">
                    <Link to="/">
                        <PiTreePalmDuotone />
                    </Link>
                </ul>
                <ul className="flex uppercase">
                    <li><Link to="/projects" className="mr-4">Projects</Link></li>
                    <li><Link to="/about" className="mr-4">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar