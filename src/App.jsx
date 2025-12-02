import { useEffect } from "react";
import Topbody from "./Topbody";
import Bottombody from "./Bottombody";
import Footer from "./Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Topbody />
      <Bottombody />
      <Footer />
    </>
  )
}

export default App
