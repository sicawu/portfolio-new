import Timeline from "../../src/components/Timeline"

function HomePage() {
    return (
        <>
            <div className="hero h-screen flex justify-center items-end overflow-hidden">
                <div>
                    <h1 className="my-10 mx-3 text-5xl text-beige  font-gilda bold">Simona Wurst</h1>
                    <div className="flex flex-wrap justify-center">
                        <div className="px-3 py-1 bg-green text-white mx-1 my-1 rounded text-sm shadow">
                            <h2 className="text-beige">Full Stack Developer </h2>
                        </div>
                        <div className="px-3 py-1 bg-green text-white mx-1 my-1 rounded text-sm shadow">
                            <h2 className="text-beige">Online Marketing Manager </h2>
                        </div>
                        <div className="px-3 py-1 bg-green text-white mx-1 my-1 rounded text-sm shadow">
                            <h2 className="text-beige">SEO Specialist </h2>
                        </div>
                        <div className="px-3 py-1 bg-green text-white mx-1 my-1 rounded text-sm shadow">
                            <h2 className="text-beige">Digital Nomad</h2>
                        </div>
                        <div className="px-3 py-1 bg-green text-white mx-1 my-1 rounded text-sm shadow">
                            <h2 className="text-beige">Creative Soul</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage