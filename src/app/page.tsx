// import Image from "next/image";
import { Navbar } from '@/sections/navbar';
import { AboutMe } from '@/sections/aboutMe';
import { Projects } from '@/sections/projects';
import { AchievementsSection } from '@/sections/achivements';
import { Skills } from '@/sections/skills';
export default function Home() {
  return (
    <>
    <Navbar/>
    <AboutMe/>
    <Skills/>
    <Projects/>
    
    <AchievementsSection/>
    </>
    
  );
}
