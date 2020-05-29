import React, { useContext } from "react";

import { useHistory } from "react-router-dom";
import RecipesContext from "../contexts/RecipesContext";

const Sidebar = () => {
  const { recipes, setRecipe, recipe, favorites } = useContext(RecipesContext);

  const history = useHistory();

  /* Création d'un tableau d'index contenant obligatoirement l'index de la recipe actuel */
  const randomNumbers = () => {
    /* Retour à la home page si les recettes ne sont pas chargées */
    if (recipes.length < 3) {
      history.push(`/recipes`);
    } else {
      /* Ajout au tableau l'index de la recipe actuel */
      let arr = [recipe.index];
      while (arr.length < recipes.length - 3) {
        let r = Math.floor(Math.random() * recipes.length);
        if (arr.indexOf(r) === -1) arr.push(r);
      }
      return arr;
    }
  };

  const sliceArray = () => {
    let valuesArr = recipes;
    let removeValFrom = randomNumbers();

    /* Ici que j'ajoute les index aux Recettes */
    valuesArr.forEach(function (itm, index) {
      itm.recipe.index = index;
    });

    /* Filtre le tableau de recettes grace au index aléatoire pour n'en garder que trois */
    valuesArr = valuesArr.filter(function (value, index) {
      return removeValFrom.indexOf(index) === -1;
    });
    return valuesArr;
  };

  /* Création du tableau contenant les trois recettes aléatoires */
  let recipesSlice = sliceArray();

  const goToRecipe = (recipe, id) => {
    if (favorites.length > 0) {
      let match = recipes[id].recipe.label;
      for (let i = 0; i < favorites.length; i++) {
        if (favorites[i].label === match) {
          setRecipe(favorites[i]);
          history.push(`/recipes/${id}`);
          break;
        } else {
          setRecipe(recipe.recipe);
          history.push(`/recipes/${id}`);
        }
      }
    } else {
      setRecipe(recipe.recipe);
      history.push(`/recipes/${id}`);
    }
  };

  return (
    <React.Fragment>
      {recipesSlice.map((recipe, index) => (
        <div
          className="card mb-3 cursor-pointer hoverable"
          key={index}
          onClick={() => goToRecipe(recipe, recipe.recipe.index)}
        >
          <div className="row no-gutters mb-0">
            <div className="col-md-4">
              <img src={recipe.recipe.image} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body text-dark">
                <span>{recipe.recipe.label}</span>
                <p className="card-text">
                  Preparation time : {recipe.recipe.totalTime} min
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Sidebar;
