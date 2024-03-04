import { Avatar, AvatarFallback, AvatarImage } from "@/shadui/components/ui/avatar"
import { ContactList } from "../../components/ContactMethod"
import { Separator } from "@/shadui/components/ui/separator"

export const Footer = () => {
  return <div className="flex flex-col items-center w-full py-6">
    <Separator className="w-2/3 bg-foreground" />
    <div className="flex flex-row items-center w-full gap-6 py-12">
      <div className="flex-1" />
      <div className="flex h-full select-none flex-col justify-end rounded-md no-underline outline-none focus:shadow-md w-64">
        <div className="mb-2 mt-4 text-base font-semibold text-foreground">
          William Sun
        </div>
        <p className="text-xs leading-tight text-foreground">
          Backend Software Engineer with experience in REST APIs and Event-Driven Microservices
        </p>
      </div>
      <Avatar className="w-20 h-20">
        <AvatarImage src="/profile_picture.JPEG" alt="@shadcn" />
        <AvatarFallback>WS</AvatarFallback>
      </Avatar>
      <ContactList />
      <div className="flex-1" />
    </div>
  </div >
}
