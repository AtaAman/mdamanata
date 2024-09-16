import { Code, Globe } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

interface ProjectProps {
  image: string;
  name: string;
  techStack: string[];
  shortDesc: string;
  date: string;
  Github: string;
  LiveLink: string;
}

function ProjectCard({
  name,
  image,
  date,
  shortDesc,
  tags,
  Github,
  LiveLink,
}: {
  i: number;
  name: string;
  image: string;
  date: string;
  shortDesc: string;
  tags: string[];
  Github: string;
  LiveLink: string;
}) {
  return (
    <>
      <div className="max-w-sm mb-10 rounded-lg dark:bg-[#121212] bg-[#ebebeb] hover:shadow-md flex flex-col justify-between mx-auto border border-primary/10 duration-100 py-4 px-3">
        <div>
          <div>
            <Image
              width={900}
              height={900}
              className="rounded-lg"
              src={image}
              alt=""
            />
          </div>
          <div className="text-xs text-primary/70 mb-2 mt-1">{date}</div>
          <h3 className="text-lg font-semibold text-primary mb-2">{name}</h3>
          <div className="text-xs text-primary/70">
            <div>{shortDesc}</div>
          </div>

        </div>
        <div>
          <div className="flex flex-wrap gap-2 my-4">
            {tags.map((e: string) => {
              return (
                <div
                  key={e}
                  className="text-xs text-primary rounded-md bg-secondary px-2 py-1"
                >
                  {e}
                </div>
              );
            })}
          </div>
          <div className="flex gap-2">
            <Link target="_blank" className="flex gap-2" href={LiveLink}>
              <div className="bg-secondary hover:bg-secondary/80 flex gap-2 items-center  text-primary w-fit px-3 py-1.5  rounded-md  text-xs">
                {" "}
                <Globe size={16} /> Website
              </div>
            </Link>

            <Link target="_blank" className="flex gap-2" href={Github}>
              <div className="bg-secondary hover:bg-secondary/80 flex gap-2 items-center  text-primary w-fit px-3 py-1.5  rounded-md  text-xs">
                {" "}
                <Code size={16} />
                Code
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const Projects = () => {
  const data: ProjectProps[] = [
    {
      image: "https://portfolio-aman-ata.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvtube.261649a8.png&w=750&q=75",
      name: "Vtube - A video platform",
      techStack: ["Reactjs", "MongoDB", "JavaScript", "Express", "TailwindCSS","Redux"],
      shortDesc:
        "A video platform like YouTube with streaming, tweets, likes, comments, infinite scrolling, subscriptions, and post editing. It features JWT authentication and optimized data operations.",
      date: "August 2024",
      Github: "https://github.com/AtaAman/vtube",
      LiveLink: "https://vtube-gamma.vercel.app//",
    },
    {
      image:
        "https://portfolio-aman-ata.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftaqwa.bb11f33b.png&w=750&q=75",
      name: "Taqwa - A social media app",
      techStack: ["Reactjs", "TypeScript", "Appwrite", "Cloudinary", "Responsive"],
      shortDesc:
        "A social media app similar to Instagram, using React, TypeScript, Appwrite, and Cloudinary for photo sharing, user interactions, and real-time updates.",
      date: "May 2024",
      Github: "https://github.com/AtaAman/taqwa",
      LiveLink: "https://al-taqwa.vercel.app/",
    },
  ];

  return (
    <section id="projects">
      <div className="space-y-12 w-full pt-12">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-secondary text-primary px-3 py-2 text-sm">
              My Projects
            </div>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve had the opportunity to work on a range of projects, from basic websites to intricate web applications. Here are some of my top picks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-[800px] mx-auto">
          {data.map((project, idx) => (
            <ProjectCard
              key={idx}
              i={idx}
              name={project.name}
              image={project.image}
              date={project.date}
              shortDesc={project.shortDesc}
              tags={project.techStack}
              Github={project.Github}
              LiveLink={project.LiveLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
