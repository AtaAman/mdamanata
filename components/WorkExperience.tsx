import { Bot, GraduationCap } from "lucide-react";
import React from "react";

const workExperiences = [
  {
    title: "Founder",
    company: "EmaanStream",
    companyUrl: "https://www.emaanstram.com/",
    date: "October, 2024 - Present",
    description:
      "Founder of EmaanStream, developing an educational platform for authentic podcasts, nasheeds, and religious bayans.",
    isLatest: true,
  },
  {
    title: "Full Stack Developer",
    company: "Building Projects",
    companyUrl: "https://github.com/ataaman",
    date: "Nov, 2023 - Present",
    description:
      "Gained development experience by building projects and now bubilding products. Actively seeking remote freelance or full-time opportunities.",
    isLatest: false,
  },
];

const educationExperiences = [
  {
    title: "Full Stack Cohort",
    institution: "100xdev",
    institutionUrl: "https://app.100xdevs.com/home",
    date: "Nov 2023 - Present",
    description:
      "Participating in an intensive program focused on end-to-end full stack development, including React, Next.js, Node.js, PostgreSQL, Prisma, and AWS. The cohort also emphasizes continuous learning in DevOps, system design, open source contributions, and data structures and algorithms.",
    isLatest: true,
  },
  {
    title: "Bachelor of Engineering Computer in Science",
    institution: "Chandigarh University",
    institutionUrl: "https://www.cuchd.in/",
    date: "2019 - 2023",
    description:
      "Completed a four-year program that provided a strong technological foundation and hands-on experience through project building. This education has equipped me with the skills to effectively navigate and contribute to the tech industry",
    isLatest: false,
  },
];

interface Experience {
  title: string;
  company?: string | null;
  companyUrl?: string | null;
  institution?: string;
  institutionUrl?: string;
  date: string;
  description: string;
  isLatest: boolean;
}

const ExperienceItem = ({
  experience,
  icon,
}: {
  experience: Experience;
  icon: React.ReactNode;
}) => (
  <li className="mb-8 sm:mb-10 ms-4 sm:ms-6">
    <span className="absolute flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 bg-secondary rounded-full -start-2.5 sm:-start-3 ring-4 sm:ring-8 ring-secondary dark:ring-secondary dark:bg-secondary">
      {icon}
    </span>
    <h3 className="flex flex-wrap ml-1 items-center mb-1 text-base sm:text-lg font-medium text-primary dark:text-primary">
      {experience.title}
      {(experience.company || experience.institution) && (
        <>
          <a
            href={experience.companyUrl || experience.institutionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 mx-1"
          >
            {experience.company || experience.institution}
          </a>
        </>
      )}
      {experience.isLatest && (
        <span className="bg-secondary text-xs sm:text-sm font-medium me-2 px-2 py-0.5 rounded dark:bg-secondary dark:text-primary ms-0 sm:ms-3 mt-1 sm:mt-0">
          Latest
        </span>
      )}
    </h3>
    <time className="block mb-2 text-xs sm:text-sm font-normal leading-none text-primary/80">
      {experience.date}
    </time>
    <p className="mb-4 text-sm sm:text-base font-normal text-primary/70">
      {experience.description}
    </p>
  </li>
);

const ExperienceSection = ({
  title,
  experiences,
  icon,
}: {
  title: string;
  experiences: Experience[];
  icon: React.ReactNode;
}) => (
  <div className="flex flex-col gap-4">
    <h2 className="text-xl font-medium">{title}</h2>
    <div className="px-2 sm:px-6">
      <ol className="relative border-s border-primary/50 dark:border-primary/70">
        {experiences.map((experience, index) => (
          <ExperienceItem key={index} experience={experience} icon={icon} />
        ))}
      </ol>
    </div>
  </div>
);

const WorkAndEducation = () => {
  return (
    <div className="flex flex-col gap-8">
      <ExperienceSection
        title="Experience"
        experiences={workExperiences}
        icon={<Bot size={14} className="sm:w-4 font-semibold sm:h-4" />}
      />
      <ExperienceSection
        title="Education"
        experiences={educationExperiences}
        icon={<GraduationCap size={14} className="sm:w-4 sm:h-4" />}
      />
    </div>
  );
};

export default WorkAndEducation;
