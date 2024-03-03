import { IoMdMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io"
import { ExpandableNavItem } from "./NavItem"
import { Avatar, AvatarFallback, AvatarImage } from "@/shadui/components/ui/avatar"
import { Link } from "react-router-dom"

const ContactMethod = (props: { link: string, icon: React.ReactNode, value: string }) => {
    return (<>
        <Link to={props.link} target="_blank" className="flex items-center gap-1">
            {props.icon}
            <div className="text-sm font-medium leading-none">{props.value}</div>
        </Link>
    </>)
}

export const ContactNavItem = () => {
    return <ExpandableNavItem title="Contact">
        <div className="flex flex-col w-[350px] md:flex-row md:w-[450px] p-6 gap-6">
            <div className="flex h-full flex-1 select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md pt-6">
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
    </ExpandableNavItem>
}