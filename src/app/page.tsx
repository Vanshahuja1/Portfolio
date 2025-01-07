// import Image from "next/image";
import { Navbar } from '@/sections/navbar';
import { AboutMe } from '@/sections/aboutMe';
import { Projects } from '@/sections/projects';
import { AchievementsSection } from '@/sections/achivements';
export default function Home() {
  return (
    <>
    <Navbar/>
    <AboutMe/>
    <Projects/>
    <AchievementsSection/>
    </>
    
  );
}
