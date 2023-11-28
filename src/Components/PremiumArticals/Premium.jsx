/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */

import { useLoaderData } from "react-router-dom";
import Premiumcard from "./Premiumcard";


const Premium = () => {

    const newses = useLoaderData([]);
    console.log(newses);



    return (
      <div className=" grid grid-cols-3 gap-10 p-10">
        {newses.map((news) => (
          <Premiumcard key={news._id} news={news}></Premiumcard>
        ))}

       
      </div>
    );
};

export default Premium;