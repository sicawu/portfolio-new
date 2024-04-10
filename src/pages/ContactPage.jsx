import Contact from "../../src/components/Contact"

function ContactPage() {
    return (
        <div className="hero heroTwo h-screen flex justify-center items-end overflow-hidden">

        <div className="mx-10">
            <h1 className="mb-5 text text-4xl text-beige font-gilda">Let's Create Together!</h1>
            <p className="text-md text-beige font-gilda mx-5">Feel free to contact me via mail, LinkedIn, Xing or let's connect on GitHub. I'm looking forward to hearing from you anytimes!</p>
            <Contact />
        </div>
        </div>
    )
}

export default ContactPage