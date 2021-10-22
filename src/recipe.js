import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title,calories,image,ingredients})=>{
    return(
        <div className={style.recipe}>
            <div className={style.imageWrapper}>
            <img src={image} alt="" className={style.image} />
            </div>

            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>Calories: {calories}</p>
        </div>
    );
};

export default Recipe;