import Timeline from "../../src/components/Timeline"
import mood from "../../public/img/mood-pic.jpg"

function HomePage() {
    return (
        <>
            <div className="h-screen flex justify-center items-center overflow-hidden">
                <img
                    src={mood}
                    alt="mood picture"
                    className="max-h-screen max-w-1/2 w-auto" />
                <div>
                    <h1 className="text-3xl">S. W.</h1>
                    <h2>Full Stack Developer & Online Marketing</h2>
                </div>
            </div>
            <div>
                <Timeline />
            </div>
        </>
    )
}

export default HomePage