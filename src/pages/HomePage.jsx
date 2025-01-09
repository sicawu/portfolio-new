import { Link } from "react-router-dom"

function HomePage() {
    const labels = ["Full Stack Developer", "Online Marketing Manager", "SEO Specialist", "Digital Nomad", "Creative Soul"]
    return (
        <main className="min-h-screen">
            <section className="hero heroOne min-h-screen flex justify-center items-end pb-16 md:pb-24 overflow-hidden relative">
                <div className="text-center px-4 md:px-8">
                    <h1 className="mb-6 text-4xl md:text-6xl text-beige font-gilda tracking-wide animate-fade-in">Hello World.</h1>
                    
                    <h2 className="text-lg md:text-xl text-beige mb-8 font-gilda leading-relaxed max-w-2xl mx-auto animate-fade-in delay-200">Welcome to my little space. I'm glad you're here - Simona.</h2>
                    
                    <Link to="/work" className="inline-block">
                        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                            {labels.map((label, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 bg-brown rounded-lg transform transition-all duration-300 hover:bg-green hover:-translate-y-1 hover:shadow-lg group animate-fade-in"
                                    style={{ animationDelay: `${(index + 3) * 200}ms` }}
                                >
                                    <h2 className="text-beige font-gilda text-sm md:text-base group-hover:text-white transition-colors">{label}</h2>
                                </div>
                            ))}
                        </div>
                    </Link>
                </div>
            </section>

            <section className="py-16 md:py-24 px-5 md:px-10 bg-darkgreen">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl text-beige mb-6 font-gilda">Let's Start Our Journey</h2>
                    <p className="text-beige font-gilda mb-8 text-lg">Any new project in mind? I'd love to hear about it.</p>
                    <Link to="/contact">
                        <button className="px-6 py-3 text-beige bg-darkmint rounded-lg transform transition-all duration-300 hover:bg-mint hover:-translate-y-1 border-2 border-darkmint shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-darkmint">
                            Get in Touch
                        </button>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default HomePage