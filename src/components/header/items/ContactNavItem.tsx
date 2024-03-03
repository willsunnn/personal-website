import { IoMdMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io"
import { ExpandableNavItem } from "./NavItem"
import { Avatar, AvatarFallback, AvatarImage } from "@/shadui/components/ui/avatar"
import { Link } from "react-router-dom"

type ContactMethodProps = { link: string, icon: React.ReactNode, value: string }

const ContactMethod = (props: ContactMethodProps) => {
    return (<>
        <Link to={props.link} target="_blank" className="flex items-center gap-1">
            {props.icon}
            <div className="text-sm font-medium leading-none">{props.value}</div>
        </Link>
    </>)
}

const contacts: ContactMethodProps[] = [
    {
        link: "mailto:sunwilliam@gmail.com",
        icon: (<IoMdMail className="mt-[3px]" />),
        value: "sunwilliam@gmail.com"
    },
    {
        link: "https://linkedin.com/in/willsunnn",
        icon: (<IoLogoLinkedin className="mt-[3px]" />),
        value: "willsunnn"
    },
    {
        link: "https://github.com/willsunnn",
        icon: (<IoLogoGithub className="mt-[3px]" />),
        value: "willsunnn"
    },
]

export const ContactNavItem = () => {
    return <ExpandableNavItem title="Contact">
        <div className="flex flex-row flex-1 md:flex-col p-3 gap-6 items-center">
            <Avatar className="w-20 h-20">
                <AvatarImage src="/profile_picture.JPEG" alt="@shadcn" />
                <AvatarFallback>WS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
                {
                    contacts.map(ContactMethod)
                }
            </div>
        </div>
    </ExpandableNavItem>
}