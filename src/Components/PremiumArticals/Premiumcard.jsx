/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Premiumcard = ({ news }) => {

    const { _id, title, publisher, image, tags, description } = news;

    return (
      <div>
        <div>
          <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img src={image} alt="ui/ux review check" className="w-96 h-60" />
      
              <button
                className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              ></button>
            </div>
            <div className="p-6 h-48">
              <div className="mb-3 flex items-center justify-between">
                <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {title}
                </h5>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                {description.slice(0, 100)}
              </p>
            </div>
            <div className="p-6 pt-3">
              <Link to={`/details/${_id}`}>
                {" "}
                <button
                  className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Details
                </button>
              </Link>
            </div>
          </div>

          <link
            rel="stylesheet"
            href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
          />

          <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
        </div>
      </div>
    );
};

export default Premiumcard;