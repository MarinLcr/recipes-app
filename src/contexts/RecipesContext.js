import React, { useState } from 'react';

const Context = React.createContext();

const Provider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [query, setQuery] = useState("pizza");
	const [recipe, setRecipe] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [favid, setFavid] = useState(0);

	return (
		<Context.Provider
			value={{
                recipes, setRecipes,
                isLoading, setIsLoading,
				query, setQuery,
				recipe, setRecipe,
				favorites, setFavorites,
				favid, setFavid
			}}
		>
			{children}
		</Context.Provider>
	)
}
export { Provider };
export default Context;