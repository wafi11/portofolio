import { IoLocation } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { IoSchool } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { motion } from "framer-motion";

const Biodata = () => {
  return (
    <div className="min-h-[400px] w-full jutify-center items-center py-12 border-y-[5px]  border-slate-700">
      <h1 className="text-2xl text-gray-400 text-center">Personal Details</h1>
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4  justify-center h-full w-full items-center text-center gap-10 lg:pt-0 pt-7">
          <motion.button className="flex flex-col justify-center items-center gap-4 ">
            <MdAccountCircle className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full  bg-violet-400" />
            <p className="text-gray-200">Moh. Wafiuddin Wafiq</p>
          </motion.button>
          <motion.button className="flex flex-col items-center gap-4 ">
            <IoLocation className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full  bg-yellow-400" />
            <p className="text-gray-200">Jakarta, indonesia</p>
          </motion.button>
          <motion.button className="flex flex-col  items-center text-gray-200  relative">
            <IoSchool
              className="text-4xl text-black h-12 w-12 shadow-sm p-4  bottom-0 rounded-full  bg-green-400"
              style={{ transform: "translateY(23px)" }}
            />
            <p className="flex flex-col mt-10">
              Ma Muallimin Muh Yogyakarta
              <span>2016-2020</span>
            </p>
          </motion.button>
          <motion.button className="flex flex-col items-center gap-4 ">
            <MdComputer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-blue-400" />
            <p className="text-gray-200">Web Developer</p>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
