
import Contact from "../../src/components/Contact";
import { saveAs } from "file-saver";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { PiArrowDown } from "react-icons/pi";

function ContactPage() {

    const handleDownload = () => {
        saveAs("../img/CV-Simona-Wurst-EN-Web.pdf", "CV-Simona-Wurst.pdf");
    };

    return (
        <main>

            {/* Contact Hero */}
            <section className="hero heroTwo min-h-screen relative isolate
                flex items-center justify-center text-center
                px-5 py-24 overflow-hidden">

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/35 -z-10"></div>

                <div className="w-full max-w-3xl mx-auto">

                    <p className="font-nunito text-sm uppercase tracking-[0.2em]
                        text-beige mb-5">
                        Get in touch
                    </p>

                    <h1 className="text-5xl md:text-7xl text-beige font-gilda mb-6">
                        Let's Create Together.
                    </h1>

                    <p className="text-base md:text-lg text-beige font-nunito
                        max-w-2xl mx-auto mb-10 leading-relaxed">
                        Have a project in mind, want to say hello or just fancy
                        connecting? I'd love to hear from you.
                        Find me via email, LinkedIn, Xing or GitHub.
                    </p>

                    <div className="flex justify-center">
                        <Contact />
                    </div>

                    <a
                        href="#cv"
                        className="inline-flex items-center gap-2 mt-16
                        text-beige font-nunito text-sm uppercase tracking-widest
                        hover:opacity-70 transition-opacity duration-200"
                    >
                        A little more about me
                        <PiArrowDown size={18} aria-hidden="true" />
                    </a>

                </div>
            </section>


            {/* CV Section */}
            <section
                id="cv"
                className="bg-mint py-24 px-5 text-center"
            >
                <div className="max-w-3xl mx-auto">

                    <p className="font-nunito text-sm uppercase tracking-[0.2em]
                        text-darkgreen mb-5">
                        Want to know more?
                    </p>

                    <h2 className="text-3xl md:text-5xl text-darkgreen
                        font-gilda mb-6">
                        A little more on paper.
                    </h2>

                    <p className="text-darkgreen font-nunito text-base md:text-lg
                        max-w-2xl mx-auto leading-relaxed">
                        Prefer a printable PDF? No worries, I've got a two-pager
                        for you. Feel free to get in touch if you'd like a CV in
                        German, testimonials from previous employers,
                        certificates or anything else.
                    </p>

                    <button
                        onClick={handleDownload}
                        className="inline-flex items-center justify-center
                        mt-9 px-6 py-3 gap-3
                        text-beige bg-darkgreen border border-darkgreen
                        rounded-full font-nunito font-medium
                        hover:bg-green hover:border-green
                        transition-all duration-200
                        focus-visible:outline focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-darkgreen"
                    >
                        <IoCloudDownloadOutline
                            size={20}
                            aria-hidden="true"
                        />
                        Download CV (EN)
                    </button>

                </div>
            </section>

        </main>
    );
}

export default ContactPage;
