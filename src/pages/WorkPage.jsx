import Timeline from "../components/Timeline"
import { Link } from "react-router-dom"

function WorkPage() {
    return (
        <>
            <div className="hero heroThree h-screen flex flex-col justify-end items-center overflow-hidden">
                <h1 className="mb-5 text-4xl text-beige font-gilda">Work Experience</h1>
                <p className="text-md text-beige font-gilda mx-5">From Full Stack Developer to (SEO) Online Marketing Manager to my Dual bachelor's degree in Tourism Economics. Get to know my background & skills.</p>
            </div>
            <Timeline />
            <div className="py-20 px-5 bg-darkgreen">
                <h2 className="text-2xl text-beige mb-5 font-gilda">Curious About My Coding Projects?</h2>
                <p className="text-beige font-gilda">During the Ironhack web dev bootcamp in 2024, we instantly put our knowledge into practice. As a result, I already have a small portfolio of deployed web apps. But this is just the beginning as I am currently improving my skills.</p>
                <Link to="/projects">
                    <button
                        className="inline-flex items-center justify-center h-9 mt-5 p-3 text-beige bg-darkmint border-2 border-darkmint rounded-lg focus:outline-none hover:bg-mint shadow"
                    >Explore All Coding Projects
                    </button>
                </Link>
            </div>
        </>
    )
}

export default WorkPage