import { FaInstagram, FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import PropTypes from "prop-types";

const NurseCard = (props) => {
  return (
    <div className="flex flex-col items-center gap-3 pt-8 w-full md:1/4 rounded-xl shadow-xl">
      <div className="w-3/4">
        <img className="rounded-full" src={props.image} alt="img" />
      </div>
      <div>
        <h1 className="text-xl font-semibold py-2 text-center">{props.name}</h1>
        <div className="flex justify-center flex-col py-4 gap-4">
          <FaInstagram
            size={25}
            className="hover:text-orange-500 pointer-cursor"
          />
          <FaFacebook
            size={25}
            className="hover:text-blue-500 pointer-cursor"
          />
          <RiTwitterXLine
            size={25}
            className="hover:text-slate-600 pointer-cursor"
          />
        </div>
      </div>
    </div>
  );
};

NurseCard.propTypes = {
  image:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired
}
export default NurseCard;
