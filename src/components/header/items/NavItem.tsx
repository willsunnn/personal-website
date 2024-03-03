import { Button } from "@/shadui/components/ui/button"
import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@/shadui/components/ui/navigation-menu"
import { Link } from "react-router-dom"

type OptionalLinkProps = React.PropsWithChildren<{ to?: string, target?: string }>

const OptionalLink = (props: OptionalLinkProps) => {
    if (props.to === undefined) {
        return props.children
    } else {
        return <Link to={props.to} target={props.target}>
            {props.children}
        </Link>
    }
}

type SimpleNavItemProps = { title: React.ReactNode, to?: string, openLinkInNewTab?: boolean }

export const SimpleNavItem = (props: SimpleNavItemProps) => {
    return <NavigationMenuItem>
        <OptionalLink to={props.to} target={(props.openLinkInNewTab) ? "_blank" : ""} >
            <Button variant="link">{props.title}</Button>
        </OptionalLink>
    </NavigationMenuItem>
}


type ExpandableNavItemProps = React.PropsWithChildren<SimpleNavItemProps>

export const ExpandableNavItem = (props: ExpandableNavItemProps) => {
    return (
        <NavigationMenuItem>
            <NavigationMenuTrigger>
                <OptionalLink to={props.to} target={(props.openLinkInNewTab) ? "_blank" : ""} >
                    <Button variant="link">{props.title}</Button>
                </OptionalLink>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="w-fit p-2">
                {props.children}
            </NavigationMenuContent>
        </NavigationMenuItem>
    )
}