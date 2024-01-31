import PerawatCard from "../Layouts/PerawatCard";
import img1 from "../assets/img1.jpg";

const Perawat = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center item-center md:px-32 px-5">
      <h1 className="text-5xl font-semibold text-center">Our Team</h1>
      <div className="flex flex-col items-center md:flex-row justify-center mt-10 gap-8">
        <PerawatCard image={img1} perawat="Herlambang" request="Panggil" />
        <PerawatCard image={img1} perawat="Herlambang" request="Panggil" />
        <PerawatCard image={img1} perawat="Herlambang" request="Panggil" />
      </div>
    </div>
  );
};

export default Perawat;
