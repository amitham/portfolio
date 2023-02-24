import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: Math.random(0, 10000),
        title: "React Space",
        description: "Chakra UI provides prebuild components to help you build your projects faster. Here is an overview of the component categories:",
        getImageSrc: () => require("../images/project01.jpg")
    },
    {   
        id: Math.random(0, 10000),
        title: "React Infinite Scroll",
        description: "Chakra UI provides prebuild components to help you build your projects faster. Here is an overview of the component categories:",
        getImageSrc: () => require("../images/project02.png")
    },
    {   
        id: Math.random(0, 10000),
        title: "Photo Gallery",
        description: "Chakra UI provides prebuild components to help you build your projects faster. Here is an overview of the component categories:",
        getImageSrc: () => require("../images/project03.jpg")
    },
    {   
        id: Math.random(0, 10000),
        title: "Event Planner",
        description: "Chakra UI provides prebuild components to help you build your projects faster. Here is an overview of the component categories:",
        getImageSrc: () => require("../images/project03.jpg")
    }
]

const ProjectSection = () => {
    return (
        <FullScreenSection
            backgroundColor="#14532d"
            isDarkBackground
            p={8}
            alignItems="flex-start"
            spacing={8}
        >
            <Heading as="h1" id="projects-section">
                Featured Projects
            </Heading>
            <Box
                display="grid"
                gridTemplateColumns="repeat(2,minmax(0,1fr))"
                gridGap={8}
            >
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        url=""
                        imageSrc={project.getImageSrc}
                    />
                ))}
            </Box>
        </FullScreenSection>
    )
}

export default ProjectSection;