
import { Hero , About , Article , Customers , Pricing } from "../../components"
import { useEffect } from "react";

const Home = () =>{

  useEffect(() =>{
      window.scrollTo(0,0);
  }, []);


  return(
    <>
      <Hero/>
      <About/>
      <Article/>
      <Customers/>
      <Pricing/>
    </>
  )
}


export default Home