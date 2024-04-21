import Contact from "../../src/components/Contact"
import ContactForm from "../../src/components/ContactForm"
import { saveAs } from 'file-saver'
import { IoCloudDownloadOutline } from "react-icons/io5"


function ContactPage() {

    const handleDownload = () => {
        saveAs("../img/CV-Simona-Wurst-EN.pdf", "CV-Simona-Wurst.pdf")
    }

    return (
        <>
            <div className="hero heroTwo h-screen flex justify-center items-end overflow-hidden">
                <div className="mx-10">
                    <h1 className="mb-5 text text-4xl text-beige font-gilda">Let's Create Together!</h1>
                    <p className="text-md text-beige font-gilda mx-5">Feel free to contact me via mail, LinkedIn, Xing or let's connect on GitHub. I'm looking forward to hearing from you anytimes!</p>
                    <Contact />
                </div>
            </div>
            
            <div className="py-20 px-5 bg-darkgreen">
                <h2 className="text-2xl text-beige mb-5 font-gilda">CV Download (English)</h2>
                <p className="text-beige font-gilda">Prefer a printable PDF? No worries, I've got a two-pager for you. Feel free to contact me for a CV in German, testimonials from previous employers, certificates and more. </p>
                <button onClick={handleDownload}
                    className="inline-flex items-center justify-center h-9 mt-5 p-3 gap-3 text-beige bg-darkmint border-2 border-darkmint rounded-lg focus:outline-none hover:bg-mint shadow">
                    <IoCloudDownloadOutline />Download CV (EN)
                </button>
            </div>

            <div>
                <ContactForm />
            </div>
        </>
    )
}

export default ContactPage