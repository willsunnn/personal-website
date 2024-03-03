import { ExpandableNavItem } from "./NavItem"
import { Avatar, AvatarFallback, AvatarImage } from "@/shadui/components/ui/avatar"
import { CONTACT_LIST, ContactMethod } from "@/components/ContactMethod"

export const ContactNavItem = () => {
    return <ExpandableNavItem title="Contact">
        <div className="flex flex-row flex-1 md:flex-col p-3 gap-6 items-center">
            <Avatar className="w-20 h-20">
                <AvatarImage src="/profile_picture.JPEG" alt="@shadcn" />
                <AvatarFallback>WS</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-0.5">
                {
                    CONTACT_LIST.map(ContactMethod)
                }
            </div>
        </div>
    </ExpandableNavItem>
}