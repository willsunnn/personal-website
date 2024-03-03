import { buttonVariants } from "@/shadui/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/shadui/components/ui/hover-card"

import { HashLink } from "react-router-hash-link"

type OptionalLinkProps = React.PropsWithChildren<{ to?: string, target?: string }>

const OptionalLink = (props: OptionalLinkProps) => {
    if (props.to === undefined) {
        return props.children
    } else {
        return <HashLink to={props.to} target={props.target}>
            {props.children}
        </HashLink>
    }
}

type SimpleNavItemProps = { title: React.ReactNode, to?: string, openLinkInNewTab?: boolean }

export const SimpleNavItem = (props: SimpleNavItemProps) => {
    return <OptionalLink to={props.to} target={(props.openLinkInNewTab) ? "_blank" : undefined} >
        <div className={buttonVariants({ variant: "link" })}>{props.title}</div>
    </OptionalLink>
}


type ExpandableNavItemProps = React.PropsWithChildren<SimpleNavItemProps>

export const ExpandableNavItem = (props: ExpandableNavItemProps) => {
    return (
        <HoverCard openDelay={50} closeDelay={100}>
            <HoverCardTrigger href={props.to} target={(props.openLinkInNewTab) ? "_blank" : ""}>
                <div className={buttonVariants({ variant: "link" })}>{props.title}</div>
            </HoverCardTrigger>
            <HoverCardContent className="w-fit p-2 m-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-none">
                {props.children}
            </HoverCardContent>
        </HoverCard>
    )
}