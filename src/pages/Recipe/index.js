import React, { useContext, useEffect } from "react";

import { useParams, Link, useHistory } from "react-router-dom";

import RecipesContext from "../../contexts/RecipesContext";
import Loader from "../../components/Loader";
import Sidebar from "../../components/sidebar";
import "../../styles/pages/_recipe.scss";

const Index = () => {
  const {
    recipes,
    isLoading,
    setIsLoading,
    recipe = false,
    setRecipe,
    favorites,
    setFavorites,
    favid,
    setFavid,
  } = useContext(RecipesContext);

  const history = useHistory();

  const { id } = useParams();

  const _fetchRecipe = async () => {
    setIsLoading(true);
    if (recipes.length < 1) {
      history.push(`/recipes`);
    } else if (favorites.length > 0) {
      setRecipe(match());
      setIsLoading(false);
    } else {
      try {
        const res = recipes[id].recipe;
        setRecipe(res);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        throw error;
      }
    }
  };

  const test = () => {
    if (recipe.hasOwnProperty("favorites") || recipe.favorites === true) {
      // myObject has the favorites property
      let recipeIndex = recipe.index;
      delete recipe.favorites;
      delete recipe.favId;
      let favoritesCopy = [...favorites];

      for (var i = favoritesCopy.length - 1; i >= 0; --i) {
        if (favoritesCopy[i].index == recipeIndex) {
          favoritesCopy.splice(i, 1);
        }
      }
      setFavorites(favoritesCopy);
    } else {
      // myObject doesn't has hello property
      recipe.favorites = true;
      recipe.favId = favid;
      setFavid(favid + 1);
      let favoritesCopy = [...favorites];
      favoritesCopy.push(recipe);
      setFavorites(favoritesCopy);
    }
  };

  useEffect(() => {
    _fetchRecipe();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const match = () => {
    let match = recipes[id].recipe.label;
    let indents = [];
    for (let i = 0; i < favorites.length; i++) {
      if (favorites[i].label == match) {
        favorites[i].favorites = true;
        indents.push(favorites[i]);
      }
    }
    if (indents.length === 0) {
      return recipes[id].recipe;
    } else {
      return indents[0];
    }
  };

  const { label, image, ingredients, totalTime, calories } = recipe;
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-lg-4">
          <img className="image-each-recipe" src={image} alt={label} />
        </div>
        <div className="col-12 col-lg-4 text-dark">
          <h3>{label}</h3>
          <p>Preparation : {totalTime} min</p>
          <p>Total calories : {Math.round(calories)}</p>
          <p>
            Number of ingredients :{" "}
            {ingredients !== undefined && ingredients.length}{" "}
          </p>
          <button
            onClick={() => test()}
            className="btn-floating halfway-fab waves-effect waves-light "
          >
            <i className="material-icons">
              {recipe.favorites ? "favorite" : "favorite_border"}
            </i>
          </button>
        </div>
        <div className="col-12 col-lg-4">
          <Sidebar />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-lg-8 text-dark">
          <h4 className="title-ingredients text-center mb-4">
            <span>Ingredients</span>
          </h4>
          <ul className="browser-default">
            {ingredients !== undefined &&
              ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient.text}</li>
              ))}
          </ul>
        </div>
      </div>
      <div className="card-action">
        <Link className="text-dark" to="/">
          Retour
        </Link>
      </div>
    </div>
  );
};

export default Index;
