import logo from "../../../public/image/Group.png"
import phone from "../../../public/image/phone.png"
import link from "./index"
import { IoMenuSharp } from "react-icons/io5";
import { GiCrossedSabres } from "react-icons/gi";
import { useState } from "react";
export default function Navbar() {
  const [nav,setNav] = useState(false)
  const handleClick = () => {
    setNav(!nav)
  }
   return (
    <header className="w-full h-[50px] px-7 py-10 flex justify-between items-center text-xl">
      <div className="flex gap-7 items-center">
        <div className="flex gap-4 items-center">
<img src={logo} alt="navlogo" className="object-cover w-[100px] "  />
          <p className="text-[#12296c] font-bold">PORT</p>
        </div>
<nav className=" hidden lg:flex gap-3 text-[#0B0B0B]">
{link.map((links)=>(
  <ul key={links.id}>
    <li className="cursor-pointer font-bold">{links.title}</li>
  </ul>
))}
</nav>

</div>

<div className="hidden lg:flex items-center gap-3 ">
<div className="flex gap-2 items-center">
<img src={phone} alt="nav" />
  <p className="text-[#12296c] ">(704) 555-0127</p>
</div>
<button className="w-[150px] h-[50px] bg-[#E65f59] rounded-md flex items-center justify-center text-white">
<p className="italic">Appointment</p>
</button>


</div>
<div onClick={handleClick} className="lg:hidden">
{  !nav ? <IoMenuSharp  size={30}/> : <GiCrossedSabres size={30} />}

</div>
{/* {mobile menu} */}
    </header>
  )
}
