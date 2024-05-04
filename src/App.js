import Header from './components/Header/Header';
import './global.css'
import RecipeItem from './components/RecipeItem/RecipeItem';
import { useGetRecipesQuery } from './store/api/api';
import CreateRecipe from './components/CreateRecipe/CreateRecipe';
// import User from './components/User/User';

const userId = 1;

function App() {
  const { data, isLoading } = useGetRecipesQuery(undefined, {
    skip: !userId,
})

  return (
    <div className='main'>
        <Header/>
        <CreateRecipe/>
        {/* <User/> */}
        <div className='RecipeContainer'>
          {isLoading ? <h2>...Loading</h2> : data ? data.map(recipe =>
          <RecipeItem 
            key={recipe.id}
            recipe={{
              id: recipe.id,
              name: recipe.name,
              image: recipe.image,
            }} />) : <h2>Not found</h2>}
        </div>
    </div>
  )
}

export default App;