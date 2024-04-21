import Expolre from "./assets/layout/Expolre"
import Ship from "./assets/layout/Ship"
import ShippingDetails from "./assets/layout/ShippingDetails"
import Navbar from "./components/nav/Navbar"
import Image from "./assets/layout/Image"
import Time from "./assets/layout/Time"
import Testmonies from "./assets/layout/Testmonies"
import Schdeule from "./assets/layout/Schdeule"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
    <main className="w-full h-screen">
 <Navbar/>
 <Expolre />
 <ShippingDetails/>
 <Ship/>
 <Image/>
 <Time/>
 <Testmonies/>
 <Schdeule/>
 <Footer/>
    </main>
    </>
  )
}

export default App
