import { IoMdMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io"
import { HashLink } from "react-router-hash-link"

export const CONTACT_LIST: ContactMethodProps[] = [
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

export type ContactMethodProps = { link: string, icon: React.ReactNode, value: string }

export const ContactMethod = (props: ContactMethodProps) => {
    return <HashLink to={props.link} target="_blank" className="flex items-center gap-1" key={props.link}>
        {props.icon}
        <div className="text-sm font-medium leading-none">{props.value}</div>
    </HashLink>
}

export const ContactList = () => {
    return <div className="flex flex-col gap-0.5">
        {
            CONTACT_LIST.map(ContactMethod)
        }
    </div>
}