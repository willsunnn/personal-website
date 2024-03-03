import { HomePageTags } from "@/pages/home/HomePage";
import { SimpleNavItem } from "./NavItem";

export const AboutMeNavItem = () => <SimpleNavItem title="About Me" to={`/home#${HomePageTags.ABOUT}`} />
