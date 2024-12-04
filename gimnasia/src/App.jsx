import About from "./Components/About";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Galery from "./Components/Galery";
import Navbar from "./Components/Navbar";
import Schedule from "./Components/Schedule";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="py-3 max-w-7xl mx-auto pt-10 px-6 bg-gradient-to-r from-transparent via-pink-200 to-transparent">
        <About />
        <Content />
        <Schedule />
        <Galery />
      </div>
      <div className="mx-auto py-5 px-6 bg-[#8E4F6E]">
        <Footer />
      </div>
    </>
  );
}
