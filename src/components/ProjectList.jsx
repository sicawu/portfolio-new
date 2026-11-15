
import axios from "axios";
import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { PiArrowUpRight, PiCode } from "react-icons/pi";
import SearchBar from "../components/SearchBar";

function ProjectList() {
    const API_URL = import.meta.env.VITE_API_URL;

    const [projects, setProjects] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getAllProjects = async () => {
            try {
                setIsLoading(true);
                setError(false);

                const response = await axios.get(`${API_URL}/projects`);
                setProjects(response.data);
            } catch (err) {
                console.error("Error getting projects:", err);
                setError(true);
            } finally {
                setIsLoading(false);
            }
        };

        getAllProjects();
    }, [API_URL]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProjects = projects.filter((project) => {
        const search = searchTerm.toLowerCase();

        const nameMatch = project.name?.toLowerCase().includes(search);

        const descriptionMatch = project.description
            ?.toLowerCase()
            .includes(search);

        const languageMatch = project.language?.some((language) =>
            language.toLowerCase().includes(search)
        );

        return nameMatch || descriptionMatch || languageMatch;
    });

    return (
        <section className="bg-beige min-h-screen px-5 py-24 md:py-32">

            <div className="max-w-7xl mx-auto">

                {/* Section introduction */}
                <div className="max-w-3xl mx-auto text-center mb-14">

                    <p className="font-nunito text-sm uppercase
                        tracking-[0.2em] text-darkgreen mb-5">
                        A little bit of what I've been up to
                    </p>

                    <h1 className="font-gilda text-4xl md:text-6xl
                        text-darkgreen mb-6">
                        Things I've built.
                    </h1>

                    <p className="font-nunito text-base md:text-lg
                        text-brown leading-relaxed">
                        A collection of projects, experiments and things
                        I've enjoyed creating while new languages & technologies.
                        Some are works in progress, others are little ideas
                        brought to life. Don't take everything too seriously!
                    </p>

                </div>


                {/* Search */}
                <div className="max-w-xl mx-auto mb-14">
                    <SearchBar
                        searchTerm={searchTerm}
                        handleSearch={handleSearch}
                        className="w-full"
                    />
                </div>


                {/* Loading state */}
                {isLoading && (
                    <div className="grid grid-cols-1 md:grid-cols-2
                        lg:grid-cols-3 gap-7">

                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="bg-white/60 rounded-xl p-7
                                    animate-pulse space-y-5"
                            >
                                <div className="h-6 bg-darkmint/50
                                    rounded w-2/3" />

                                <div className="h-4 bg-darkmint/40
                                    rounded w-full" />

                                <div className="h-4 bg-darkmint/40
                                    rounded w-4/5" />

                                <div className="flex gap-2 pt-4">
                                    <div className="h-7 w-16 bg-darkmint/40
                                        rounded-full" />
                                    <div className="h-7 w-20 bg-darkmint/40
                                        rounded-full" />
                                </div>
                            </div>
                        ))}

                    </div>
                )}


                {/* Error state */}
                {!isLoading && error && (
                    <div className="text-center py-16">
                        <h2 className="font-gilda text-2xl
                            text-darkgreen mb-3">
                            Oops, something went wrong.
                        </h2>

                        <p className="font-nunito text-brown">
                            I couldn't load the projects right now.
                            Please try again later.
                        </p>
                    </div>
                )}


                {/* Project cards */}
                {!isLoading && !error && (
                    <>
                        {filteredProjects.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2
                                lg:grid-cols-3 gap-7">

                                {filteredProjects.map((project) => (
                                    <article
                                        key={project._id || project.id || project.name}
                                        className="group flex flex-col
                                            bg-white/70 border border-darkmint/50
                                            rounded-xl p-7 md:p-8
                                            shadow-sm hover:shadow-lg
                                            hover:-translate-y-1
                                            transition-all duration-300"
                                    >

                                        {/* Project heading */}
                                        <div className="mb-5">

                                            <div className="flex items-center
                                                justify-between mb-4">

                                                <PiCode
                                                    size={24}
                                                    className="text-green"
                                                    aria-hidden="true"
                                                />

                                                <span className="font-nunito
                                                    text-xs uppercase
                                                    tracking-widest
                                                    text-green">
                                                    Project
                                                </span>

                                            </div>

                                            <h2 className="font-gilda
                                                text-2xl md:text-3xl
                                                text-darkgreen mb-3
                                                group-hover:text-green
                                                transition-colors">
                                                {project.name}
                                            </h2>

                                            <p className="font-nunito
                                                text-brown leading-relaxed">
                                                {project.description}
                                            </p>

                                        </div>


                                        {/* Technologies */}
                                        <div className="flex flex-wrap
                                            gap-2 mt-auto pt-5">

                                            {project.language?.map(
                                                (language) => (
                                                    <span
                                                        key={language}
                                                        className="bg-mint
                                                            text-darkgreen
                                                            px-3 py-1.5
                                                            rounded-full
                                                            text-xs font-nunito
                                                            font-medium"
                                                    >
                                                        {language}
                                                    </span>
                                                )
                                            )}

                                        </div>


                                        {/* Project links */}
                                        <div className="flex items-center
                                            gap-6 border-t border-darkmint/60
                                            mt-7 pt-5">

                                            {project.deployedUrl && (
                                                <a
                                                    href={project.deployedUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`Visit ${project.name} website`}
                                                    className="flex items-center
                                                        gap-2 font-nunito
                                                        text-sm font-medium
                                                        text-darkgreen
                                                        hover:text-green
                                                        transition-colors"
                                                >
                                                    <TbWorldWww size={19} />
                                                    Live Demo
                                                    <PiArrowUpRight size={15} />
                                                </a>
                                            )}

                                            {project.gitUrl && (
                                                <a
                                                    href={project.gitUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`View ${project.name} source code on GitHub`}
                                                    className="flex items-center
                                                        gap-2 font-nunito
                                                        text-sm font-medium
                                                        text-darkgreen
                                                        hover:text-green
                                                        transition-colors"
                                                >
                                                    <FaGithub size={18} />
                                                    GitHub
                                                    <PiArrowUpRight size={15} />
                                                </a>
                                            )}

                                        </div>

                                    </article>
                                ))}

                            </div>
                        ) : (
                            <div className="text-center py-16">

                                <h2 className="font-gilda text-2xl
                                    text-darkgreen mb-3">
                                    Nothing found just yet.
                                </h2>

                                <p className="font-nunito text-brown">
                                    Try another search term and see what turns up.
                                </p>

                            </div>
                        )}
                    </>
                )}

            </div>
        </section>
    );
}

export default ProjectList;
