import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Authprovider/Authprovider";
import Mycard from "./Mycard";


const Myartical = () => {



    const data = useLoaderData();

    const [orders, setorder] = useState([]);

    const { user } = useContext(AuthContext);
    const ordercart = user?.email;
console.log(ordercart);
    useEffect(() => {
      const ordercartfilter = data?.filter((cart) => cart.email.trim() == ordercart);
      setorder(ordercartfilter);
    }, [data, ordercart]);

    console.log(orders);
    console.log(data);


    return (
      <div className=" grid grid-cols-3 p-10  gap-10">
        {orders.map((order) => (
          <Mycard key={order._id} order={order}></Mycard>
        ))}
      </div>
    );
};

export default Myartical;