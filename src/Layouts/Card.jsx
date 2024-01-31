import { HandCoins, CheckCircle2 } from "lucide-react";
import PropTypes from "prop-types";
import { Button } from "./Button";
const Card = (props) => {
  return (
    <div className="flex flex-col bg-teal-500/70 w-full md:w-1/3 p-5 rounded-lg card shadow-lg">
      <h2 className="font-semibold text-center card-title text-white text-2xl ">{props.title}</h2>
      <div className="flex flex-row justify-center items-center">
        <span className="text-white inline-block">
        <HandCoins size={22} />
        </span>
        <h3 className="text-white font-semibold text-xl inline-block">{props.price}</h3>
      </div>
      <div className="flex flex-col items-center text-white mt-5">
        <div className="flex flex-row items-center">
          <span className=" inline-block mr-5">
            <CheckCircle2 size={22}  />
          </span>
          <p className="">{props.description}</p>
        </div>
        
      </div>
      <div className="flex flex-row justify-center mt-4">   <Button title="buy now"/></div>
   
    </div>
  );
};
Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Card;
