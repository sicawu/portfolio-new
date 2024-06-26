import axios from "axios"
import { useState, useEffect } from "react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { PiTreePalmDuotone } from "react-icons/pi"
import { CiLocationOn } from "react-icons/ci"
import { IoCalendarOutline } from "react-icons/io5"
import { LiaLaptopCodeSolid } from "react-icons/lia"


function Timeline() {
    const API_URL = import.meta.env.VITE_API_URL
    const [work, setWork] = useState(null)

    const getAllWork = () => {
        axios.get(`${API_URL}/work`)
            .then((response) => {
                setWork(response.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.log("Error getting work experience from the API...");
                console.log(err);
            })
    }
    useEffect(() => {
        getAllWork()
    }, [])

    return (
        <VerticalTimeline lineColor={'#d4e4df'} style={Object}>
            {work === null
                ? (<p>Please wait</p>)
                : (work.map((workExperience, index) => (
                    <VerticalTimelineElement
                        key={index}
                        contentStyle={{ background: '#f1f0f0' }}
                        contentArrowStyle={{ borderRight: '7px solid #f1f0f0 ' }}
                        iconStyle={{ background: '#BACDC7', color: '#ffff' }}
                        icon={<LiaLaptopCodeSolid />}
                    >
                        <h3 className="text-2xl mt-3 font-gilda">{workExperience.name}</h3>
                        <div className="flex justify-center items-center">
                            <CiLocationOn />
                            <p className="text-xs font-gilda italic pl-2 pb-3">{workExperience.company} ({workExperience.location})</p>
                        </div>
                        <div className="flex justify-center items-center">
                            <IoCalendarOutline className="ml-2" />
                            <p className="text-xs font-gilda pl-2 pb-3">{workExperience.date}</p>
                        </div>
                        <p>{workExperience.description}</p>
                        <div className="flex flex-wrap justify-center">
                            {workExperience.tags.map((tag, index) => (
                                <label
                                    key={index}
                                    className="bg-darkmint text-white font-gilda mx-1 my-1 rounded text-sm shadow"
                                >{tag}
                                </label>
                            ))}
                        </div>
                    </VerticalTimelineElement>
                ))
                )}
        </VerticalTimeline>
    )
}

export default Timeline