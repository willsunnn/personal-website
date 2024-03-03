import { AboutMeContent } from "./AboutMeContent"
import { ProjectsContent } from "./ProjectsContent"
import { WorkExperienceContent } from "./WorkExperienceContent"

export enum HomePageTags {
  ABOUT = "about",
  WORK_EXPERIENCE = "experience",
  PROJECTS = "projects",
}

export const HomePage = () => {
  return (
    <div className="h-[2000px] flex flex-col -mt-[100px]">
      <a className="px-16 bg-[#8bb6a2] pt-64 pb-32" id={HomePageTags.ABOUT}>
        <AboutMeContent />
      </a>

      {/* Transition between backgrounds*/}
      <div className="bg-[#8bb6a2] h-[200px] w-full">
        <svg className="w-full h-[200px] fill-current text-[#8ba4b6]" preserveAspectRatio="none" viewBox="0 -275 935 275">
          <path d="M 0 0 V -101 C 54 -169 78 -174 152 -194 C 360 -226 419 -120 610 -117 C 816 -114 826.6667 -222.3333 935 -275 V 0" />
        </svg>
      </div>

      <a className="px-16 bg-[#8ba4b6] pt-64 pb-64" id={HomePageTags.WORK_EXPERIENCE}>
        <WorkExperienceContent />
      </a>

      {/* Transition between backgrounds*/}
      <div className="bg-[#8ba4b6] h-[200px] w-full">
        <svg className="w-full h-[200px] fill-current text-[#b2adcc]" preserveAspectRatio="none" viewBox="0 -367 1016 369">
          <path d="M 0 0 V -367 C 182 -343 331 -328 486 -271 C 647 -205 836 -166 1016 -179 V 100" />
        </svg>
      </div>

      <a className="px-16 bg-[#b2adcc] pt-32 pb-64" id={HomePageTags.PROJECTS}>
        <ProjectsContent />
      </a>
      <div className="bg-[#b2adcc] h-[200px] w-full" />
    </div>
  )
}