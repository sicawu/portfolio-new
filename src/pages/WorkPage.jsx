
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
                    The journey from studies to work
                </p>

                <h1 className="font-gilda text-5xl md:text-7xl text-beige mb-6">
                    Work Experience.
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
                            European markets.
                        </p>

                        <p className="font-nunito text-base md:text-lg leading-relaxed text-beige/90">
                            Over time, my curiosity for all things digital
                            led me further into the technical side of things.
                            From SEO and website optimisation to coding my own applications,
                            I'm constantly learning, experimenting and
                            finding new ways to bring ideas to life.
                            And sometimes, there's an unexpected side quest being a yacht chef in the Caribbean.

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



            {/* Education & Qualifications */}
            <section className="bg-beige px-6 py-14 md:py-16">
                <div className="max-w-4xl mx-auto">

                    {/* Section heading */}
                    <div className="mb-8">
                        <p className="font-nunito text-xs uppercase tracking-[0.2em] text-green mb-2">
                            A little more about my background
                        </p>
                        <h2 className="font-gilda text-3xl md:text-4xl text-darkgreen">
                            Education & Qualifications
                        </h2>
                        <div className="w-12 h-0.5 bg-darkmint mt-4"></div>
                    </div>

                    <div className="space-y-7">

                        {/* 01 - Bachelor's Degree */}
                        <div>
                            <p className="font-nunito text-xs font-semibold tracking-widest text-green mb-2">
                                01 — EDUCATION
                            </p>
                            <h3 className="font-gilda text-2xl text-darkgreen">
                                Bachelor's Degree
                            </h3>
                            <p className="font-nunito text-sm font-semibold text-brown mt-1">
                                Tourism Management
                            </p>
                            <p className="font-nunito text-sm text-brown/70">
                                University · Germany
                            </p>
                        </div>

                        <div className="border-t border-darkmint/70"></div>

                        {/* 02 - Web Development */}
                        <div>
                            <p className="font-nunito text-xs font-semibold tracking-widest text-green mb-2">
                                02 — TECHNICAL TRAINING
                            </p>
                            <h3 className="font-gilda text-2xl text-darkgreen">
                                Web Development
                            </h3>
                            <p className="font-nunito text-sm font-semibold text-brown mt-1">
                                Full-Stack Web Development Bootcamp
                            </p>
                            <p className="font-nunito text-sm text-brown/70 mb-3">
                                Ironhack · 2024
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {["JavaScript", "React", "Node.js", "Express", "MongoDB"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-mint text-darkgreen font-nunito text-xs px-3 py-1 rounded-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-darkmint/70"></div>

                        {/* 03 - Certificates */}
                        <div>
                            <p className="font-nunito text-xs font-semibold tracking-widest text-green mb-2">
                                03 — CERTIFICATES
                            </p>
                            <h3 className="font-gilda text-2xl text-darkgreen mb-5">
                                Additional Qualifications
                            </h3>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-nunito font-bold text-sm text-darkgreen mb-2">
                                        Digital Marketing
                                    </h4>
                                    <ul className="font-nunito text-sm text-brown/80 space-y-1">
                                        <li>Google Ads</li>
                                        <li>Google Analytics</li>
                                        <li>SEO Training</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-nunito font-bold text-sm text-darkgreen mb-2">
                                        Maritime & Diving
                                    </h4>
                                    <ul className="font-nunito text-sm text-brown/80 space-y-1">
                                        <li>STCW Basic Safety Training</li>
                                        <li>Powerboat Level II</li>
                                        <li>PADI Divemaster</li>
                                        <li>ENG1</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
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
                            Curious about what I've been coding?
                        </h2>
                    </div>

                    <div>
                        <p className="font-nunito text-darkgreen/80 text-base md:text-lg leading-relaxed mb-8">
                            During my Ironhack Web Development Bootcamp and self-studies,
                            I got to put theory into practice straight away.
                            Since then, I've been working on my own projects,
                            exploring new technologies and getting more
                            comfortable with the full development process.
                        </p>

                        <p className="font-nunito text-darkgreen/80 leading-relaxed mb-8">
                            From recipe planning apps to LLM based tools,
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
