import React from 'react';
import { useHistory } from 'react-router-dom';

 

const Recipe = ({ recipe, id }) => {

    const history = useHistory();

    const goToRecipe = (id) => {
        history.push(`/recipes/${id}`);
      }


    const { label, image, ingredients} = recipe.recipe;

    return (
            <a onClick={() => goToRecipe(id)}>
                <div className="col-12">
                    <div className="card cursor-pointer hoverable">
                        <div className="card-image">
                            <img src={image} alt={label}/>
                            <a onClick={() => goToRecipe(id)}
                            className="btn-floating halfway-fab waves-effect waves-light "><i className="material-icons">menu_book</i></a>
                        </div>
                        <div className="card-content">
                        <span className="card-title text-dark">{label}</span>
                        <p className="text-dark">Number of ingredients: {ingredients.length}</p>
                        </div>
                    </div>
                </div>
            </a>

    )

            
};

export default Recipe; 