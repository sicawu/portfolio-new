import Timeline from "../../src/components/Timeline"

function HomePage() {
    return (
        <>
            <div className="hero h-screen flex justify-center items-center overflow-hidden">
           {/*} <img
                    src="./src/images/DSC06388.JPG"
                    alt="mood picture"
    className="max-h-screen w-1/2 h-auto resize-y" /> */}
                <div>
                    <h1 className="text-3xl text-beige bold">Glad you're here!</h1>
                    <h2 className="text-beige">Full Stack Developer & Online Marketing</h2>
                </div>
            </div>
            <div>
                <Timeline />
            </div>
        </>
    )
}

export default HomePage