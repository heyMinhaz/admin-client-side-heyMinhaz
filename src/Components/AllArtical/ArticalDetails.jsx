/* eslint-disable no-unused-vars */

import { useLoaderData } from "react-router-dom";


const ArticalDetails = () => {
    const data = useLoaderData();
  console.log(data);
  const { title, publisher, image, tags, description } = data;

  return (
    <div>
      <div className="flex ">
        <div className="w-1/3 min-h-screen overflow-y-auto"></div>
        <div className=" px-4 py-5 space-y-3">
          <img className=" h-96 rounded-md" src={image} />
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold">{title}</h1>
            <div className="flex flex-col space-y-1">
              <span>Publisher:{publisher}</span>
            </div>
            <div>
              <span className="bg-green-300 rounded-md p-1">Tags:{tags}</span>
            </div>
          </div>
          <div>
            <span></span>
          </div>

          <div>
            <h1 className="text-lg">Description :</h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticalDetails;