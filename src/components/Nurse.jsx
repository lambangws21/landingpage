import NurseCard from "../Layouts/NurseCard"
import img1 from "../assets/img1.jpg"



const Nurse = () => {
  return (
    <div>
      <h1>Our Team</h1>
       <div>
      <NurseCard img={img1} name={Nurse}/>
       </div>
    </div>
  )
}

export default Nurse