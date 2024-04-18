import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import img1 from "../../assets/ss1.png";
import img2 from "../../assets/ss2.png";
import img3 from "../../assets/ss3.png";

export const dataProject = [
  {
    title: "ViteStore",
    link: "http://203.194.114.22:3002/",
    Icon: [FaReact, SiTailwindcss],
    src: img3,
  },
  {
    title: "NextTravel",
    link: "http://203.194.114.22:3001/",
    Icon: [FaReact, SiTailwindcss, SiTypescript],
    src: img2,
  },
  {
    title: "Bloganime",
    link: "http://203.194.114.22:3000/",
    Icon: [FaReact, SiTailwindcss, SiTypescript],
    src: img1,
  },
];

export const Project = () => {
  return (
    <div className="h-full w-full jutify-center items-center  border-t-[5px] border-slate-700">
      <div className="container flex flex-col justify-center items-center gap-3 py-12">
        <h1 className="text-3xl font-bold text-[#0284c7] text-center">
          My Projects
        </h1>
        <p className="text-xl text-gray-400">
          It is a project that I have worked on and learned.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 lg:gap-10  items-center">
          {dataProject.map((item) => (
            <CardContainer className="inter-var" key={item.title}>
              <CardBody
                className="bg-slate-700  relative group/card  group dark:hover:shadow-2xl
                 hover:shadow-emerald-500/[0.1] dark:bg-black h-auto 
            w-auto sm:w-[30rem] rounded-xl p-6  hover:ring-2 ring-[#0284c7] hover:bg-[#0284c7]">
                <a href={item.link}>
                  <img
                    src={item.src}
                    className="h-60 w-full  object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                  <div className="flex justify-center  items-center text-center py-5">
                    <CardItem className="text-2xl font-bold text-center justify-center items-center group-hover:text-gray-200">
                      {item.title}
                    </CardItem>
                  </div>
                  <p className=" flex gap-3 group-hover:text-gray-200">
                    {item.Icon.map((Icon, index) => (
                      <Icon key={index} size={30} />
                    ))}
                  </p>
                </a>
              </CardBody>
              j
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
