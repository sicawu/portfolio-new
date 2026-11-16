
import { Link } from "react-router-dom";
import { PiArrowDown, PiArrowUpRight } from "react-icons/pi";

function AboutPage() {
    return (
        <main className="bg-beige">

            {/* Hero */}
            <section className="hero heroSix min-h-[85vh] md:min-h-screen
                relative isolate flex flex-col justify-end items-center
                text-center px-5 pb-20 md:pb-28 overflow-hidden">

                <div className="absolute inset-0 bg-black/30 -z-10"></div>

                <p className="font-nunito text-sm uppercase tracking-[0.2em]
                    text-beige mb-5">
                    Welcome to my life, little legend!
                </p>

                <h1 className="font-gilda text-5xl md:text-7xl
                    text-beige mb-6 animate-fade-in">
                    A Dive Behind the Scenes.
                </h1>

                <p className="font-nunito text-base md:text-lg
                    text-beige max-w-xl mx-auto leading-relaxed">
                    You made it that far, I'm happy to have you here! Let me share a little more personal stuff about myself, my passions and what makes me tick.
                </p>

                <a
                    href="#intro"
                    aria-label="Discover more about me"
                    className="mt-12 text-beige hover:opacity-70
                    transition-opacity duration-200"
                >
                    <PiArrowDown size={26} />
                </a>

            </section>


            {/* Introduction */}
            <section id="intro" className="bg-darkgreen px-5 py-20 md:py-28">

                <div className="max-w-4xl mx-auto">

                    <p className="font-nunito text-sm uppercase
                        tracking-[0.2em] text-mint mb-5">
                        The queen behind the screen
                    </p>

                    <h2 className="font-gilda text-3xl md:text-5xl
                        text-beige mb-8 leading-tight">
                        Between Digital Dreams & Open Oceans.
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12
                        font-nunito text-base md:text-lg text-beige/90
                        leading-relaxed">

                        <p>
                            Born and raised in Germany, I'm currently navigating life somewhere between the digital world and the open ocean. 
                            You'll find me wherever the wind takes me (sorry for the bad jokes), 
                            with a laptop never too far away. I think it's the combination of both worlds that make me thrive. 
                            And if I start something, you can be sure I'm invested.
                        </p>

                        <p>
                            While I genuinely love all things digital, life
                            doesn't happen behind a screen (at least not all
                            of it). I'm a curious soul with a soft spot for
                            creativity, amazing food, new places and always
                            learning new (random) skills. 
                            Taking on little life side quests, 
                            getting myself into something I know absolutely nothing about (yet), 
                            is like honey for my soul. 
                            And who knows? It often turns out to be useful in one way or another, too.
                        </p>

                    </div>
                </div>
            </section>


            {/* Diving */}
            <section className="grid md:grid-cols-2">

                <div className="relative min-h-[350px] md:min-h-[650px]
                    overflow-hidden group">

                    <img
                        src="../img/AOWD-scuba-wreck-diving-thailand.webp"
                        alt="Scuba diving at a wreck surrounded by fish in Thailand"
                        className="absolute inset-0 w-full h-full object-cover
                        transition-transform duration-700 group-hover:scale-105"
                    />

                </div>

                <div className="flex items-center px-7 py-16
                    md:px-14 md:py-24 bg-mint">

                    <div className="max-w-xl mx-auto">

                        <p className="font-nunito text-sm uppercase
                            tracking-[0.2em] text-green mb-5">
                            Below the surface
                        </p>

                        <h2 className="font-gilda text-3xl md:text-4xl
                            text-darkgreen mb-8 leading-tight">
                            Scuba Diving | Exploring & Mastering.
                        </h2>

                        <div className="space-y-6 font-nunito
                            text-brown leading-relaxed">

                            <p>
                                Wrecks, sharks, huge fish schools, beautiful
                                corals — there's a whole world to discover
                                underwater. And I have to admit, it's a bit
                                addictive.
                            </p>

                            <p>
                                Having dived in the Maldives, Indonesia,
                                Croatia, Bahamas and beyond, I've learned
                                that things don't always go according to plan
                                — especially underwater. Being a Divemaster
                                has taught me to adapt quickly, stay calm
                                under pressure, communicate clearly and take
                                responsibility for others. Skills that are
                                just as useful on dry land. The bonus?
                                Getting to share some pretty incredible
                                experiences along the way.
                            </p>

                            <p>
                                Just like in the digital world, I'm always
                                interested in the tech (and equipment) side
                                of things and mastering new skills. Next
                                step: Instructor. And no, I'm not planning
                                to turn it into a career. I just want to be
                                the best badass diving buddy you can imagine!
                            </p>

                        </div>
                    </div>
                </div>
            </section>


            {/* Yoga */}
            <section className="grid md:grid-cols-2">

                <div className="order-1 md:order-2 relative
                    min-h-[350px] md:min-h-[650px] overflow-hidden group">

                    <img
                        src="../img/yoga-and-meditation-class.webp"
                        alt="Three women practising yoga and meditation"
                        className="absolute inset-0 w-full h-full object-cover
                        transition-transform duration-700 group-hover:scale-105"
                    />

                </div>

                <div className="order-2 md:order-1 flex items-center
                    px-7 py-16 md:px-14 md:py-24 bg-beige">

                    <div className="max-w-xl mx-auto">

                        <p className="font-nunito text-sm uppercase
                            tracking-[0.2em] text-green mb-5">
                            Finding balance
                        </p>

                        <h2 className="font-gilda text-3xl md:text-4xl
                            text-darkgreen mb-8 leading-tight">
                            Yoga & Meditation | How I Recharge.
                        </h2>

                        <div className="space-y-6 font-nunito
                            text-brown leading-relaxed">

                            <p>
                              Yoga has been a huge game-changer in my life. 
                              It helps me slow down, recharge my batteries and reconnect with myself in a busy world. 
                              And, to be honest, it also manages to shut my brain off once in a while. 
                              What I love about it? I can practise almost anywhere and at any time — so there are no excuses.
                            </p>

                            <p>
                              Completing my yoga teacher training in Pai, Thailand, 
                              helped me deepen my knowledge about yoga, learn how to practise safely 
                              and build strength and confidence — in my own practice, but also overall life.
                            </p>

                            <p>
                              One of the biggest lessons I've learned since starting yoga 
                              is acceptance and openness. 
                              Everyone has their own story and individual (physical) needs. 
                              Learning to accept that we're all different — and that we're enough just as we are — 
                              is so important in daily life and while working with others.
                            </p>

                        </div>
                    </div>
                </div>
            </section>


            {/* Sewing */}
            <section className="grid md:grid-cols-2">

                <div className="relative min-h-[350px] md:min-h-[650px]
                    overflow-hidden group">

                    <img
                        src="../img/handmade-canvas-shopper-bag-beige.webp"
                        alt="Handmade beige canvas shopper bag"
                        className="absolute inset-0 w-full h-full object-cover
                        transition-transform duration-700 group-hover:scale-105"
                    />

                </div>

                <div className="flex items-center px-7 py-16
                    md:px-14 md:py-24 bg-darkmint">

                    <div className="max-w-xl mx-auto">

                        <p className="font-nunito text-sm uppercase
                            tracking-[0.2em] text-darkgreen mb-5">
                            Making things by hand
                        </p>

                        <h2 className="font-gilda text-3xl md:text-4xl
                            text-darkgreen mb-8 leading-tight">
                            Sewing — My Little Crafting Space.
                        </h2>

                        <div className="space-y-6 font-nunito
                            text-brown leading-relaxed">

                            <p>
                                After sewing lots of things for myself,
                                friends and family, it was about time to
                                take the next step. My little crafting spot
                                said hello to the online world a couple of
                                years ago. Besides that, I also love creating
                                customised pieces and bringing someone
                                else's ideas out of their head and into
                                reality. To be fair, though, it doesn't
                                get constant love and attention — travelling
                                with a sewing machine isn't exactly easy!
                            </p>

                            <p>
                                My goal is to create long-lasting, useful
                                travel accessories and bags that are still
                                loved a couple of years down the line,
                                rather than contributing to the fast-paced
                                world of consumption. 
                                Therefore, I carefully select high-quality fabrics
                                and pay attention to natural, durable
                                materials and timeless designs.
                            </p>
                        </div>

                        <a
                            href="https://www.etsy.com/de/shop/MadebyMonaAtelier?ref=profile_header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 mt-9
                            px-6 py-3 bg-darkgreen text-beige rounded-full
                            font-nunito font-medium text-sm
                            hover:bg-green transition-colors duration-200
                            focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-darkgreen"
                        >
                            Visit my Etsy shop
                            <PiArrowUpRight size={18} />
                        </a>

                    </div>
                </div>
            </section>


            {/* Closing CTA */}
            <section className="bg-darkgreen px-5 py-24 md:py-32
                text-center">

                <div className="max-w-3xl mx-auto">

                    <p className="font-nunito text-sm uppercase
                        tracking-[0.2em] text-mint mb-5">
                        Something on your mind?
                    </p>

                    <h2 className="font-gilda text-3xl md:text-5xl
                        text-beige mb-6">
                        Let's Create Something Together.
                    </h2>

                    <p className="font-nunito text-base md:text-lg
                        text-beige/90 mb-9 leading-relaxed">
                        Have a project in mind, an idea to share or just
                        fancy saying hello? I'd love to hear from you.
                    </p>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3
                        px-7 py-3 bg-mint text-darkgreen rounded-full
                        font-nunito font-medium
                        hover:bg-darkmint transition-colors duration-200
                        focus-visible:outline focus-visible:outline-2
                        focus-visible:outline-offset-4
                        focus-visible:outline-mint"
                    >
                        Get in touch
                        <PiArrowUpRight size={18} />
                    </Link>

                </div>
            </section>

        </main>
    );
}

export default AboutPage;
