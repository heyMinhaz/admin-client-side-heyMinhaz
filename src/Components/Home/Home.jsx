import { useLoaderData } from "react-router-dom";
import Carousol from "../Carousol/Carousol";


import Statistics from "../Statistic/Statistics";
import Subcription from "../Subcription/Subcription";


const Home = () => {
       const result = useLoaderData();
       console.log(result);
  
    return (
      <div>
        <div>
  
        </div>
<Carousol></Carousol>
        <Subcription></Subcription>
            
<div className=" "> <Statistics></Statistics></div>

       
      </div>
    );
};

export default Home;