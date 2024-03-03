import React from "react"
import { Link, LinkProps } from "react-router-dom"
import { ExpandableNavItem } from "./NavItem"

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
        href: "/projects/dont-worry-mom",
        newTab: false,
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
            <Link
                to={props.to}
                target={props.target}
                className="block w-64 h-20 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
            >
                <div className="text-sm font-medium leading-none">{props.title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {props.children}
                </p>
            </Link>
        </li>
    )
}

export const ProjectsNavItem = () => {
    return <ExpandableNavItem title="Projects" to="/projects">
        <ul className="grid grid-cols-2 content-evenly justify-items-center w-[576px] h-56">
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