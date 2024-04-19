import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaXing } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import { LiaAddressCard } from "react-icons/lia"
import { Link } from "react-router-dom"

function Contact() {
    return (
        <>
            <div className="flex justify-center gap-7 pt-8">
                <Link
                    to="mailto:work.simona.wurst@gmail.com"
                    onClick={(e) => {
                        window.location.href = mailto;
                        e.preventDefault();
                    }}
                >
                    <IoIosMail color="beige" size={30} />
                </Link>
                <Link to="https://www.linkedin.com/in/simona-wurst-full-stack-dev-seo/">
                    <FaLinkedin color="beige" size={30} />
                </Link>
                <Link to="https://www.xing.com/profile?sc_o=navigation_profile_icon&sc_o_PropActionOrigin=navigation_badge_no_badge">
                    <FaXing color="beige" size={30} />
                </Link>
                <Link to="https://github.com/sicawu?tab=repositories">
                    <FaGithub color="beige" size={30} />
                </Link>
            </div>
        </>
    )
}

export default Contact