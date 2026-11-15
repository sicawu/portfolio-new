
import { Link } from "react-router-dom"

function NotFoundPage() {
    const poem = [
        "404, a webpage astray.",
        "Lost in the web's array.",
        "But fear not, let's not dismay.",
        "Unexpected turns may pave a beautiful way."
    ]

    return (
        <main className="hero heroFive min-h-[calc(100vh-56px)] relative isolate flex items-center justify-center text-center px-5 py-20">

            <div className="absolute inset-0 bg-black/30 -z-10"></div>

            <div className="max-w-3xl mx-auto">

                <h1 className="font-gilda text-5xl md:text-7xl text-beige mb-5">
                    You shouldn't be here, you sneaky thing!
                </h1>

                <p className="font-nunito text-beige text-lg mb-10">
                    The page you're looking for doesn't exist.
                    But hey, at least I've got a poem for you.
                </p>

                <div className="max-w-xl mx-auto bg-beige/90 px-6 py-9 md:px-12 md:py-12 shadow-lg mb-10">

                    <p className="font-nunito text-xs uppercase tracking-[0.25em] text-darkgreen mb-8">
                        throw new Error("Wrong Turn")
                    </p>

                    <div className="font-gilda text-xl md:text-2xl italic text-darkgreen leading-relaxed space-y-4">
                        {poem.map((line, index) => (
                            <p key={index}>{line}</p>
                        ))}
                    </div>

                </div>

                <Link
                    to="/"
                    className="inline-flex items-center justify-center px-7 py-3 bg-mint text-darkgreen rounded-full font-nunito font-semibold hover:bg-beige transition-colors duration-300"
                >
                    Mum, take me home!
                </Link>

            </div>
        </main>
    )
}

export default NotFoundPage
