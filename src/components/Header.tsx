import * as React from "react"
import { cn } from "@/shadui/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/shadui/components/ui/navigation-menu"
import { Card, CardContent } from "@/shadui/components/ui/card"
import { Link } from "react-router-dom"
import { IoMdMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/shadui/components/ui/avatar"

export const Header = () => {
  return <Card className="rounded-xl">
    <CardContent className="p-2 flex flex-row w-full">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/about">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Me
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/experience">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Work Experience
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/projects">
              <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            </Link>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {projects.map((project) => (
                  <ListItem
                    key={project.title}
                    title={project.title}
                    href={project.href}
                    target={(project.newTab) ? "_blank" : ""}
                  >
                    {project.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/resume">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Resume
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Contact</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="flex flex-col w-[350px] md:flex-row md:w-[450px] p-6 gap-6">
                <div
                  className="flex h-full flex-1 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md pt-6"
                >
                  <div className="mb-2 mt-4 text-lg font-medium">
                    William Sun
                  </div>
                  <p className="text-sm leading-tight text-muted-foreground">
                    Backend Software Engineer with experience in RESTful APIs and Event-Driven-Architecture
                  </p>
                </div>

                <div className="flex flex-row flex-1 md:flex-col p-3 gap-6 items-center">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/profile_picture.JPEG" alt="@shadcn" />
                    <AvatarFallback>WS</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-0.5">
                    <ContactMethod link="mailto:sunwilliam@gmail.com" icon={<IoMdMail className="mt-[3px]" />} value="sunwilliam@gmail.com" />
                    <ContactMethod link="https://linkedin.com/in/willsunnn" icon={<IoLogoLinkedin className="mt-[3px]" />} value="willsunnn" />
                    <ContactMethod link="https://github.com/willsunnn" icon={<IoLogoGithub className="mt-[3px]" />} value="willsunnn" />
                  </div>
                </div>

              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </CardContent>
  </Card>
}

const ContactMethod = (props: { link: string, icon: React.ReactNode, value: string }) => {
  return (<>
    <Link to={props.link} target="_blank" className="flex items-center gap-1">
      {props.icon}
      <div className="text-sm font-medium leading-none">{props.value}</div>
    </Link>
  </>)
}

const projects: { title: string; href: string; description: string, newTab: boolean }[] = [
  {
    title: "MS Tracker",
    href: "https://ms-tracker.com/about",
    newTab: true,
    description:
      "A multipage web app for scheduling and tracking tasks in a korean MMORPG",
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
    description: "IoT system that ingests and forwards data through multiple web protocols",
  },
]

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

