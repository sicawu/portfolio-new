import Timeline from "../components/Timeline"
import { Link } from "react-router-dom"

function WorkPage() {
    return (
        <>
            <div className="grid grid-cols-2 h-screen bg-darkgreen">
                <div className="h-screen w-full max-w-full overflow-hidden">
                    <img
                        src="./src/images/DSC06525.jpg"
                        alt="mood picture"
                        className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col items-center justify-center mx-3">
                    <h1 className="my-10 text-4xl font-gilda">Working Experience</h1>
                    <p className="my-10 text-md font-gilda mx-10">From Full Stack Developer to (SEO) Online Marketing Manager to my Dual bachelor's degree in Tourism Economics. Discover my background.</p>
                </div>
            </div>
            <Timeline />
        </>
    )
}

export default WorkPage