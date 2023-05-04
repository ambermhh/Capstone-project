import React from 'react'


export const RecipeSearchContext = React.createContext();

export default function RecipeSearchProvider(props) {

    const [search, setSearch] = React.useState('');
    const [results, setResults] = React.useState([]);

    return (
        <RecipeSearchContext.Provider value={{search, setSearch, results, setResults}}>
        {props.children}
    </RecipeSearchContext.Provider>
  )
}
