import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const API_BASE_URL = "https://www.themealdb.com/api/json/v1/1";
  const ITEMS_PER_PAGE = 10;

  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [mealCategories, setMealCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchMealCategories();
  }, []);

  useEffect(() => {
    if (searchQuery !== "") {
      fetchMealsByName(searchQuery);
      setShowButton(true);
    } else if (selectedCategory !== "") {
      filterMealsByCategory(selectedCategory);
      setShowButton(false);
    } else {
      fetchRandomMeal();
      setShowButton(true);
    }
  }, [searchQuery, selectedCategory]);

  useEffect(() => {
    calculateTotalPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meals]);

  const fetchMealCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories.php`);
      setMealCategories(response.data.categories);
    } catch (error) {
      console.error("Error fetching meal categories:", error);
    }
  };

  const fetchMealsByName = async (mealName) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/search.php?s=${mealName}`
      );
      setMeals(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching meals by name:", error);
      setLoading(false);
    }
  };

  const fetchRandomMeal = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/random.php`);
      setMeals(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching random meal:", error);
      setLoading(false);
    }
  };

  const filterMealsByCategory = async (category) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_BASE_URL}/filter.php?c=${category}`
      );
      setMeals(response.data.meals);
      setLoading(false);
    } catch (error) {
      console.error("Error filtering meals by category:", error);
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchQuery.trim());
    setSelectedCategory("");
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setLoading(true);
    setSelectedCategory(category);
    setLoading(false);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const search=document.getElementById('search');
    search.scrollIntoView({behavior:'smooth'});
  };

  const calculateTotalPages = () => {
    const totalPages = meals ? Math.ceil(meals.length / ITEMS_PER_PAGE) : 1;
    setTotalPages(totalPages);
  };

  const getPaginatedMeals = () => {
    if (!meals) return []; // Return an empty array if meals is null or undefined
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return meals.slice(startIndex, endIndex);
  };

  return (
    <div id="search" className="w-full h-auto flex flex-col items-center justify-center">
      <div className="flex w-full items-center justify-center">
        <h1 className=" text-2xl pb-3 md:pb-6 font-bold text-gray-200">
          Search for recipes
        </h1>
      </div>
      <div className="flex w-full py-2 items-center justify-center">
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch(e);
            }
          }}
          className="bg-gray-100 rounded-md md:w-fit w-full focus:outline-none p-1"
        />
      </div>
      <div className="flex w-full items-center justify-start md:justify-center text-xs text-gray-700">
        <p>Filter by category</p>
      </div>
      <div className="flex flex-row my-2 w-full items-center justify-center flex-wrap">
        {mealCategories.map((category, index) => (
          <div
            key={category.strCategory}
            className={`${
              selected === index ? "bg-orange-300" : "bg-white"
            } mr-2 my-[0.2em] py-[0.1em] px-2 rounded-xl cursor-pointer items-center justify-center`}
            onClick={() => {
              handleCategoryChange(category.strCategory);
              setSelected(index);
            }}
          >
            <h1 className="text-gray-900 md:text-base text-sm">
              {category.strCategory}
            </h1>
          </div>
        ))}
      </div>
      <div className="flex w-full pb-8 items-center flex-col justify-center ">
        {loading ? (
          <div className="flex w-full h-[50vh] items-center font-bold text-white justify-center">
            <p>Loading.....</p>
          </div>
        ) : (
          <div className="flex w-full flex-wrap flex-row items-center gap-4 justify-center">
            {getPaginatedMeals().length > 0 ? (
              // Display meals
              getPaginatedMeals().map((item, i) => (
                <div
                  key={i}
                  className="bg-white pb-2 mt-6 mb-4 rounded-md overflow-hidden"
                >
                  <div className="flex w-full">
                    <img
                      src={item.strMealThumb}
                      alt={item.strMeal}
                      className="h-56 object-cover w-full resize"
                    />
                  </div>
                  <div className="flex w-full justify-between pt-2 px-2 flex-row flex-wrap items-center">
                    <div className="flex flex-col">
                      <h1 className="text-sm font-semibold line-clamp-1 text-gray-900">
                        {item.strMeal}
                      </h1>
                      <h1 className="text-gray-500 text-sm">{item.strArea}</h1>
                    </div>
                    {showButton && (
                      <div className="flex items-center justify-center mt-4">
                        <Link
                          to={`/details/${item.idMeal}`}
                          className="flex shadow-xl flow-row items-center px-2 hover:scale-105 transition-all py-1 rounded-md bg-orange-300"
                        >
                          Details
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )) //end of
            ) : (
              // No results found message
              <div className="flex w-full h-[50vh] items-center font-bold text-white justify-center">
                <p>No results found.</p>
              </div>
            )}
          </div>
        )}
        {totalPages > 1 && (
          <div className="flex justify-center my-4 w-full items-center">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`mx-1 px-2 py-1 rounded-full ${
                  currentPage === index + 1
                    ? "bg-rose-900 text-white"
                    : "bg-white"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
