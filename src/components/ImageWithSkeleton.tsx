import { cn } from "@/shadui/lib/utils"
import React from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export type ImageWithSkeletonProps = {
    className?: string,
    src: string,
    onLoad?: () => void
}

export const ImageWithSkeleton = (props: ImageWithSkeletonProps) => {
    const [loaded, setLoaded] = React.useState<boolean>(false)
    const imgVisibility = (loaded) ? "" : "hidden"
    const skeletonVisibility = (loaded) ? "hidden" : ""

    const onLoad = () => {
        setLoaded(true)
        if (props.onLoad) {
            props.onLoad()
        }
    }

    return (<>
        <img className={cn(props.className, imgVisibility)} src={props.src} onLoad={onLoad} />
        <Skeleton className={cn(props.className, skeletonVisibility, "opacity-60")} />
    </>)
}