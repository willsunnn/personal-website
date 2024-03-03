import { AboutMeNavItem } from "./items/AboutMeNavItem";
import { WorkExperienceNavItem } from "./items/WorkExperienceNavItem";
import { ResumeNavItem } from "./items/ResumeNavItem";
import { ProjectsNavItem } from "./items/ProjectsNavItem";
import { ContactNavItem } from "./items/ContactNavItem";

export const Header = () => {
  return <div className="flex flex-row px-6 py-1 w-full justify-center">
    <AboutMeNavItem />
    <WorkExperienceNavItem />
    <ProjectsNavItem />
    <ResumeNavItem />
    <div className="flex-1" />
    <ContactNavItem />
  </div>
}
