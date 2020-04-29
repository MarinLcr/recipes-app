import React, { useContext, useEffect} from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

import RecipesContext from "../../contexts/RecipesContext";
import Loader from "../../components/Loader";
import Recipe from "../Home/components/Recipe"

import { uuid } from 'uuidv4';
import "../../styles/components/_loader.scss";
import "../../styles/components/_sidebar.scss";

// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";



const Home = () => {
    const {
		recipes,
        setRecipes,
        isLoading,
        setIsLoading,
        query,
        setQuery
    } = useContext(RecipesContext);

    const history = useHistory();


    const APP_ID = "a135bbc0";

    const APP_KEY = "f801488f12885a265066154a619a171a"
    
    const urlAPI = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const _fetchAllRecipes = async () => {
		setIsLoading(true);
		try {
            const res = await axios.get(urlAPI);
            const data = await res.data.hits;
			setRecipes(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			throw error;
        };
	};

	useEffect(() => {
		_fetchAllRecipes();
    }, []);

    const onChange = (e) => {
        setQuery(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        _fetchAllRecipes()
    }


    const goToFavorites = () => {
        history.push(`/favorites`);
    }

    if (isLoading) {
		return <Loader />;
    } 


    console.log("Rec : ", recipes);

        return (
            <div className="App">
                <div className="row background-element mb-5">
                    <div className="background-form col-12 d-flex flex-column align-center">
                            <form className="d-flex col-8 m-auto position-relative d-flex" onSubmit={onSubmit}>
                                <input className="input-field col-10" type="text" placeholder="Search Food" autoComplete="off" onChange={onChange} />
                                <button type="submit" value="search"><FontAwesomeIcon icon={faSearch} /></button>
                            </form>
                    </div>
                </div>
                <div className="container">
                <h2 className="text-center mb-3 text-dark">Recipes inspirations, hello !</h2>
                <p className="text-center mb-5 text-dark">Always more inspiration in the kitchen thanks to our easy, quick and trendy recipes.</p>
                <div className="container-all-recipes">
                    {recipes.length !== 0  && recipes.map((recipe, index) =>
                        <Recipe key={uuid()} recipe={recipe} id={index} />
                    )}
                </div>
            </div>
            <a onClick={() => goToFavorites()}
                            className="btn-floating halfway-fab waves-effect waves-light "><i className="material-icons">menu_book</i></a>
            </div>
        )
        };

export default Home;