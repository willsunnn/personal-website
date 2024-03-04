import { Badge } from "@/shadui/components/ui/badge"
import { cn } from "@/shadui/lib/utils"
import { OptionalLink } from "./OptionalLink"

export type Skill = {
    name: string,
    icon?: React.ReactNode
    link?: string,
}

export const SkillBadge = (props: { skill: Skill }) => {

    return <OptionalLink to={props.skill.link} newTab={true}>
        <Badge variant="secondary" className="bg-secondary/80 hover:bg-secondary/60 gap-2 px-3 py-2" >
            {props.skill.icon && <div className="w-4 h-4">{props.skill.icon}</div>}
            <div>{props.skill.name}</div>
        </Badge >
    </OptionalLink>
}


export const SkillList = (props: { skills: Skill[], className?: string }) =>
    <div className={cn("flex flex-row gap-2 flex-wrap justify-center", props.className)}>
        {
            props.skills.map((s) => <SkillBadge skill={s} key={s.name} />)
        }
    </div>