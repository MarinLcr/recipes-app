import React, { useContext } from 'react';

import { Link } from "react-router-dom";

import RecipesContext from "../../contexts/RecipesContext";
import Recipe from "../Favorites/components/recipe"

import { uuid } from 'uuidv4';

const Index = () => {
    const {
        favorites
    } = useContext(RecipesContext);
 
    return (
        <div className="App">
            <div className="row background-element mb-5">
            </div>
            <div className="container">
                <h2 className="text-center mb-3 text-dark">{favorites.length > 0 ? 'Welcome to your recipes favorites, enjoy !' : "You don't have any favorites recipies for the moment"}</h2>
                <p className="text-center mb-5 text-dark">Always more inspiration in the kitchen thanks to our easy, quick and trendy recipes.</p>
                <div className="container-all-recipes">
                    {favorites.length !== 0 && favorites.map((recipe) =>
                        <Recipe key={uuid()} recipe={recipe} id={recipe.favId} />
                    )}
                </div>
                <div className="card-action">
                    <Link className="text-dark" to="/">Retour</Link>
                </div>
            </div>
        </div>
    );
};

export default Index;