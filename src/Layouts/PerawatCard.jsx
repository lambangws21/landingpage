import { FaInstagram, FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import PropTypes from "prop-types";
import { Button } from "./Button";

const PerawatCard = (props) => {
  return (
    <div className=" md:w-1/4 card w-96 bg-base-100 shadow-xl rounded-xl">
      <figure className="px-10 pt-10">
        <img src={props.image} alt="images" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center p-6">
        <h2 className="card-title">{props.perawat}</h2>
        <div className="flex items-center justify-center flex-row py-4 gap-4">
          <FaInstagram
            size={25}
            className="hover:text-orange-500 cursor-pointer"
          />
          <FaFacebook
            size={25}
            className="hover:text-blue-500 cursor-pointer"
          />
          <RiTwitterXLine
            size={25}
            className="hover:text-slate-600 cursor-pointer"
          />
        </div>
        <Button title={props.request} />
      </div>
    </div>
  );
};
PerawatCard.propTypes = {
  image: PropTypes.string.isRequired,
  perawat: PropTypes.string.isRequired,
  request: PropTypes.string.isRequired,
};

export default PerawatCard;
