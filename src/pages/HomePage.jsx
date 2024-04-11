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
                                <div key={index} className="px-3 py-2 bg-brown mx-1 my-1 rounded shadow">
                                    <h2 className="text-beige font-gilda">{label}</h2>
                                </div>
                            )}
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default HomePage