import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { mealId } = useParams();
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );
        setMealDetails(response.data.meals[0]);
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  if (!mealDetails) {
    return <div>Loading...</div>;
  }

  const renderIngredientThumbnails = () => {
    const ingredientThumbnails = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealDetails[`strIngredient${i}`];
      const measure = mealDetails[`strMeasure${i}`];
      if (ingredient) {
        const ingredientImageUrl = `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`;
        ingredientThumbnails.push(
          <div className="flex  flex-col items-center" key={i}>
            <img src={ingredientImageUrl} alt={ingredient} />
            <span>{measure} {ingredient}</span>
          </div>
        );
      }
    }
    return ingredientThumbnails;
  };
  return (
    <div className="bg-gradient-to-r from-rose-400 to-orange-300 flex w-full px-4 md:px-8 flex-col items-center justify-center">
      <h1 className=' text-3xl py-10'>{mealDetails.strMeal}</h1>
      {/* Display other details of the meal */}
      <img src={mealDetails.strMealThumb} alt="img"className='object-cover w-full h-96 rounded-md' />
      <div className="flex flex-wrap flex-row gap-4 items-center w-full justify-center">
        {renderIngredientThumbnails()}
      </div>
      <p className='md:text-left text-center px-0 py-6'>{mealDetails.strInstructions}</p>
    </div>
  );
};

export default Details;
