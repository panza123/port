import { testi } from "../../components/ship"

export default function Testmonies() {
  return (
    <main className="max-w-[1440px] px-7 py-5">
      <h1 className="sm:text-3xl  lg:text-4xl text-center font-bold">What Our Customer Say</h1>
      <div className="max-w-[1200px] sm:grid lg:flex justify-between items-center  mt-5">
  
{testi.map((item)=>(
  <div className="max-w-[350px] gap-3 mt-5 " key={item.id}>
<div className="flex gap-2">
<img src={item.pic} alt="" />
<div>
  <p className="font-bold">{item.name}</p>
  <p>{item.job}</p>
</div>
</div>
<p className="pt-4">{item.content}</p>
<p className="pt-3">{item.date}</p>
  </div>
))}
      </div>

    </main>
  )
}
