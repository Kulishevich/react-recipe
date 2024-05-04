import React, { useState } from 'react'
import { useCreateRecipeMutation } from '../../store/api/recipe.api'
import styles from './CreateRecipe.module.css'

const defaultValue = {
    name: '',
    image: '',
}

export default function CreateRecipe() {
    const [recipe, setRecipe] = useState(defaultValue)

    const [createRecipe] = useCreateRecipeMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        createRecipe(recipe)
        setRecipe(defaultValue)
    }

  return (
    <div>
        <form onSubmit={handleSubmit} className={styles.container}>
            <label>
                <h3>Название рецепта:</h3>
                <input value={recipe.name} placeholder='Name' onChange={(event) => setRecipe({...recipe, name: event.target.value})} />
            </label>
            <label>
                <h3>Картинка рецепта:</h3>
                <input value={recipe.image} placeholder='Image' onChange={(event) => setRecipe({...recipe, image: event.target.value})} />
            </label>
            <button className={styles.button} type='submit'>Отправить</button>
        </form>
    </div>
  )
}
