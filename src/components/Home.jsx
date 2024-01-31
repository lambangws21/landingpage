import { Button } from "../Layouts/Button";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-row justify-between md:px-32 px-5 bg-[url('./src/assets/bg.png')] bg-cover bg-no-repeat bg-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-8xl font-semibold md:text-start text-center md:w-2/3">
            Your Health, is Our Top Priority.
          </h1>
          <div className="w-full md:w-2/4 mt-5 flex-row justify-center">
            <Button title="Checkout Plans" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
