import About from "./Components/About";
import Content from "./Components/Content";
import Navbar from "./Components/Navbar";
import Schedule from "./Components/Schedule";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-10 px-6 bg-gradient-to-r from-transparent via-pink-200 to-transparent">
        <About />
        <Content />
        <Schedule />
      </div>
    </>
  );
}
