import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="flex z-50 flex-col items-start gap-12">
      {/* Image on the left side */}
      <div className="w-full flex justify-center gap-5 md:justify-start">
        <Image
          src="https://ataaman.github.io/myPortfolio/assets/6563382.png"
          alt="Profile Picture"
          width={150} // Reduced width
          height={150} // Reduced height
          className="rounded-full border border-secondary h-16 w-16 "
        />
        <div className="w-full md:w-2/3 justify-center lg:w-10/12 flex flex-col text-left">
          <p>Aman</p>
          <p className="text-slate-800 font-light dark:text-slate-300">
            Full Stack Developer
          </p>
        </div>
      </div>

      {/* Text content */}
      <div className="">
        <p>About</p>
        <p className="text-slate-800 font-light dark:text-slate-300 mt-2 md:text-base text-primary/80 text-left">
          I&apos;m a Full Stack Developer skilled in React.js, Next.js, Node.js, and
          databases like MongoDB and PostgreSQL. I&apos;m currently enhancing my
          skills in DevOps and System Design to build scalable, efficient
          solutions.
        </p>
      </div>
      
    </div>
  );
};

export default Intro;
