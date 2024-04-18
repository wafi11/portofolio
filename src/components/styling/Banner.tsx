import { motion } from "framer-motion";

import { cn } from "../utils/cn";
import { BackgroundBeams } from "../ui/background-beams";
import { Typewriter } from "react-simple-typewriter";
import profile from "../../assets/wafi (1).png";

const Banner = () => {
  const kata = ["Web Developer", "Web Designer"];
  return (
    <div className="h-[800px] mx-auto px-4 py-8  lg:py-40 relative  items-center">
      <div className="container flex flex-col-reverse gap-20 lg:flex-row justify-between py-20 items-center">
        <div className="justify-center items-center grid w-[600px]">
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className={cn(
              "text-xl sm:text-3xl  md:text-4xl lg:text-5xl text-gray-200/50 z-20 pb-2 tracking-wide w-full"
            )}>
            Hi,Everyone
          </motion.h1>
          <div
            className="text-3xl block gap-4 justify-center items-center
            md:text-4xl lg:text-6xl text-[#0284c7] tracking-wide font-bold w-full">
            <motion.h3
              initial={{ opacity: 0.5, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className={cn(
                "text-3xl  justify-center items-center  md:text-4xl lg:text-5xl text-gray-200/50 tracking-wide"
              )}>
              Iam wafiuddin as a
            </motion.h3>
            <Typewriter
              words={kata}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
        </div>
        <div className="w-72 h-72 flex gap-3 translate-x-0  justify-center items-center">
          <img
            src={profile}
            alt="../"
            className="w-full h-full  object-cover rounded-full brightness-75 ring-2 ring-inherit"
          />

          <div className="glow absolute top-[50%] right-1/2 -z-10 "></div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Banner;
