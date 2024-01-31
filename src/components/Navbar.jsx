import { Link } from "react-scroll";
import { AlignJustify, MessageCircleHeart } from "lucide-react";
import { useState } from "react";
import { Button } from "../Layouts/Button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="container md:fixed flex justify-between flex-row md:px-32 px-5 gap-16 mt-3">
        <Link to="/" className=" flex items-center p-2 cursor-pointer">
          <h1 className="flex text-2xl font-semibold text-brightRed">
            Ners
            <span className="inline text-green-700 -mt-3">
              <MessageCircleHeart />
            </span>
          </h1>
        </Link>
        <nav className="hidden md:flex items-center p-2 gap-2">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightRed transition-all cursor-pointer py-2 px-4 te rounded-3xl outline-brightRed hover:border-brightRed hover:border"
          >
            Home
          </Link>
          <Link
            to="plans"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightRed transition-all cursor-pointer py-2 px-4 te rounded-3xl outline-brightRed hover:border-brightRed hover:border"
          >
            Plans
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightRed transition-all cursor-pointer py-2 px-4 te rounded-3xl outline-brightRed hover:border-brightRed hover:border"
          >
            About
          </Link>
          <Link
            to="perawat"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightRed transition-all cursor-pointer py-2 px-4 te rounded-3xl outline-brightRed hover:border-brightRed hover:border"
          >
            Nurse
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="text-slate-800"
          >
          <Button title="Contact Us" />
          </Link>
        </nav>
        <div
          className="md:hidden flex item-center p-2 mt-2"
          onClick={handleChange}
        >
          <AlignJustify size={28} />
        </div>
      </div>
      <div
        className={`${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-white text-black left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}
      >
        <Link
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightRed transition-all cursor-pointer py-2 px-4 te rounded-3xl outline-brightRed hover:border-brightRed hover:border"
        >
          Home
        </Link>
        <Link
          to="plans"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightRed transition-all cursor-pointer py-2 px-4 te rounded-3xl outline-brightRed hover:border-brightRed hover:border"
        >
          Plans
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightRed transition-all cursor-pointer py-2 px-4 te rounded-3xl outline-brightRed hover:border-brightRed hover:border"
        >
          About
        </Link>
        <Link
          to="perawat"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightRed transition-all cursor-pointer py-2 px-4 te rounded-3xl outline-brightRed hover:border-brightRed hover:border"
        >
          Nurse
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className="hover:text-brightRed transition-all cursor-pointer py-2 px-4 te rounded-3xl outline-brightRed hover:border-brightRed hover:border"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
