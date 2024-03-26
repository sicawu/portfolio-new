import axios from "axios"
import { useState, useEffect } from "react"
import { FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom"

function ProjectList() {
    const API_URL = import.meta.env.VITE_API_URL
    const [project, setProject] = useState(null)

    const getAllProjects = () => {
        axios.get(`${API_URL}/projects`)
            .then((response) => {
                setProject(response.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.log("Error getting Cafes from the API...");
                console.log(err);
            })
    }
    useEffect(() => {
        getAllProjects()
    }, [])

    return (
        
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10">
        {project === null
                ? (<p>Please wait</p>)
                : (project.map((project, index) => (
                    <div key={index}
                    className="bg-beige p-5">
                        <div className="mb-5">
                            <h2>{project.name}</h2>
                        </div>
                        <div>
                            <p>{project.description}</p>
                        </div>
                        <div className="my-5">
                            {project.language.map((language, index) => (
                                <label
                                    key={index}
                                    className="bg-darkmint text-white mx-1 my-1 rounded text-sm"
                                >{language}
                                </label>
                            ))}
                        </div>
                        <div className="flex justify-center gap-10">
                            <Link to={`${project.gitUrl}`}>
                                <FaGithub />
                            </Link>
                            <Link to={`${project.depolyedUrl}`}>
                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                )))
            }
        </div>
        </>
    )
}

export default ProjectList