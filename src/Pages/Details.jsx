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

  return (
    <div>
      <h1>{mealDetails.strMeal}</h1>
      {/* Display other details of the meal */}
      <img src={mealDetails.strThumb} alt="img"className=' h-full w-full' />
      <p>{mealDetails.instructions}</p>
    </div>
  );
};

export default Details;
