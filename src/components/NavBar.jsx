import { Link, NavLink } from "react-router-dom"
import { PiTreePalmDuotone } from "react-icons/pi"


function NavBar() {
    return (
        <>
            <nav className="sticky top-0 flex justify-between px-4 py-4 bg-mint shadow">
                <ul className="flex flex-row">
                    <Link to="/" className="flex items-center">
                        <li className="mr-2"><PiTreePalmDuotone size={20}/></li>
                    </Link>
                </ul>
                <ul className="flex font-gilda uppercase">
                    <li><NavLink to="/projects" className="mr-4 hover:bg-darkmint bg-opacity-30 rounded p-1" activeclassname="active">Projects</NavLink></li>
                    <li><NavLink to="/work" className="mr-4 hover:bg-darkmint bg-opacity-30 rounded p-1" activeclassname="active">Work</NavLink></li>
                    <li><NavLink to="/about" className="mr-4 hover:bg-darkmint bg-opacity-30 rounded p-1" activeclassname="active">About</NavLink></li>
                    <li><NavLink to="/contact" className="hover:bg-darkmint bg-opacity-30 rounded p-1" activeclassname="active">Contact</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar