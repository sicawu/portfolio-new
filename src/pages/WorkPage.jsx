import Timeline from "../components/Timeline"
import { Link } from "react-router-dom"

function WorkPage() {
    return (
        <>
            <div className="hero heroThree h-screen flex flex-col justify-end items-center overflow-hidden">
                <h1 className="mb-5 text-4xl text-beige font-gilda">Working Experience</h1>
                <p className="text-md text-beige font-gilda mx-5">From Full Stack Developer to (SEO) Online Marketing Manager to my Dual bachelor's degree in Tourism Economics. Get to know my background & skills.</p>
            </div>
            <Timeline />
        </>
    )
}

export default WorkPage