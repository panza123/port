import vector from "../../../public/image/Vector.png"
import vector2 from "../../../public/image/Vector(1).png"
import ellipe from "../../../public/image/Ellipse 890.png"
export default function Schdeule() {
  return (
    <main className="max-w-[1440px] px-7 py-12 bg-[#12296C] text-white ">
<h1 className="sm:text-3xl lg:text-4xl text-center">Schedule Your Effortless Delivery for <br/>Exceptional Service</h1>
    
    <div className="flex sm:300px lg:w-[500px] h-[50px] bg-white px-3  mx-auto mt-5">
        <input type="email" placeholder="Enter your email address" className="border-0 outline-none w-full h-full text-black" 
        
        
        />
        <button className="w-[200px] h-[40px] bg-[#E65f59]  flex items-center justify-center text-white mt-1">
<p className="font-semibold">Explore Now</p>
</button>

    </div>
<div className="flex w-full justify-between sm:px-5 mt-4 lg:px-10">
    <div className=" flex">
    <img src={vector} alt="arrow"  className=""/>
    <img src={vector2} alt="arrow"  className="ml-[-20px] mt-[-5px]"/>
    </div>
    <img src={ellipe} alt="" />
    </div>
    </main>
  )
}
