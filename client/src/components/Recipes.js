import React from 'react';

const Recipes = (props) => {

  return (
    <>
      <button onClick={props.dataBtn}>Let's see delicious results</button>

      {props.showRecipeData ? (
        <div>
            {props.recipeData.map((recipe, index) => (
              <div key={index} className='recipe'>
                <h3 >{recipe.course} course: {recipe.name}</h3>
              </div>
            ))}
        </div>
        
      ) : null}
    </>
  )
}

export default Recipes;