import Header from './components/Header/Header';
import './global.css'
import RecipeItem from './components/RecipeItem/RecipeItem';
import User from './components/User/User';

function App() {
  return (
    <div className='main'>
        <Header/>
        <User/>
        <RecipeItem 
          recipe={{
            id: 1,
            name: 'Лазанья',
          }} 
        />
                <RecipeItem 
          recipe={{
            id: 2,
            name: 'Борщ',
          }} 
        />
                <RecipeItem 
          recipe={{
            id: 3,
            name: 'Драники',
          }} 
        />
    </div>
  )
}

export default App;