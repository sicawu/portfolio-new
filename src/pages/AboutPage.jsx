import Timeline from "../components/Timeline"
import { Link } from "react-router-dom"

function AboutPage() {
    return (
        <div className="bg-white">
            <div className="hero heroSix h-screen flex flex-col justify-end items-center overflow-hidden">
                <h1 className="my-10 mx-3 text-4xl md:text-5xl text-beige font-gilda tracking-wide animate-fade-in">A Dive <br />Behind the Scenes</h1>
                <p className="text-md text-beige font-gilda mx-5">Welcome to my life, little legend!</p>
            </div>

            <section className="py-20 px-5 md:px-10 bg-darkgreen">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl text-beige mb-8 font-gilda">
                        Between the Digital World and the Open Sea
                    </h2>
                    <p className="text-md text-beige font-gilda mb-6 leading-relaxed">
                        Born and raised in Germany, currently navigating life somewhere between the digital world and the open sea. You'll find me wherever the wind takes me, with a laptop never too far away and always a new adventure on the horizon.                    </p>
                    <p className="text-beige font-gilda leading-relaxed">
                        While I genuinely love all things digital, life doesn't happen behind a screen (at least not all of it). I'm a curious soul with a soft spot for creativity, amazing food, new places and always learning something new - I easily get excited to broaden my horizon.
                    </p>
                </div>
            </section>

            <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-0">
                <div className="h-screen w-full relative overflow-hidden">
                    <img
                        src="../img/handmade-canvas-shopper-bag-beige.webp"
                        alt="Handmade canvas shopper bag in beige"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
                <div className="flex flex-col items-center justify-center p-8 md:p-12 bg-white">
                    <div className="max-w-xl">
                        <h2 className="my-8 text-2xl md:text-3xl font-gilda text-gray-800">
                            Sewing - My Little Crafting Space
                        </h2>
                        <p className="font-gilda text-gray-600 mb-6 leading-relaxed">
                            After sewing a lot of things for myself, friends and family, it was about time to take the next step. My little crafting spot said hello to the online world a couple of years ago - but to be fair it doesn't get constantly love and attention, as it is a bit hard traveling with a sewing machine, isn't it?
                        </p>
                        <p className="mb-6 font-gilda text-gray-600 leading-relaxed">
                            My goal is to create longlasting, useful (travel) accessoires and bags that are still loved in a couple of years, instead of contributing to the fast-paced consumption world. Besides, I love to create customized pieces and get the idea out of someone's head into reality.
                        </p>
                        <p className="font-gilda text-gray-600 leading-relaxed">
                            I carefully select high-quality fabrics and pay attention to natural, durable materials and designs that are timeless.
                        </p>
                        <Link to="https://www.etsy.com/de/shop/MadebyMonaAtelier?ref=profile_header">
                            <button className="mt-8 px-6 py-3 bg-darkgreen text-beige font-gilda rounded-lg transition-all duration-300 hover:bg-darkmint border border-darkmint shadow-md hover:shadow-lg">
                                Visit Etsy Online Shop
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-0 bg-darkmint">
                <div className="order-2 md:order-1 flex flex-col items-center justify-center p-8 md:p-12">
                    <div className="max-w-xl">
                        <h2 className="my-8 text-2xl md:text-3xl font-gilda text-gray-800">
                            Yoga & Meditation - How I Recharge
                        </h2>
                        <p className="font-gilda text-gray-600 mb-6 leading-relaxed">
                            Yoga is a huge game-changer in my life. It helps me to slow down, recharge my batteries and reconnect to myself in a busteling world. And the good thing: I can practice everywhere and at any time.
                        </p>
                        <p className="mb-6 font-gilda text-gray-600 leading-relaxed">
                            Completing a yoga teacher training in Pai (TH) helped me to deepen my knowledge, practice in a safe way, gain strength and confidence in what I do.
                        </p>
                        <p className="font-gilda text-gray-600 leading-relaxed">
                            The biggest learning since I started has been acceptance and openness. Accepting that everyone has their own story and individual (physical) prerequisites. Being enough, as you are. Which you need to pay attention to not only while teaching but also working together with.
                        </p>
                    </div>
                </div>
                <div className="order-1 md:order-2 h-screen w-full relative overflow-hidden">
                    <img
                        src="../img/yoga-and-meditation-class.webp"
                        alt="Three female yogis while yoga and meditation class"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </section>

            <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-0 bg-beige">
                <div className="h-screen w-full relative overflow-hidden">
                    <img
                        src="../img/AOWD-scuba-wreck-diving-thailand.webp"
                        alt="Scuba Diving in front of a wreck within lots of fish in Thailand"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                </div>
                <div className="flex flex-col items-center justify-center p-8 md:p-12">
                    <div className="max-w-xl">
                        <h2 className="my-8 text-2xl md:text-3xl font-gilda text-gray-800">
                            Scuba Diving - Exploring & Mastering
                        </h2>
                        <p className="font-gilda text-gray-600 mb-6 leading-relaxed">
                            Wrecks, sharks, huge fish schools, beautiful corals – there's a beautiful world to discover underwater. And I have to admit, it's a bit addictive.
                        </p>
                        <p className="mb-6 font-gilda text-gray-600 leading-relaxed">
                            Having dived in the Maldives, Indonesia, Croatia and beyond, I've learned that things don't always go according to plan – especially underwater. Being a Divemaster has taught me to adapt quickly, stay calm under pressure, communicate clearly and take responsibility for others. Skills that are just as useful on dry land. The bonus? Getting to share some pretty incredible experiences along the way.                        </p>
                        <p className="font-gilda text-gray-600 leading-relaxed">
                            Same as in the digital world, I am always into the tec (equipment) stuff and mastering skills. Next step: Rescue Diver.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-5 md:px-10 bg-darkgreen">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl text-beige mb-6 font-gilda">
                        Let's Start Our Journey
                    </h2>
                    <p className="text-beige font-gilda mb-8">
                        Any new project in mind? I'd love to hear about it.
                    </p>
                    <Link to="/contact">
                        <button className="px-6 py-3 bg-darkmint text-beige font-gilda rounded-lg transition-all duration-300 hover:bg-mint border-2 border-darkmint shadow-md hover:shadow-lg">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default AboutPage