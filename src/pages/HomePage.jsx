import Timeline from "../../src/components/Timeline"

function HomePage() {
    return (
        <>
            <div className="hero h-screen flex justify-center items-end overflow-hidden">
                <div>
                    <h1 className="my-10 mx-3 text-5xl text-beige  font-gilda bold">Simona Wurst</h1>
                    <div className="flex flex-wrap justify-center">
                        <div className="px-3 py-1 bg-green text-white mx-1 my-1 rounded shadow">
                            <h2 className="text-beige font-gilda">Full Stack Developer </h2>
                        </div>
                        <div className="px-3 py-1 bg-green text-white mx-1 my-1 rounded shadow">
                            <h2 className="text-beige font-gilda">Online Marketing Manager </h2>
                        </div>
                        <div className="px-3 py-1 bg-green text-white mx-1 my-1 rounded shadow">
                            <h2 className="text-beige font-gilda">SEO Specialist </h2>
                        </div>
                        <div className="px-3 py-1 bg-green text-white mx-1 my-1 rounded shadow">
                            <h2 className="text-beige font-gilda">Digital Nomad</h2>
                        </div>
                        <div className="px-3 py-1 bg-green text-white mx-1 my-1 rounded shadow">
                            <h2 className="text-beige font-gilda">Creative Soul</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage