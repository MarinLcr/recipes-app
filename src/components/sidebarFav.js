import React, { useContext } from "react";

import { useHistory } from "react-router-dom";
import RecipesContext from "../contexts/RecipesContext";

const SidebarFav = () => {
  const { recipe, setRecipe, favorites } = useContext(RecipesContext);

  const history = useHistory();

  const goToRecipe = (recipe, id) => {
    setRecipe(recipe);
    history.push(`/favorites/recipes/${id}`);
  };

  const randomIndex = () => {
    let tabl = [];
    let ni = [];
    for (let i = 0; i < favorites.length; i++) {
      ni = favorites[i].favId;
      if (ni !== recipe.favId) {
        tabl.push(ni);
      }
    }
    let n = 3;
    var shuffled = tabl.sort(function () {
      return 0.5 - Math.random();
    });

    var selected = shuffled.slice(0, n);

    let finalTab = [];
    for (let n = 0; n < favorites.length; n++) {
      for (let t = 0; t < selected.length; t++) {
        if (favorites[n].favId === selected[t]) {
          finalTab.push(favorites[n]);
        }
      }
    }

    return finalTab;
  };

  let finalSelect = randomIndex();

  return (
    <React.Fragment>
      {finalSelect.map((recipe, index) => (
        <div
          className="card mb-3 cursor-pointer hoverable"
          key={index}
          onClick={() => goToRecipe(recipe, recipe.favId)}
        >
          <div className="row no-gutters mb-0">
            <div className="col-md-4">
              <img src={recipe.image} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body text-dark">
                <span>{recipe.label}</span>
                <p className="card-text">
                  Preparation time : {recipe.totalTime} min
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
};

export default SidebarFav;
