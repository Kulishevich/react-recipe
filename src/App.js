import Header from './components/Header/Header';
import './global.css'
import RecipeItem from './components/RecipeItem/RecipeItem';
import { useGetRecipesQuery } from './store/api/api';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
// import User from './components/User/User';

function App() {
  const { data, isLoading } = useGetRecipesQuery()
  console.log(data, isLoading)
  return (
    <div className='main'>
        <Header/>
        <CreateRecipe/>
        {/* <User/> */}
        {isLoading ? <h2>...Loading</h2> : data ? data.map(recipe =>
        <RecipeItem 
          key={recipe.id}
          recipe={{
            id: recipe.id,
            name: recipe.name,
            image: recipe.image,
          }} />) : <h2>Not found</h2>}
    </div>
  )
}

export default App;