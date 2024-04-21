import worker from "../../../public/image/63ce21c91a2c8465fd8b0972_blog-thumbnail-2-p-500 1.png";

import { CiLocationOn } from "react-icons/ci";
export default function ShippingDetails() {
  return (
    <main
      className="max-w-[1220px] mx-auto sm:grid lg:grid-cols-2 items-center mt-[-20px] z-20
      bg-white rounded-md shadow-lg shadow-black  "
    >
      <div className="max-w-[500px] px-5 py-5">
        <h2 className="text-2xl pt-3 font-bold">Shipping Details</h2>
        <p className="pt-3">
          We do the legwork to ensure you are provided  best price for the best
          product.
        </p>
        <img src={worker} alt="worker" className="w-[300px] pt-4" />
      </div>

      {/* {right} */}
      <div className="max-w-[500px] px-5 py-5  ">
        <div className="w-full flex gap-5 border-b-2 border-[#D4D4D4] py-2">
          <p>Shipping Rates</p>
          <p>Tracking</p>
          <p>Drop Point</p>
        </div>
        <div className="max-w-[300px]">
          <div className="flex gap-4 mt-3">
            {/* {location} */}
            <div className="grid">
              <p>Form</p>
              <div className="flex sm:w-[180px]  lg:w -[200px] h-[40px]  gap-2 items-center bg-[#F3F3F3] px-1 rounded-[5px] ">
                <CiLocationOn size={20} />
                <input
                  type="text"
                  className="border-0 outline-none bg-transparent w-full h-full px-2"
                  placeholder="Avellaneda"
                />
              </div>
            </div>

            <div className="grid">
              <p>Form</p>
              <div className="flex  sm:w-[180px]  lg:w -[200px] h-[40px]    items-center bg-[#F3F3F3] px-1 rounded-[5px] ">
                <CiLocationOn size={20} />
                <input
                  type="text"
                  className="border-0 outline-none bg-transparent w-full h-full px-2"
                  placeholder="Avellaneda"
                />
              </div>
            </div>
          </div>
          {/* {weight}       */}

          <div className="flex gap-4 mt-3">
            <div className="grid">
              <p>Weight</p>
              <div className="flex sm:w-[180px]  lg:w -[200px] h-[40px] gap-2     items-center bg-[#F3F3F3] px-1 rounded-[5px] ">
                <input
                  type="text"
                  className="border-0 outline-none bg-transparent w-full h-full px-2"
                  placeholder="weigth"
                />
              </div>
            </div>

            <div className="grid">
              <p>Length</p>
              <div className="flex sm:w-[180px]  lg:w -[200px] h-[40px]    gap-2  items-center bg-[#F3F3F3] px-1 rounded-[5px] ">
                <input
                  type="text"
                  className="border-0 outline-none bg-transparent w-full h-full px-2"
                  placeholder="Length"
                />
              </div>
            </div>
          </div>

          {/* {height} */}

          <div className="flex gap-4 mt-3">
            <div className="grid">
              <p>Width</p>
              <div className="flex sm:w-[180px]  lg:w -[200px] h-[40px]     gap-2  items-center bg-[#F3F3F3] px-1  rounded-[5px]">
                <input
                  type="text"
                  className="border-0 outline-none bg-transparent w-full h-full px-2"
                  placeholder="Width"
                />
              </div>
            </div>

            <div className="grid">
              <p>Heigth</p>
              <div className="flex sm:w-[180px]  lg:w -[200px] h-[40px]    gap-2  items-center bg-[#F3F3F3] px-1 rounded-[5px] ">
                <input
                  type="text"
                  className="border-0 outline-none bg-transparent w-full h-full px-2 "
                  placeholder="Height"
                />
              </div>
            </div>
          </div>
        </div>

        <button className="w-full h-[50px] bg-[#E65f59] rounded-md flex items-center justify-center text-white mt-5">
          <p className="font-semibold">Send</p>
        </button>
      </div>
    </main>
  );
}
