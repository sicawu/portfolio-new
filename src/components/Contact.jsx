import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaXing } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { LiaAddressCard } from "react-icons/lia"
import { Link } from "react-router-dom"

function Contact() {
    return (
        <div>
            <Link to="https://www.linkedin.com/in/simona-wurst-full-stack-dev-seo/">
                <FaLinkedin />
            </Link>
            <Link to="https://www.xing.com/profile?sc_o=navigation_profile_icon&sc_o_PropActionOrigin=navigation_badge_no_badge">
                <FaXing />
            </Link>
            <Link to="https://github.com/sicawu?tab=repositories">
                <FaGithub />
            </Link>
            <Link
            to="mailto:simona_wu@yahoo.de"
                onClick={(e) => {
                    window.location.href = mailto;
                    e.preventDefault();
                }}
            >
                <IoIosMail />
            </Link>
            <LiaAddressCard /> <p>Based in Germany, but always somewhere in this beautiful world.</p>
        </div>
    )
}

export default Contact