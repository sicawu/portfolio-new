import Timeline from "../components/Timeline"
import { Link } from "react-router-dom"

function AboutPage() {
    return (
        <>
            <div className="heroFour h-screen flex flex-col justify-end items-center overflow-hidden">
                <h1 className="my-10 mx-3 text-4xl text-beige font-gilda">Hi, my name is Simona.</h1>
                <p className="text-md text-beige font-gilda mx-5">Born & raised in Germany, I currently work remotely while exploring the world's sparkle.</p>
            </div>

            <div className="py-20 px-5 bg-darkgreen">
                <h2 className="text-2xl mb-5 font-gilda">Welcome to my Little World</h2>
                <p className="font-gilda">Although I am super interested in the digital world and love the dynamic and evolving nature of it, there's also an offline girl behind that finds balance in crafting, creativity, exploring and movement. Discover what fills my heart with joy and brightens my day besides SEO & web dev. </p>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1">
                <div className="h-screen w-full max-w-full overflow-hidden">
                    <img
                        src="./src/images/Tote-Bag-Made-by-Mona-Etsy.jpg"
                        alt="mood picture"
                        className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center mx-3">
                    <h2 className="my-10 text-2xl font-gilda">Sewing - My Little Crafting Space</h2>
                    <p>After sewing a lot of things for myself, friends and family, it was about time to take the next step. Known under the brand name "Made by Mona Atelier" on Etsy, this little creative project was just born recently.</p>
                    <p className="my-3">My goal is to create longlasting, useful (travel) accessoires and bags that are still loved in a couple of years, instead of contributing to the fast-paced consumption world.</p>
                    <p>Therefore, I carefully select high-quality fabrics and pay attention to natural, durable materials and designs that are timeless. Adding a creative twist.</p>
                    <Link to="https://www.etsy.com/de/shop/MadebyMonaAtelier?ref=profile_header">
                        <button
                            className="inline-flex items-center justify-center h-7 my-10 mr-3 px-3 font-gilda text-s text-gray-900 bg-mint border border-darkmint rounded-lg focus:outline-none hover:bg-darkgreen-100 hover:text-beige-700 shadow"
                        >Visit Etsy Online Shop
                        </button>
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 bg-darkmint">
                <div className="order-2 md:order-1 flex flex-col items-center justify-center mx-3 mb-10">
                    <h2 className="my-10 text-2xl font-gilda">Yoga & Meditation - How I Recharge</h2>
                    <p >Yoga is a huge game-changer in my life. It helps me to slow down, recharge my batteries and reconnect to myself in a busteling world. And the good thing: I can practice everywhere and at any time. </p>
                    <p className="my-3">Completing a yoga teacher training in Pai (TH) helped me to deepen my knowledge, practice in a safe way, gain strength and confidence in what I do.</p>
                    <p>The biggest learning since I started 5 years ago has been acceptance. Accepting that everyone has their own story and individual (physical) prerequisites. Which you need to pay attention to not only while teaching but also working together with.</p>

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
                        src="./src/images/Scuba-Diving-Thailand-Simona-Wurst.jpg"
                        alt="mood picture"
                        className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center mx-3 mb-10">
                    <h2 className="my-10 text-2xl font-gilda">Scuba Diving - Exploring & Mastering</h2>
                    <p>Wrecks, sharks, huge fish schools, beautiful corals – there‘s a beautiful world to discover underwater. And I have to admit, it’s a bit addictive. </p>
                    <p className="my-3">As an AOWD who has dived in the Maldives, Indonesia, Croatia, and more, this passion has strengthened my adaptability to rapidly changing environments and increased my self-awareness and resilience. While having a lot of fun exploring nature in a respectful and safe way of course.</p>
                    <p>Same as in the digital world, I am always into the tec (equipment) stuff and mastering skills. Next step: Rescue Diver.</p>
                </div>
            </div>
        </>
    )
}

export default AboutPage