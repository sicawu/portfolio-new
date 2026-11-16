
import { Link } from "react-router-dom"
import Timeline from "../components/Timeline"
import { PiArrowDown, PiArrowUpRight } from "react-icons/pi"

function WorkPage() {
    const digitalCertificates = [
        "Page-Speed, SEO (2021, 121 Watt)",
        "Google-Ads, SEA (2020, 121 Watt)",
        "Advanced Facebook-Ads (2020, 121 Watt)",
    ]

    const maritimeCertificates = [
        "STCW Basic Safety Training (exp. 09/31)",
        "RYA Powerboat Level II",
        "PADI Dive Master + Nitrox",
        "ENG1 Medical Certificate (exp. 09/28)",
        "Australian Sailing Start Crewing & Helming",
    ]

    return (
        <main className="bg-beige">

            {/* Hero */}
            <section className="hero heroThree min-h-[85vh] md:min-h-screen relative isolate flex flex-col justify-end items-center text-center px-5 pb-20 md:pb-28 overflow-hidden">

                <div className="absolute inset-0 bg-black/30 -z-10"></div>

                <p className="font-nunito text-sm uppercase tracking-[0.25em] text-mint mb-5">
                    The journey from studies to work
                </p>

                <h1 className="font-gilda text-5xl md:text-7xl text-beige mb-6">
                    Experience & Education.
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
                        A Quick Summary of My Steps.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-16">

                        <p className="font-nunito text-base md:text-lg leading-relaxed text-beige/90">
                            My professional journey hasn't exactly followed
                            a straight line. With a background in Tourism
                            Management, I spent several years working in
                            online marketing and e-commerce, focusing on the German and
                            European markets.
                        </p>

                        <p className="font-nunito text-base md:text-lg leading-relaxed text-beige/90">
                            From the beginning, my curiosity for all things digital
                            led me further into the technical side of websites.
                            From SEO and website optimisation to coding my own applications,
                            I'm constantly learning, experimenting and
                            finding new ways to bring ideas to life.
                            And sometimes, there's an unexpected side quest:
                            being a yacht chef in the Caribbean.
                        </p>

                    </div>

                </div>
            </section>


            {/* Work Experience Timeline */}
            <section className="bg-beige px-5 py-20 md:py-28">

                <div className="max-w-5xl mx-auto">

                    <div className="mb-14">
                        <p className="font-nunito text-sm uppercase tracking-[0.2em] text-green mb-4">
                            The journey so far
                        </p>

                        <h2 className="font-gilda text-4xl md:text-5xl text-darkgreen mb-4">
                            Work Experience.
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
            <section className="bg-white px-6 py-16 md:py-20">

                <div className="max-w-5xl mx-auto">

                    <div className="mb-10">
                        <p className="font-nunito text-sm uppercase tracking-[0.2em] text-green mb-3">
                            The foundation of my knowledge
                        </p>

                        <h2 className="font-gilda text-3xl md:text-4xl text-darkgreen">
                            Education & Qualifications.
                        </h2>

                        <p className="font-nunito text-brown/70 mt-3 max-w-2xl leading-relaxed">
                            A mix of formal education, technical training
                            and qualifications picked up along the way.
                        </p>
                    </div>


                    {/* Degree & Web Development */}
                    <div className="grid md:grid-cols-2 gap-5 mb-5">

                        {/* Bachelor's Degree */}
                        <div className="bg-beige p-6 md:p-8 rounded-sm">
                            <p className="font-nunito text-xs font-semibold tracking-[0.2em] text-green mb-4">
                                01 — EDUCATION
                            </p>

                            <h3 className="font-gilda text-2xl text-darkgreen mb-2">
                                Dual Bachelor's Degree in Tourism Economics
                            </h3>

                            <p className="font-nunito text-sm text-brown/70 mt-1 mb-4">
                                IU Duales Studium · 2014-2018 · Düsseldorf, Germany
                            </p>

                            <p className="font-nunito text-sm font-semibold text-brown">
                                Bachelor's thesis: “User Experience & Tourism Websites: The Role and Potential of Travel Inspiration Landing Pages in Creating a Successful Online Presence.”
                            </p>
                        </div>


                        {/* Web Development */}
                        <div className="bg-mint p-6 md:p-8 rounded-sm">
                            <p className="font-nunito text-xs font-semibold tracking-[0.2em] text-darkgreen/70 mb-4">
                                02 — TECHNICAL TRAINING
                            </p>

                            <h3 className="font-gilda text-2xl text-darkgreen mb-2">
                                Full-Stack Development
                            </h3>

                            <p className="font-nunito text-sm text-darkgreen/70 mt-1 mb-4">
                                Ironhack · January-March 2024
                            </p>

                            <p className="font-nunito text-sm font-semibold text-darkgreen">
                                Intensive full-time bootcamp in Web Development including three finished projects, several mini projects and labs. Both individual coding and pair-coding.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {["JavaScript (ES6)", "React", "Node.js", "Express", "MongoDB", "HTML5", "CSS3"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-white/60 text-darkgreen font-nunito text-xs px-3 py-1 rounded-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Certificates */}
                    <div className="bg-darkgreen p-6 md:p-8 rounded-sm">

                        <p className="font-nunito text-xs font-semibold tracking-[0.2em] text-mint mb-4">
                            03 — CERTIFICATES
                        </p>

                        <h3 className="font-gilda text-2xl text-beige mb-6">
                            Additional Qualifications
                        </h3>

                        <div className="grid sm:grid-cols-2 gap-8">

                            <div>
                                <h4 className="font-nunito font-bold text-sm text-mint mb-3">
                                    Digital Marketing
                                </h4>

                                <ul className="font-nunito text-sm text-beige/90 space-y-2">
                                    {digitalCertificates.map((certificate) => (
                                        <li key={certificate}>
                                            {certificate}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-nunito font-bold text-sm text-mint mb-3">
                                    Maritime & Diving
                                </h4>

                                <ul className="font-nunito text-sm text-beige/90 space-y-2">
                                    {maritimeCertificates.map((certificate) => (
                                        <li key={certificate}>
                                            {certificate}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                    </div>

                </div>
            </section>


            {/* Coding Projects CTA */}
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
                            During my Full-Stack Dev Bootcamp and self-studies,
                            I got to put theory into practice straight away.
                            Since then, I've been working on my own projects,
                            exploring new technologies and getting more
                            comfortable with the full development process.
                        </p>

                        <p className="font-nunito text-darkgreen/80 leading-relaxed mb-8">
                            From recipe planning apps to LLM-based tools,
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
