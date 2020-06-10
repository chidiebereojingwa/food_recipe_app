import React from 'react'
import style from "./recipe.module.css"


export default function Recipe({title,caloris,image,ingredients}) {
    return (
        <div className={style.recipe}>
           <h1 >{title}</h1> 
           <ol>
           {ingredients.map(ingredient=>(
               <li>{ingredient.text}</li>
           ))}
           </ol>
           <h1>{caloris}</h1>
           <img src={image} alt="recipe image"/>
        </div>
    )
}
