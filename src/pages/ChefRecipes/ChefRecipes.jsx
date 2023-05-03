import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefBanner from '../../components/Banner/ChefBanner';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

const ChefRecipes = () => {
  const chefData = useLoaderData();
  const recipes = chefData.recipes;
  return (
    <div>
      <ChefBanner chefData={chefData}></ChefBanner>
      <div className="mx-auto grid max-w-screen-xl gap-8 sm:grid-cols-2  md:px-8">
        {recipes.map((recipe, idx) => (
          <RecipeCard
            key={idx}
            recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecipes;
