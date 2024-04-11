import { Link } from "react-router-dom"

function HomePage() {
    const labels = ["Full Stack Developer", "Online Marketing Manager", "SEO Specialist", "Digital Nomad", "Creative Soul"]
    return (
        <>
            <div className="hero heroOne h-screen flex justify-center items-end overflow-hidden">
                <div>
                    <h1 className="mb-5 text text-5xl text-beige font-gilda">Hello World.</h1>
                    <h2 className="text-xl text-beige mx-5 my-2 font-gilda">Welcome to my little space. I'm glad you're here - Simona.</h2>
                    <Link to="/work">
                        <div className="flex flex-wrap justify-center">
                            {labels.map((label, index) =>
                                <div key={index} className="px-3 py-2 bg-brown mx-1 my-1 rounded hover:bg-green shadow">
                                    <h2 className="text-beige font-gilda">{label}</h2>
                                </div>
                            )}
                        </div>
                    </Link>
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

export default HomePage