import Timeline from "../components/Timeline"
import { Link } from "react-router-dom"

function AboutPage() {
    return (
        <>
            <div className="hero heroFour h-screen flex flex-col justify-end items-center overflow-hidden">
                <h1 className="my-10 mx-3 text-4xl text-beige font-gilda">Get To Know Me</h1>
            </div>

            <div className="py-20 px-5 bg-darkgreen">
                <h2 className="text-2xl text-beige mb-5 font-gilda">Welcome to my Little World</h2>
                <p className="text-md text-beige font-gilda mb-5">Born & raised in Germany, I currently work remotely while exploring the world's sparkle.</p>
                <p className="text-beige font-gilda">And although I am super interested in the digital world and love the dynamic and evolving nature of it, there's also an offline girl behind that finds balance in crafting, creativity, exploring and movement. Discover what fills my heart with joy and brightens my day besides SEO & Web Dev. </p>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1">
                <div className="h-screen w-full max-w-full overflow-hidden">
                    <img
                        src="../img/handmade-canvas-shopper-bag-beige.webp"
                        alt="Handmade canvas shopper bag in beige"
                        className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center mx-3">
                    <h2 className="my-10 text-2xl font-gilda">Sewing - My Little Crafting Space</h2>
                    <p className="font-gilda">After sewing a lot of things for myself, friends and family, it was about time to take the next step. Known under the brand name "Made by Mona Atelier" on Etsy, this little creative project was just born recently.</p>
                    <p className="my-3 font-gilda">My goal is to create longlasting, useful (travel) accessoires and bags that are still loved in a couple of years, instead of contributing to the fast-paced consumption world.</p>
                    <p className="font-gilda">Therefore, I carefully select high-quality fabrics and pay attention to natural, durable materials and designs that are timeless. Adding a creative twist.</p>
                    <Link to="https://www.etsy.com/de/shop/MadebyMonaAtelier?ref=profile_header">
                        <button
                            className="inline-flex items-center justify-center h-9 mt-5 mb-10 p-3 text-beige bg-darkgreen border border-darkmint rounded-lg focus:outline-none hover:bg-darkmint shadow"
                        >Visit Etsy Online Shop
                        </button>
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-darkmint">
                <div className="order-2 md:order-1 flex flex-col items-center justify-center mx-3 mb-10">
                    <h2 className="my-10 text-2xl font-gilda">Yoga & Meditation - How I Recharge</h2>
                    <p className="font-gilda">Yoga is a huge game-changer in my life. It helps me to slow down, recharge my batteries and reconnect to myself in a busteling world. And the good thing: I can practice everywhere and at any time. </p>
                    <p className="my-3 font-gilda">Completing a yoga teacher training in Pai (TH) helped me to deepen my knowledge, practice in a safe way, gain strength and confidence in what I do.</p>
                    <p className="font-gilda">The biggest learning since I started 5 years ago has been acceptance. Accepting that everyone has their own story and individual (physical) prerequisites. Being enough, as you are. Which you need to pay attention to not only while teaching but also working together with.</p>

                </div>
                <div className="order-1 md:order-2 h-screen w-full max-w-full overflow-hidden">
                    <img
                        src="../img/yoga-and-meditation-class.webp"
                        alt="Three female yogis while yoga and meditation class"
                        className="h-full w-full object-cover" />
                </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-beige">
                <div className="h-screen w-full max-w-full overflow-hidden">
                    <img
                        src="../img/AOWD-scuba-wreck-diving-thailand.webp"
                        alt="Scuba Diving in front of a wreck within lots of fish in Thailand"
                        className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center mx-3 mb-10">
                    <h2 className="my-10 text-2xl font-gilda">Scuba Diving - Exploring & Mastering</h2>
                    <p className="font-gilda">Wrecks, sharks, huge fish schools, beautiful corals – there‘s a beautiful world to discover underwater. And I have to admit, it’s a bit addictive. </p>
                    <p className="my-3 font-gilda">As an AOWD who has dived in the Maldives, Indonesia, Croatia, and more, this passion has strengthened my adaptability to rapidly changing environments and increased my self-awareness and resilience. While having a lot of fun exploring nature in a respectful and safe way of course.</p>
                    <p className="font-gilda">Same as in the digital world, I am always into the tec (equipment) stuff and mastering skills. Next step: Rescue Diver.</p>
                </div>
            </div>

            <div className="py-20 px-5 bg-darkgreen">
                <h2 className="text-2xl text-beige mb-5 font-gilda">Let's Start Our Journey</h2>
                <p className="text-beige font-gilda">Any new project in mind? I'd love to hear about it.</p>
                <Link to="/contact">
                    <button
                        className="inline-flex items-center justify-center h-9 mt-5 p-3 text-beige bg-darkmint border-2 border-darkmint rounded-lg focus:outline-none hover:bg-mint shadow"
                    >Get in Touch
                    </button>
                </Link>
            </div>
        </>
    )
}

export default AboutPage