/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";



const Allcard = ({ news }) => {

    const {_id, title, publisher, image, tags, description } = news;


    return (
      <div>
        <div className="flex p-10 items-center justify-center">
          <div className="relative flex w-full h-[300px] max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={image}
                alt="image"
                className="h-[300px] w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                {title}
              </h6>

              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                {description.slice(0, 100)}
              </p>
              <a className="inline-block" href="#">
                <Link to={`/details/${_id}`}>
                  {" "}
                  <button
                    className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none grow"
                    type="button"
                  >
                    Details
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-4 w-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </a>
              <br />
              <div className="badge badge-outline">Publisher:{publisher}</div> <br />
              <div className="badge badge-outline">Tags:{tags}</div>
            </div>
          </div>

          <link
            rel="stylesheet"
            href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
          />
        </div>
      </div>
    );
};

export default Allcard;