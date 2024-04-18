import { BsGithub } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { FaHtml5, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiPrisma, SiTailwindcss } from "react-icons/si";
import { HoverEffect } from "../ui/card-hover-effect";
import { GrCss3 } from "react-icons/gr";
import { LiaNodeJs } from "react-icons/lia";

const Skills = () => {
  const dataSkils = [
    {
      title: "Html",
      icon: FaHtml5,
    },
    {
      title: "React",
      icon: FaReact,
    },
    {
      title: "Next Js",
      icon: SiNextdotjs,
    },
    {
      title: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      title: "Prisma",
      icon: SiPrisma,
    },
    {
      title: "Git",
      icon: BsGithub,
    },
    {
      title: "Javascript",
      icon: DiJavascript,
    },
    {
      title: "Css",
      icon: GrCss3,
    },
    {
      title: "Node Js",
      icon: LiaNodeJs,
    },
  ];
  return (
    <div className="p-20 pb-10 h-full border-b-[5px] border-gray-800">
      <div className="container justify-center items-center">
        <h1 className="text-4xl font-bold text-center text-[#0284c7] tracking-wide">
          Skills
        </h1>
        <div>
          <HoverEffect items={dataSkils} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
