import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Plans from "./components/Plans";
import About from "./components/About";
// import Nurse from "./Layouts/NurseCard";
import Perawat from "./components/Perawat";
import Contact from "./components/Contact"
import Footer from "./components/Footer";

export default function App() {
  return (
   <div className="container">
    <Navbar/>
    <main>
      <div className="" id="home">
        <Home/>
      </div>
      <div className="" id="plans">
        <Plans/>
      </div>
      <div className="" id="about">
        <About/>
      </div>
      <div id="perawat">
        <Perawat/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
      <div id="footer">
        <Footer/>
      </div>
    </main>
   </div>
  )
}