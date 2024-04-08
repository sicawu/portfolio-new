import axios from "axios"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaGithub } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"
import SearchBar from "../components/SearchBar"


function ProjectList() {
    const API_URL = import.meta.env.VITE_API_URL
    const [project, setProject] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    const getAllProjects = () => {
        axios.get(`${API_URL}/projects`)
            .then((response) => {
                setProject(response.data)
                console.log(response.data)
            })
            .catch((err) => {
                console.log("Error getting projects from the API...");
                console.log(err);
            })
    }
    useEffect(() => {
        getAllProjects()
    }, [])

    const handleSearch = (event) => {
        const searchValue = event.target.value;
        setSearchTerm(searchValue);
    }

    const filteredProjects = project.filter((project) => {
        const nameMatch = project.name.toLowerCase().includes(searchTerm.toLowerCase())
        const languageMatch = project.language.some((language) =>
            language.toLowerCase().includes(searchTerm.toLowerCase())
        )
        return nameMatch || languageMatch
    })


    return (
        <>
            <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-5">
                {filteredProjects === null
                    ? (<p>Please wait</p>)
                    : (filteredProjects.map((project, index) => (
                        <div key={index}
                            className="bg-beige p-5 shadow">
                            <div className="mb-5">
                                <h2 className="text-2xl font-gilda">{project.name}</h2>
                            </div>
                            <div>
                                <p>{project.description}</p>
                            </div>
                            <div className="my-5 flex flex-wrap justify-center">
                                {project.language.map((language, index) => (
                                    <label
                                        key={index}
                                        className="bg-darkmint text-white mx-1 my-1 rounded text-sm shadow hover:bg-lightmint"
                                    >{language}
                                    </label>
                                ))}
                            </div>
                            <div className="flex justify-center gap-10">
                                <Link to={`${project.deployedUrl}`}>
                                    <TbWorldWww size={25}/>
                                </Link>
                                <Link to={`${project.gitUrl}`}>
                                    <FaGithub size={25}/>
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