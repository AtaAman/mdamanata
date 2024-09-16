import React from "react";
import { Badge } from "./ui/badge";

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex ml-5  min-h-0 flex-col gap-y-3">
        <h2 className="text-xl font-medium">Skills</h2>
        <div className="flex  flex-wrap gap-2">
          {DATA.skills.map((skill, i) => (
            <Badge
              className="bg-primary-foreground bg-[#ecebeb] dark:bg-[#121212] px-2 py-1 rounded-sm text-primary cursor-pointer hover:bg-secondary hover:shadow-sm"
              key={i}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

const DATA = {
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "ShadCN",
    "React Native",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL (Postgres)",
    "Prisma",
    "Appwrite",
    "REST APIs",
    "SQL",
    "OOPs",
    "Git",
    "Vercel",
    "GitHub",
    "VS Code",
  ],
};
