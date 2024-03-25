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
                console.log("Error getting Cafes from the API...");
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
                        contentStyle={{ background: '#D4E4DF' }}
                        contentArrowStyle={{ borderRight: '7px solid #D4E4DF ' }}
                        iconStyle={{ background: '#BACDC7', color: '#ffff' }}
                        icon={<LiaLaptopCodeSolid  />}
                    >
                        <h3 className="text-2xl">{workExperience.name}</h3>
                        <div className="">
                            <IoCalendarOutline />
                            <p  className="text-xs">{workExperience.company}</p>
                        </div>
                        <div>
                            <IoCalendarOutline />
                            <p  className="text-xs">{workExperience.date}</p>
                        </div>
                        <div>
                            <CiLocationOn />
                            <p className="text-xs">{workExperience.location}</p>
                        </div>
                        <p>{workExperience.description}</p>
                        <div>
                            {workExperience.tags.map((tag, index) => (
                                <label 
                                key={index}
                                className="bg-darkmint text-white mx-1 my-1 rounded text-sm"
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