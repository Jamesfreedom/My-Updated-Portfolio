import { useEffect } from "react";
import Topbody from "./Topbody"
import Bottombody from "./Bottombody"
import Algorithm from "./Algorithm"
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
      <Algorithm />
    </>
  )
}

export default App
