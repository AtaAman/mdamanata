import Contact from "@/components/Contact";
import Intrest from "@/components/Intrest";
import Intro from "@/components/Intro";
import Projects from "@/components/ProjectCard";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="relative lg:w-7/12 w-full mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 md:p-20 overflow-x-hidden">
      <main className="flex flex-col gap-8 px-2 row-start-2 items-center md:items-start w-full overflow-hidden">
        <Intro />
        <Projects />
        <WorkExperience />
        <Skills />
        <Intrest/>
        <Contact />
      </main>
    </div>
  );
}
