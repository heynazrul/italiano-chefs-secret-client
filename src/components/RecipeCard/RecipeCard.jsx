import React, { useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { HiHeart } from 'react-icons/hi';
import { Rating } from '@smastrom/react-rating';
import { toast } from 'react-hot-toast';

const RecipeCard = ({ recipe }) => {
  const { recipe_picture, recipe_name, rating, ingredients, cooking_method } = recipe;
  const [isAdded, setIsAdded] = useState(false)

  const handleFavbtn = () => {
    setIsAdded(true)
    toast.success('Added to Favorite!')
  }
  console.log(recipe);
  return (
    <div className="mb-6 rounded-md border-2 py-4 shadow-sm">
      <div className="flex h-full flex-col justify-between">
        <div className="px-4">
          <div className="h-60 w-full sm:h-52 md:h-56">
            <img
              src={recipe_picture}
              className="h-full w-full rounded-xl object-cover object-center shadow-md"
              alt=""
            />
          </div>
          <div className="mt-4 space-y-3">
            <h4 className="text-xl font-semibold text-dark">{recipe_name}</h4>

            {/* Ingredients */}
            <div className="text-gray-900">
              <span className="text-lg font-medium">Ingredients: </span>
              <ul>
                {ingredients.map((item, idx) => (
                  <li key={idx}>
                    <FaCircle className="mr-2 inline-block text-[7px] text-gray-700"></FaCircle>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cooking Method */}
            <div className="text-gray-900">
              <span className="text-lg font-medium">Cooking Method: </span>
              <ul>
                {cooking_method.map((item, idx) => (
                  <li key={idx}>
                    <span className="mr-2">{idx + 1}.</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between border-t-2 px-4 pt-4">
          <div className=" flex items-center gap-2">
            <Rating
              style={{ maxWidth: 100 }}
              value={rating}
              readOnly
            />
            <p>{rating}</p>
          </div>
          <button
            onClick={handleFavbtn}
            disabled={isAdded}>
            <HiHeart className={`text-2xl ${isAdded ? 'text-primary' : 'text-gray-500'}`}></HiHeart>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
