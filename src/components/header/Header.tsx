import { AboutMeNavItem } from "./items/AboutMeNavItem";
import { WorkExperienceNavItem } from "./items/WorkExperienceNavItem";
import { ResumeNavItem } from "./items/ResumeNavItem";
import { ProjectsNavItem } from "./items/ProjectsNavItem";
import { ContactNavItem } from "./items/ContactNavItem";
import { NavigationMenu, NavigationMenuList } from "@/shadui/components/ui/navigation-menu";

export const Header = () => {
  return <NavigationMenu className="px-6 py-1 w-full justify-center">
    <NavigationMenuList>
      <AboutMeNavItem />
      <WorkExperienceNavItem />
      <ProjectsNavItem />
      <ResumeNavItem />
      <ContactNavItem />
    </NavigationMenuList>
  </NavigationMenu>
}
