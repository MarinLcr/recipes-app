import React, { useState } from 'react';

const Context = React.createContext();

const Provider = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [query, setQuery] = useState("pizza");
	const [recipe, setRecipe] = useState([]);
	const [favorites, setFavorites] = useState([]);

	return (
		<Context.Provider
			value={{
                recipes, setRecipes,
                isLoading, setIsLoading,
				query, setQuery,
				recipe, setRecipe,
				favorites, setFavorites
			}}
		>
			{children}
		</Context.Provider>
	)
}
export { Provider };
export default Context;