import loop from "../../../public/image/worker2.png";
import {timer} from "../../components/ship";
export default function Time() {
  return (
    <main className="max-w-[1440px] py-5 px-7  sm:grid lg:grid-cols-2 gap-10 border-b-2 border-[#DADADA]">
      <div className="max-w-[720px]">
        <div className="w-full h-[450px] bg-[#12296C] relative">
          <img
            src={loop}
            alt=""
            className="w-[500px] h-[350px] absolute right-[-30px] top-8 objec-cover "
          />
        </div>
      </div>
      <div className="max-w-[720px]px-3 py-12">
        <h2 className="text-4xl font-bold">
          We Provide Timely and Cost-Effective Service
        </h2>
        <p className="pt-2">
          Logistics is a distinguished supply chain management firm which
          provides comprehensive solutions for warehousing, transportation and a
          host of logistics services.
        </p>
        <div className="sm:grid lg:grid-cols-2"> 
        
{timer.map((time)=>(
    <div key={time.id} className="flex items-center gap-2 py-2">
        <img src={time.pic} alt="" />
        <p>{time.title}</p>

    </div>
))}
        </div>
        <button className="w-[200px] h-[50px] bg-[#E65f59] rounded-md flex items-center justify-center text-white mt-5">
          <p className="font-semibold">Read More</p>
        </button>
      </div>
    </main>
  );
}
