function HomePage() {
    const labels = ["Full Stack Developer", "Online Marketing Manager", "SEO Specialist", "Digital Nomad", "Creative Soul"]
    return (
        <>
            <div className="hero h-screen flex justify-center items-end overflow-hidden">
                <div>
                    <h1 className="my-10 mx-3 text-5xl text-beige  font-gilda bold">Simona Wurst</h1>
                    <div className="flex flex-wrap justify-center">
                        {labels.map((label, index) =>
                            <div key={index} className="px-3 py-2 bg-green text-white mx-1 my-1 rounded shadow">
                                <h2 className="text-beige font-gilda">{label}</h2>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage