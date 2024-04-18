import Banner from "./components/styling/Banner";
import Navbar from "./components/styling/Navbar";
import Biodata from "./components/styling/Biodata";
import Skills from "./components/styling/Skills";
import { Project } from "./components/styling/Project";

function App() {
  return (
    // <div className="">
    <div className=" mx-auto sm:p-5 overflow-hidden ">
      <Navbar />
      <Banner />
      <Biodata />
      <Skills />
      <Project />
    </div>
    // </div>
  );
}

export default App;
