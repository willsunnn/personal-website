import { cn } from "@/shadui/lib/utils"
import { HiExternalLink } from "react-icons/hi"
import { Link } from "react-router-dom"

export type StartConnector = "connect" | "no_connect"
export type EndConnector = "connect" | "no_connect" | "ellipsis_connect"

export type TitleAndTime = {
    title: string,
    range: string
}

export type BulletedItem = React.PropsWithChildren<{
    name: string,
    link: string,
    titles: TitleAndTime[],
    location: string,
    description: string[],
}>

export type BulletedItemProps = BulletedItem & {
    startConnector: StartConnector,
    endConnector: EndConnector,
}

export const determineConnectors = (items: BulletedItem[]): BulletedItemProps[] => {
    return items.map((item, index, arr) => ({
        ...item,
        startConnector: (index == 0) ? "no_connect" : "connect",
        endConnector: (index == arr.length - 1) ? "no_connect" : "connect"
    }))
}

export const BulletedItem = (props: BulletedItemProps) => {
    const startConnectorVisibility = props.startConnector === "connect" ? "visible" : "invisible"
    const endConnectorVisibility = props.endConnector === "connect" ? "visible" : "invisible"
    return (
        <div className="flex flex-row gap-2">
            {/* The dots and connectors on the left side*/}
            <div className="flex flex-col w-6 h-page">
                <div className={cn("bg-black h-2 w-0.5 ml-1.5 -mb-0.5", startConnectorVisibility)} />
                <svg className="w-full h-3.5">
                    <circle cx="7" cy="7" r="6" stroke-width="2" stroke="black" fill="none" className="w-4 h-4" />
                </svg>
                <div className={cn("bg-black flex-1 w-0.5 ml-1.5 -mt-0.5", endConnectorVisibility)} />
            </div>

            {/* The content of the bulleted item*/}
            <div className="flex flex-col pt-0 pb-16 w-full">

                {/* The name & location of the position */}
                <div className="flex flex-row items-center">
                    <Link to={props.link} target={"_blank"} className="hover:underline flex flex-row gap-1 items-center">
                        <h2 className="text-lg font-bold">{props.name}</h2>
                        <HiExternalLink />
                    </Link>
                    <div className="flex-1" />
                    <div className="text-sm">{props.location}</div>
                </div>

                {/* The titles of each position */}
                <div className="pl-4 flex flex-col pt-3">
                    {
                        props.titles.map((title) => {
                            return (
                                <div className="flex flex-row items-center">
                                    <div className="flex-1 text-base font-semibold">{title.title}</div>
                                    <div className="text-sm">{title.range}</div>
                                </div>)
                        })
                    }
                </div>

                {/* The description */}
                <div className="pl-4 flex flex-col pt-3">
                    {
                        props.description.map((line) => {
                            return (
                                <div className="flex flex-row content-start items-start justify-start">
                                    <svg className="w-2 h-2 mt-2 mr-2">
                                        <circle cx="2" cy="2" r="2" fill="black" className="w-2 h-2" />
                                    </svg>
                                    <div className="text-sm">{line}</div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </div >
    )
}

export const BulletedItemList = (props: { items: BulletedItemProps[] }) => {
    return <div className="flex flex-col">
        {
            props.items.map(BulletedItem)
        }
    </div>
}