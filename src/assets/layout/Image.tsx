import logo from "../../../public/image/Group 1171275123.png";
import logo1 from "../../../public/image/Group 1171275124.png";
import logo2 from "../../../public/image/Group 1171275125(1).png";
import logo3 from "../../../public/image/Group 1171275126.png"


export default function Image() {
  return (
<main className=" max-w-[1440px]  px-7 mt-3 py-5 border-b-2 border-[#DADADA] ">
    <h1 className="text-3xl font-bold text-center">Simplify Your Logistical Needs</h1>
    <div className="w-full h-full sm:grid  lg:grid-cols-4 gap-4 mt-5">
    <img src={logo} alt="" />
<img src={logo1} alt="" />
<img src={logo2} alt="" />
<img src={logo3} alt="" />
    </div>

</main>
  )
}
