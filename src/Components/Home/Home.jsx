import { useLoaderData } from "react-router-dom";
import Carousol from "../Carousol/Carousol";

import Plan from "../Plan/Plan";
import Statistics from "../Statistic/Statistics";


const Home = () => {
       const result = useLoaderData();
       console.log(result);
  
    return (
      <div>
        <div>
  
        </div>
<Carousol></Carousol>
            <Plan></Plan>
            
<div className=" "> <Statistics></Statistics></div>

       
      </div>
    );
};

export default Home;