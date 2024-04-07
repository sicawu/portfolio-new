import { Link } from "react-router-dom"
import { PiTreePalmDuotone } from "react-icons/pi"


function NavBar() {
    return (
        <>
            <nav className="flex justify-between px-4 py-2 bg-mint shadow">
                <ul className="flex flex-row">
                    <Link to="/" className="flex items-center">
                        <li className="mr-2"><PiTreePalmDuotone /></li>
                    </Link>
                </ul>
                <ul className="flex font-gilda uppercase">
                    <li><Link to="/projects" className="mr-4">Projects</Link></li>
                    <li><Link to="/about" className="mr-4">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar