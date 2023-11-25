/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

const ArticalDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { title, publisher, image, tags, description } = data;

  return (
    <div>
      <div className="flex max-h-screen">
        <div className="w-1/3 min-h-screen overflow-y-auto"></div>
        <div className="w-2/3 min-h-screen px-4 py-5 space-y-3">
          <img src={image} />
          <div className="space-y-2">
            <h1 className="text-lg">Information :</h1>
            <div className="flex flex-col space-y-1">
              <span>Health Score: 95</span>
              <span>Aggregate Likes: 95</span>
              <span>Weight Watcher Smart Points: 7</span>
              <span>Price Per Serving: 160.46</span>
            </div>
            <div>
              <span className="bg-green-300 rounded-md p-1">Vegetarian</span>
              <span className="bg-green-300 rounded-md p-1">Dairy Free</span>
              <span className="bg-green-300 rounded-md p-1">Very Healthy</span>
              <span className="bg-green-300 rounded-md p-1">Very Popular</span>
            </div>
          </div>
          <div>
            <span></span>
          </div>
          <div>
            <h1 className="text-lg">Ingredients :</h1>
            <ul className="list-disc pl-5">
              <li>avocado 0.5</li>
              <li>campari 2.0</li>
              <li>egg whites 2.0</li>
              <li>multigrain bread 1.0</li>
              <li>salt and pepper 1.0</li>
              <li>shallot 0.5</li>
              <li>spinach leaves 1.0</li>
            </ul>
          </div>

          <div>
            <h1 className="text-lg">Instructions :</h1>
            <ul className="list-decimal pl-5">
              <li>Spray a small skillet with non-stick cooking spray.</li>
              <li>
                Add the shallot and spinach and cook over medium heat until
                spinach is wilted.
              </li>
              <li>Place in a small bowl and set aside.Spray the pan again.</li>
              <li>
                Pour beaten egg whites or egg into the pan and season with salt
                and black pepper, to taste. Cook over medium heat until
                soft-scrambled, about 2 minutes.Mash the avocado with a fork and
                spread evenly on piece of toast. Top the avocado toast with
                spinach, scrambled eggs, and tomato slices. Season with salt and
                pepper, to taste.
              </li>
              <li>
                Serve immediately.Note-to make this gluten-free, use gluten-free
                bread.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticalDetails;