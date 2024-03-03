import React from "react"
import { LinkProps } from "react-router-dom"
import { HashLink } from "react-router-hash-link"
import { ExpandableNavItem } from "./NavItem"
import { HomePageTags } from "@/pages/home/HomePage";

const projects: { title: string; href: string; description: string, newTab: boolean }[] = [
    {
        title: "MS Tracker",
        href: "https://ms-tracker.com/about",
        newTab: true,
        description:
            "Web app using firebase for tracking tasks in a korean MMORPG",
    },
    {
        title: "Don't Worry Mom",
        href: "https://github.com/DontWorryMom",
        newTab: true,
        description:
            "Fall detection application using an embedded IOT system",
    },
    {
        title: "Anteater Electric Racing",
        href: "https://sites.uci.edu/anteaterelectric/",
        newTab: true,
        description:
            "Telemetry and control embedded systems on an Electric Racecar",
    },
    {
        title: "TIPPERS Research",
        href: "https://etad.calit2.uci.edu/tippers-testbed-for-iot-based-privacy-preserving-pervasive-spaces/",
        newTab: true,
        description: "IoT system that ingests and sends data using various web protocols",
    },
]

type ProjectItemPreviewProps = React.PropsWithChildren<{ title: string } & LinkProps>

const ProjectItemPreview = (props: ProjectItemPreviewProps) => {
    return (
        <li>
            <HashLink
                to={props.to}
                target={props.target}
                className="block w-64 h-20 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-primary/10 hover:text-accent-foreground focus:bg-primary/20 focus:text-accent-foreground"
            >
                <div className="text-sm font-medium leading-none">{props.title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {props.children}
                </p>
            </HashLink>
        </li>
    )
}

export const ProjectsNavItem = () => {
    return <ExpandableNavItem title="Projects" to={`/home#${HomePageTags.PROJECTS}`}>
        <ul className="grid grid-cols-2 content-evenly justify-items-center w-[576px] h-56 bg-transparent">
            {projects.map((project) => (
                <ProjectItemPreview
                    key={project.title}
                    title={project.title}
                    to={project.href}
                    target={(project.newTab) ? "_blank" : ""}
                >
                    {project.description}
                </ProjectItemPreview>
            ))}
        </ul>
    </ExpandableNavItem>
}