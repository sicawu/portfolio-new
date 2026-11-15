
import { Link } from "react-router-dom"
import { PiArrowDown, PiArrowUpRight } from "react-icons/pi"

function HomePage() {

    const labels = [
        "Online Marketing Manager",
        "SEO Specialist",
        "Full-Stack Dev in Progress",
        "Part-Time Yacht Chef",
        "Occasional PADI Divemaster",
        "Creative Soul"
    ]

    return (
        <main>

            {/* HERO SECTION */}
            <section className="hero heroOne min-h-screen relative flex items-center justify-center overflow-hidden">

                {/* Image overlay */}
                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-24 text-center">

                    <p className="text-sm md:text-base uppercase tracking-[0.25em] text-beige mb-6 font-nunito">
                        A little bit of everything, a lot of curiosity.
                    </p>

                    <h1 className="text-5xl sm:text-6xl md:text-8xl text-beige font-gilda mb-6 tracking-wide">
                        Hello World.
                    </h1>

      

                    {/* Professional identities */}
                    <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-3 max-w-3xl mx-auto mb-12">
                        {labels.map((label, index) => (
                            <span
                                key={label}
                                className="text-beige/90 font-nunito text-sm md:text-base tracking-wide"
                            >
                                {label}
                                {index !== labels.length - 1 && (
                                    <span className="ml-5 text-beige/60 hidden sm:inline">
                                        /
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link
                        to="/work"
                        className="inline-flex items-center gap-3 px-7 py-3
                        border border-beige/80 text-beige rounded-full
                        font-nunito text-sm tracking-wide
                        hover:bg-beige hover:text-darkgreen
                        transition-all duration-300
                        focus-visible:outline focus-visible:outline-2
                        focus-visible:outline-offset-4 focus-visible:outline-beige"
                    >
                        Explore my background
                        <PiArrowUpRight size={18} aria-hidden="true" />
                    </Link>

                </div>

                {/* Scroll indicator */}
                <a
                    href="#journey"
                    aria-label="Scroll to the next section"
                    className="absolute bottom-8 left-1/2 -translate-x-1/2
                    text-beige/80 hover:text-beige transition-colors"
                >
                    <PiArrowDown size={24} aria-hidden="true" />
                </a>

            </section>


            {/* CONTACT SECTION */}
            <section
                id="journey"
                className="py-20 md:py-28 px-6 bg-mint"
            >

                <div className="max-w-3xl mx-auto text-center">

                    <p className="uppercase tracking-[0.2em] text-sm text-green font-nunito mb-4">
                        What's next?
                    </p>

                    <h2 className="text-3xl md:text-5xl text-darkgreen font-gilda mb-6">
                        Let's Create Something Together.
                    </h2>

                    <p className="text-darkgreen/80 font-nunito text-lg max-w-xl mx-auto mb-9 leading-relaxed">
                        Have an idea, a project or just fancy a chat?
                        I'm always up for interesting conversations
                        and new inspirations.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 px-7 py-3
                        bg-darkgreen text-beige rounded-full
                        font-nunito text-sm tracking-wide
                        hover:bg-green hover:-translate-y-0.5
                        transition-all duration-300
                        focus-visible:outline focus-visible:outline-2
                        focus-visible:outline-offset-4 focus-visible:outline-darkgreen"
                    >
                        Get in touch
                        <PiArrowUpRight size={18} aria-hidden="true" />
                    </Link>

                </div>

            </section>

        </main>
    )
}

export default HomePage
