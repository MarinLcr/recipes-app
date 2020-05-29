import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ recipe, id }) => {
  const { label, image, ingredients } = recipe;

  return (
    <Link className="link-recipe" to={`/favorites/recipes/${id}`}>
      <div className="col-12">
        <div className="card cursor-pointer hoverable">
          <div className="card-image">
            <img src={image} alt={label} />
            <button className="btn-floating halfway-fab waves-effect waves-light ">
              <i className="material-icons">menu_book</i>
            </button>
          </div>
          <div className="card-content">
            <span className="card-title text-dark">{label}</span>
            <p className="text-dark">
              Number of ingredients: {ingredients.length}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Recipe;
