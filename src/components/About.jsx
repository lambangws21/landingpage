import about from "../assets/tentang.png";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row  items-center mb-14 md:mx-32 mx-5">
      <div className="w-full md:w-4/5 space-y-4 md:-mt-40">
        <h1 className=" text-5xl font-semibold text-center md:text-center mt-16 md:mt-0">
          About Us
        </h1>
        <p className="z-10 ml-6 text-justify leading-7 text-lg w-1.5/3">
          Selamat datang di Layanan Perawat Homecare kami, yang telah melayani
          masyarakat sejak tahun 2023. Kami dengan bangga menyediakan layanan
          perawatan kesehatan yang inovatif, mencakup infus kesehatan,
          akupuntur, dan bekam, untuk memenuhi kebutuhan kesehatan Anda di
          kenyamanan rumah Anda sendiri. <br />
          Komitmen Kami Kami memahami bahwa setiap individu memiliki kebutuhan
          kesehatan yang unik, dan itulah mengapa kami bertekad untuk memberikan
          perawatan yang personal dan terjangkau. Sebagai tim perawat homecare
          profesional, kami mengutamakan kesejahteraan Anda dan memberikan
          layanan yang berkualitas tinggi dengan penuh kepedulian.
        </p>
      </div>
      <div className="">
        <img src={about} alt="about" className=" -z-40" />
      </div>
    </div>
  );
};

export default About;
