import About from "./Components/About";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6 ">
        <About />
      </div>
    </>
  );
}
