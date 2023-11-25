import { useLoaderData } from "react-router-dom";
import Allcard from "./Allcard";


const AllArtical = () => {

    const newses = useLoaderData([]);
    console.log(newses);



    return (
        <div>


            <h1 className=" text-4xl text-center text-gray-800">All News Artical</h1>
           
        <div className="grid grid-cols-2 gap-10 ">
                { 
                    
                newses.map(news=> <Allcard key={news._id} news={news} ></Allcard>)
                
                
                }
        </div>
      </div>
    );
};

export default AllArtical;