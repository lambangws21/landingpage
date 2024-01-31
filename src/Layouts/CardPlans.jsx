import PropTypes from "prop-types";
const CardPlans = (props) => {
  return (
    <div className="flex flex-col card w-full md:w-1/3 p-5 rounded-lg bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{props.title}</h2>
    <p>{props.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{props.price}</button>
    </div>
  </div>
</div>
  )
}
CardPlans.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
export default CardPlans