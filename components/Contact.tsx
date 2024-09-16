import { FaDownload, FaEnvelope } from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center text-center mb-10">
      <div className="space-y-3">
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="/Resume.pdf"
            download="resume.pdf"
            className="flex items-center rounded-lg bg-secondary text-primary px-4 py-2 text-sm hover:bg-secondary/80 transition duration-150"
          >
            <FaDownload size={16} className="mr-2" />
            Resume
          </a>

          <div className="flex items-center rounded-lg bg-secondary text-primary px-4 py-2 text-sm hover:bg-secondary/80 transition duration-150">
            <FaEnvelope size={16} className="mr-2" />
            <a
              href="mailto:mdamanata8@gmail.com"
              className="hover:underline flex items-center gap-1"
            >
              Contact
            </a>{" "}
          </div>
        </div>

        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Want to chat? Reach me directly via mail
          <a
            href="mailto:mdamanata8@gmail.com"
            className="text-blue-500 hover:underline flex items-center gap-1"
          ></a>{" "}
          or contact me through social media!
        </p>
      </div>
    </div>
  );
};

export default Contact;
