import Timeline from "../components/Timeline"
import { Link } from "react-router-dom"

function AboutPage() {
    return (
        <>
            <div className="heroTwo h-screen flex flex-col justify-center items-center overflow-hidden">
                <h1 className="my-10 text-4xl font-gilda">Welcome to my World</h1>
                <h2 className="my-10 text-2xl font-gilda">Working Experience</h2>
            </div>

            <div className="grid grid-cols-2 h-screen bg-beige">
                <div className="h-screen w-full max-w-full overflow-hidden">
                    <img
                        src="./src/images/Tote-Bag-Made-by-Mona-Etsy.jpg"
                        alt="mood picture"
                        className="h-full w-full object-cover rounded" />
                </div>
                <div className="flex flex-col items-center justify-center mx-3">
                    <h2 className="my-10 text-2xl font-gilda">Etsy Shop - My little Crafting World</h2>
                    <p>Known under the brand name "Made by Mona Atelier" on Etsy, this little creative project was just born recently. </p>
                    <p className="my-3">My goal is to create longlasting, useful (travel) accessoires and bags that are still loved in a couple of years. Instead of contributing to the fast-paced consumption world.</p>
                    <p>Therefore, I carefully select high-quality fabrics and pay attention to natural, durable materials and designs that are timeless. Adding a creative twist.</p>
                    <Link to="https://www.etsy.com/de/shop/MadebyMonaAtelier?ref=profile_header">
                        <button
                            className="inline-flex items-center justify-center h-7 mt-8 mr-3 px-3 font-gilda text-s text-gray-900 bg-mint border border-darkmint rounded-lg focus:outline-none hover:bg-darkgreen-100 hover:text-beige-700"
                        >Visit Etsy Online Shop
                        </button>
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-2 h-screen bg-darkmint">
                <div className="flex flex-col items-center justify-center mx-3">
                    <h2 className="my-10 text-2xl font-gilda">Yoga & Meditation - How I recharge</h2>
                    <p >Yoga is a huge game-changer in my life. It helps me to slow down, recharge my batteries and reconnect to myself in a busteling world. And the good thing: I can practice everywhere and at any time. </p>
                    <p className="my-3">Completing a yoga teacher training in Pai (TH) helped me to deepen my knowledge, practice in a safe way, gain strength and confidence in what I do.</p>
                    <p>The biggest learning since I started 5 years ago has been acceptance. Accepting that everyone has their own story and individual (physical) prerequisites. Which you need to pay attention to not only while teaching but also working together with.</p>

                </div>
                <div className="h-screen w-full max-w-full overflow-hidden">
                    <img
                        src="./src/images/Yoga-Teacher-Training-Simona-Wurst.jpg"
                        alt="mood picture"
                        className="h-full w-full object-cover rounded" />
                </div>
            </div>

            <div className="grid grid-cols-2 h-screen bg-beige">
                <div className="h-screen w-full max-w-full overflow-hidden">
                    <img
                        src="./src/images/Scuba-Diving-Thailand-Simona-Wurst.jpg"
                        alt="mood picture"
                        className="h-full w-full object-cover rounded" />
                </div>
                <div className="flex flex-col items-center justify-center mx-3">
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