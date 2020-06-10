import React, {
  useEffect,
  useState
} from "react";
import Recipe from "./Recipe"

import "./App.css";

function App() {
  const APP_ID = "1e99f3f0";
  const APP_KEY = "03c903e944de8e9b98fca4c37309615c	";
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;
  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    setRecipe(data.hits);
    console.log(data.hits)
  };

  const updateSearch =(e) =>{
    setSearch(e.target.value)
    // console.log(search)
  }

  const getSearch = e => {
    e.preventDfault();
    setQuery(search)
    setSearch('')
  }

  return ( < div className = 'App' >
    <h1>Recipe App with React
    </h1>
    <form onSubmit={getSearch} className = 'search-form' >
    <input className = 'search-bar'
    type = 'text' value={search} onChange={updateSearch}/ >
    <button className = 'search-button' > Search </button>
     </form >
     <div className="recipes"> 
     {recipes.map(recipe => (
       <Recipe
       key = {recipe.recipe.label}
       title = {recipe.recipe.label}
        caloris = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredients = {recipe.recipe.ingredients} 
        
        />
      ))
    } 
    </div>
    </div>
  );
}

export default App;