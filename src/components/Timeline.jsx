
import axios from "axios"
import { useState, useEffect } from "react"
import { CiLocationOn } from "react-icons/ci"
import { IoCalendarOutline } from "react-icons/io5"
import { PiBriefcase, PiGraduationCap } from "react-icons/pi"

function Timeline() {
    const API_URL = import.meta.env.VITE_API_URL

    const [work, setWork] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
        axios.get(`${API_URL}/work`)
            .then((response) => {
                setWork(response.data)
            })
            .catch((err) => {
                console.error("Error getting work experience:", err)
                setError(true)
            })
    }, [API_URL])

    if (error) {
        return (
            <p className="font-nunito text-gray-600">
                Couldn't load the timeline. Please try again later.
            </p>
        )
    }

    if (work === null) {
        return (
            <p className="font-nunito text-gray-600">
                Loading my journey...
            </p>
        )
    }

    return (
        <div className="relative ml-2 md:ml-4">

            {/* Timeline line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-darkmint"></div>

            <div className="space-y-10">

                {work.map((workExperience, index) => (
                    <article
                        key={workExperience._id || index}
                        className="relative pl-9 md:pl-14"
                    >

                        {/* Timeline marker */}
                        <div className="absolute left-[-17px] top-6 w-9 h-9 rounded-full bg-darkgreen border-4 border-beige flex items-center justify-center text-mint shadow-sm">
                            <PiBriefcase size={17} />
                        </div>

                        {/* Experience card */}
                        <div className="bg-white rounded-xl border border-darkmint/40 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">

                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-5">

                                <div>
                                    <h3 className="font-gilda text-2xl md:text-3xl text-darkgreen mb-2">
                                        {workExperience.name}
                                    </h3>

                                    <div className="flex items-center gap-2 text-gray-500">
                                        <CiLocationOn size={18} />
                                        <span className="font-nunito text-sm italic">
                                            {workExperience.company}
                                            {workExperience.location && ` · ${workExperience.location}`}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 text-green shrink-0">
                                    <IoCalendarOutline size={17} />
                                    <span className="font-nunito text-sm">
                                        {workExperience.date}
                                    </span>
                                </div>

                            </div>

                            <p className="font-nunito text-gray-700 leading-relaxed">
                                {workExperience.description}
                            </p>

                            {workExperience.tags?.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-6 pt-5 border-t border-darkmint/30">

                                    {workExperience.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="bg-mint/70 text-darkgreen px-3 py-1 rounded-full text-xs md:text-sm font-nunito"
                                        >
                                            {tag}
                                        </span>
                                    ))}

                                </div>
                            )}

                        </div>

                    </article>
                ))}

            </div>
        </div>
    )
}

export default Timeline
