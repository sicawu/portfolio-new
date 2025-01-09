import axios from "axios"
import { useState, useEffect } from "react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
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
        <div className="container mx-auto px-4 py-8">
            <VerticalTimeline lineColor={'#d4e4df'} style={Object}>
                {work === null
                    ? (<p>Please wait</p>)
                    : (work.map((workExperience, index) => (
                        <VerticalTimelineElement
                            key={index}
                            contentStyle={{
                                background: '#f1f0f0',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                                borderRadius: '0.5rem'
                            }}
                            contentArrowStyle={{
                                borderRight: '7px solid #f1f0f0'
                            }}
                            iconStyle={{
                                background: '#BACDC7',
                                color: '#fff',
                                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                            }}
                            icon={<LiaLaptopCodeSolid />}
                        >
                            <div className="hover:transform hover:scale-[1.02] transition-all duration-300">
                                <h3 className="text-2xl font-gilda text-gray-800 mb-3">{workExperience.name}</h3>
                                <div className="flex justify-center items-center">
                                    <CiLocationOn className="ml-2 mt-2 text-darkmint"/>
                                    <p className="text-sm font-gilda italic pl-2 text-gray-600">{workExperience.company} ({workExperience.location})</p>
                                </div>
                                <div className="flex justify-center items-center">
                                    <IoCalendarOutline className="ml-2 text-darkmint" />
                                    <p className="text-sm font-gilda italic pl-2 pb-3 text-gray-600">{workExperience.date}</p>
                                </div>
                                <p className="text-gray-700 mb-4 leading-relaxed">{workExperience.description}</p>
                                <div className="flex flex-wrap justify-center gap-2 pt-3">
                                    {workExperience.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-darkmint text-white px-3 py-1 rounded-full text-sm shadow hover:bg-lightmint transition-colors duration-200 font-gilda"
                                        >{tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </VerticalTimelineElement>
                    ))
                    )}
            </VerticalTimeline>
        </div>
    )
}

export default Timeline