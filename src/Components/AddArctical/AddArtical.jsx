/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-undef */

import Navbar from "../Navbar/Navbar";

import { imageUpload } from "../utility/image_Utility";





const AddArtical = () => {

    const handelAdd = async (e) => {
      e.preventDefault();

      const form = new FormData(e.currentTarget);

      const title = form.get("title");

      const photo = form.get("photo");

      const description = form.get("description");
      const publisher = form.get("publisher");
      const tag = form.get("tag");

      const imageData = await imageUpload(photo);

      const image = imageData.data.display_url;
      console.log(image);

      const artical = {
        title,
        image,
        description,
        publisher,
        tag,
      };

      console.log(artical);

      fetch("http://localhost:5001/news", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artical),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.insertedId) {
            e.target.reset();
            // eslint-disable-next-line no-undef
            Swal.fire({
              title: "success",
              text: "Service Added Succesfully",
              icon: "success",
              confirmButtonText: "Thank you",
            });
          }
        });
    };






    return (
      <div>

        <div>
          <form onSubmit={handelAdd}>
            <section className="bg-white dark:bg-gray-900">
              <div className="flex justify-center min-h-screen">
                <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
                  <div className="w-full">
                    <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                      Add News
                    </h1>

                    <p className="mt-4 text-gray-500 dark:text-gray-400">
                      Let’s get you all set up so you can verify your personal
                      account and begin setting up your profile.
                    </p>

                    <section className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                      <div>
                        <label className="block mb-2 text-sm text-gray-600 ">
                          Title
                        </label>
                        <input
                          type="text"
                          
                          name="title"
                          placeholder="Title"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Image
                        </label>
                        <input
                          type="file"
                          name="photo"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Publisher
                        </label>
                        <input
                          type="text"
                          name="publisher"
                          placeholder="Publisher"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <div>
                        <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                          Tags
                        </label>
                        <input
                          type="text"
                          name="tag"
                          placeholder="Tags"
                          className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>

                      <link
                        rel="stylesheet"
                        href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
                      />

                      <div className="max-w-2xl mx-auto">
                        <label
                          for="message"
                          className=" text-sm block text-gray-600 dark:text-gray-200"
                        >
                          Description
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          name="description"
                          className="block w-full px-5 py-3 mt-2  placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-600 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          placeholder="  Description..."
                        ></textarea>

                        <p className="mt-5">
                          Provide information about your service specialties,
                          pricing, readability, and learning support.
                          <a
                            className="text-blue-600 hover:underline"
                            href="#"
                            target="_blank"
                          ></a>
                          .
                        </p>
                        <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
                      </div>

                      <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        <span>Publish </span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 rtl:-scale-x-100"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </section>
                  </div>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    );
};

export default AddArtical;