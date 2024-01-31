
import Card from "../Layouts/Card.jsx";
const Plans = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center item-center md:px-32 px-5 ">
        <h1 className="text-5xl font-semibold text-center">Terapi Membership</h1>


        <div className="flex flex-col md:flex-row justify-center mt-10 gap-8">
          <Card title="Monthly" price="$49.99" description="1 month coba sekarang" />
          <Card title="Monthly" price="$49.99" description="1 month coba sekarang" />
          <Card title="Monthly" price="$49.99" description="1 month coba sekarang" />
        </div>
    </div>
  )
}

export default Plans