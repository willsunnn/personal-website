import { HashLink } from "react-router-hash-link"

export type OptionalLinkProps = React.PropsWithChildren<{ to?: string, newTab?: boolean }>

export const OptionalLink = (props: OptionalLinkProps) => {
    if (props.to === undefined) {
        return props.children
    } else {
        return <HashLink to={props.to} target={(props.newTab) ? "_blank" : undefined}>
            {props.children}
        </HashLink>
    }
}
