import { Link } from "react-router-dom"

function NotFoundPage() {
    const poem = ["404, a webpage astray.", "Lost in the web's array.", "But fear not, let's not dismay.", "Unexpected turns may pave a beautiful way."]
    return (
        <>
            <div className="hero heroFive min-h-[calc(100vh-56px)] flex justify-center items-center overflow-hidden">
                <div>
                    <h1 className="my-10 mx-3 bg-beige text-4xl text-green font-gilda">An AI Anthem</h1>
                    <div className="flex flex-col justify-center gap-2">
                        {poem.map((poemLine, index) =>
                            <div key={index}>
                                <h2 className="text-2xl font-gilda text-beige bg-green mx-5 py-1">{poemLine}</h2>
                            </div>
                        )}
                    </div>
                    <Link to="/contact">
                        <button
                            className="inline-flex items-center justify-center h-9 my-10 p-3 text-beige bg-darkgreen border border-darkmint rounded-lg focus:outline-none hover:bg-darkgreen-100 hover:text-beige-700 shadow"
                        >Trust the Process
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default NotFoundPage