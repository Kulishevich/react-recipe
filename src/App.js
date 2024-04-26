import Header from './components/Header/Header';
import './global.css'
import RecipeItem from './components/RecipeItem/RecipeItem';

function App() {
  return (
    <div className='main'>
        <Header/>
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
