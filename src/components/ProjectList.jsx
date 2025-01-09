import axios from "axios"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { FaGithub } from "react-icons/fa"
import { TbWorldWww } from "react-icons/tb"
import SearchBar from "../components/SearchBar"

function ProjectList() {
    const API_URL = import.meta.env.VITE_API_URL
    const [projects, setProjects] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getAllProjects = async () => {
            try {
                setIsLoading(true)
                const response = await axios.get(`${API_URL}/projects`)
                setProjects(response.data)
            } catch (err) {
                console.error("Error getting projects:", err)
            } finally {
                setIsLoading(false)
            }
        }

        getAllProjects()
    }, [])

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const filteredProjects = projects.filter((project) => {
        const nameMatch = project.name.toLowerCase().includes(searchTerm.toLowerCase())
        const languageMatch = project.language.some((language) =>
            language.toLowerCase().includes(searchTerm.toLowerCase())
        )
        return nameMatch || languageMatch
    })

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-pulse space-y-4">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="bg-gray-200 h-48 w-72 rounded-lg"></div>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <SearchBar 
                searchTerm={searchTerm} 
                handleSearch={handleSearch}
                className="max-w-xl mx-auto mb-8" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-beige rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
                    >
                        <div className="mb-4">
                            <h2 className="text-2xl font-gilda text-gray-800 mb-2">
                                {project.name}
                            </h2>
                            <p className="text-gray-600">
                                {project.description}
                            </p>
                        </div>

                        <div className="my-4 flex flex-wrap justify-center gap-2">
                            {project.language.map((language, index) => (
                                <span
                                    key={index}
                                    className="bg-darkmint text-white px-3 py-1 rounded-full text-sm shadow hover:bg-lightmint transition-colors duration-200"
                                >
                                    {language}
                                </span>
                            ))}
                        </div>

                        <div className="flex justify-center gap-6 mt-4">
                            <Link 
                                to={project.deployedUrl}
                                className="text-gray-700 hover:text-darkmint transition-colors duration-200 flex items-center gap-2 group"
                            >
                                <TbWorldWww className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </Link>

                            <Link 
                                to={project.gitUrl}
                                className="text-gray-700 hover:text-darkmint transition-colors duration-200 flex items-center gap-2 group"
                            >
                                <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectList