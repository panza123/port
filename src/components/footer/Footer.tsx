import logo from "../../../public/image/Group.png"
import { FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa"
export default function Footer() {
  return (
    <footer className="max-w-[1440px] mt-3 ">
    <div className="w-full h-full px-7 py5 sm:grid  lg:grid-cols-2">
<div className="max-w-[400px]">
<div className="flex gap-7 items-center">
        <div className="flex gap-4 items-center">
<img src={logo} alt="navlogo" className="object-cover w-[100px] "  />
          <p className="text-[#12296c] font-bold">PORT</p>
        </div>
        </div>
        <p>We serve your shipments quickly & safely. prudence & security of carried on our couriers.</p>
        <div className="flex gap-3 mt-4">
<FaFacebook size={30} className="text-blue-900"/>
<FaTwitter size={30} className="text-blue-900"/>
<FaInstagram size={30} className="text-blue-900"/>
        </div>
</div>

<div className="max-w-[1040px] grid grid-cols-3 mt-3 gap-4">
<div>
<span className="font-bold">Company</span>
<ul >
<li>About Us</li>
<li>Meet Our Team</li>
<li>News and Media</li>
<li>Blog</li>
<li>Contact</li>
</ul>
</div>
<div>
<span className="font-bold">Quick Action</span>
<ul >
<li>Order Now</li>
<li>Track Order</li>
<li>Faq & Help</li>
<li>Global Agent</li>
</ul>
</div>
<div>
<span className="font-bold">Services</span>
<ul >
<li>Truck</li>
<li>Boats</li>
<li>Car</li>

</ul>
</div>


</div>
{/* {second} */}
</div>
<div className="w-full border-t-2 border-[#DADADA]  mt-2 px-7 py-2">
<span>© 2022 PORT| Powered by Shopify</span>
</div>
    </footer>
  )
}
