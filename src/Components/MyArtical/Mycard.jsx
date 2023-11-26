/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const Mycard = ({ order }) => {

    const { title, publisher, image, tags, description } = order;

    return (
      <div>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg h-[300px]" src={image} alt="" />
            </a>
            <div className="p-10 h-[250px]">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  {title}
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {description.slice(0, 100)}
              </p>
         
            </div>
          </div>
        </div>
      </div>
    );
};

export default Mycard;