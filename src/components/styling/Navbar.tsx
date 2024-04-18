import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center bg-slate-900 text-white pt-2">
      <div className="container flex gap-5">
        <button className="text-lg font-light tex-gray-200  rounded-full">
          <FaGithub size={30} />
        </button>
        <button className="text-lg font-light text-blue-700 rounded-full">
          <FaFacebook size={30} />
        </button>
        <button className="  font-light rounded-full">
          <FaInstagram size={30} className="instagram " />
        </button>
        <button className="text-lg font-light text-blue-700 rounded-full">
          <FaLinkedin size={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
