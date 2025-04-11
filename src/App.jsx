import "flowbite";
import { useEffect } from "react";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import Footer from "./Components/Footer";

function App() {
  useEffect(() => {
    // نضمن تفعيل JavaScript بعد تحميل المكون
    import("flowbite");
  }, []);
  return (
    <>
    <SideBar/>
    <Footer/>
    </>
  );
}

export default App;
