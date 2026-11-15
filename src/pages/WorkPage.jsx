
import { Link } from "react-router-dom"
import Timeline from "../components/Timeline"
import { PiArrowDown, PiArrowUpRight } from "react-icons/pi"

function WorkPage() {
    return (
        <main className="bg-beige">

            {/* Hero */}
            <section className="hero heroThree min-h-[85vh] md:min-h-screen relative isolate flex flex-col justify-end items-center text-center px-5 pb-20 md:pb-28 overflow-hidden">

                <div className="absolute inset-0 bg-black/30 -z-10"></div>

                <p className="font-nunito text-sm uppercase tracking-[0.25em] text-mint mb-5">
                    A little bit of everything
                </p>

                <h1 className="font-gilda text-5xl md:text-7xl text-beige mb-6">
                    A Journey of Many Turns.
                </h1>

                <p className="font-nunito text-base md:text-lg text-beige/90 max-w-2xl mx-auto leading-relaxed">
                    From tourism and online marketing to SEO and web development.
                    Here's a little look at the experiences, skills and
                    unexpected turns that brought me here.
                </p>

                <a
                    href="#journey"
                    className="mt-12 text-beige hover:text-mint transition-colors"
                    aria-label="Scroll to my professional journey"
                >
                    <PiArrowDown size={28} />
                </a>

            </section>


            {/* Introduction */}
            <section id="journey" className="bg-darkgreen text-beige px-6 py-20 md:py-28">

                <div className="max-w-5xl mx-auto">

                    <p className="font-nunito text-sm uppercase tracking-[0.2em] text-mint mb-4">
                        Connecting the dots
                    </p>

                    <h2 className="font-gilda text-3xl md:text-5xl mb-8">
                        Different fields, one curious mind.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-16">

                        <p className="font-nunito text-base md:text-lg leading-relaxed text-beige/90">
                            My professional journey hasn't exactly followed
                            a straight line. With a background in Tourism
                            Management, I spent several years working in
                            online marketing, focusing on the German and
                            English-speaking markets.
                        </p>

                        <p className="font-nunito text-base md:text-lg leading-relaxed text-beige/90">
                            Over time, my curiosity for all things digital
                            led me further into the technical side of things.
                            From SEO and websites to coding my own applications,
                            I'm constantly learning, experimenting and
                            finding new ways to bring ideas to life.
                        </p>

                    </div>

                </div>
            </section>


            {/* Timeline */}
            <section className="bg-beige px-5 py-20 md:py-28">

                <div className="max-w-5xl mx-auto">

                    <div className="mb-14">
                        <p className="font-nunito text-sm uppercase tracking-[0.2em] text-green mb-4">
                            The journey so far
                        </p>

                        <h2 className="font-gilda text-4xl md:text-5xl text-darkgreen mb-4">
                            Experience & Education.
                        </h2>

                        <p className="font-nunito text-gray-600 max-w-2xl leading-relaxed">
                            A collection of places, roles and experiences
                            that have shaped the way I work and what I
                            enjoy doing today.
                        </p>
                    </div>

                    <Timeline />

                </div>
            </section>


            {/* Coding projects CTA */}
            <section className="bg-mint px-6 py-20 md:py-28">

                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                    <div>
                        <p className="font-nunito text-sm uppercase tracking-[0.2em] text-darkgreen/70 mb-4">
                            From ideas to applications
                        </p>

                        <h2 className="font-gilda text-4xl md:text-5xl text-darkgreen mb-6">
                            Curious about what I've been building?
                        </h2>
                    </div>

                    <div>
                        <p className="font-nunito text-darkgreen/80 text-base md:text-lg leading-relaxed mb-8">
                            During my Ironhack Web Development Bootcamp in 2024,
                            I got to put theory into practice straight away.
                            Since then, I've been working on my own projects,
                            exploring new technologies and getting more
                            comfortable with the full development process.
                        </p>

                        <p className="font-nunito text-darkgreen/80 leading-relaxed mb-8">
                            From recipe apps to travel-inspired ideas,
                            there's always something new taking shape.
                            And this is just the beginning.
                        </p>

                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-3 bg-darkgreen text-beige px-7 py-3 rounded-full font-nunito hover:bg-green transition-colors duration-300"
                        >
                            Explore my projects
                            <PiArrowUpRight size={20} />
                        </Link>
                    </div>

                </div>

            </section>

        </main>
    )
}

export default WorkPage
