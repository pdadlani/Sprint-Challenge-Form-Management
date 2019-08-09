import React from 'react';

const Recipes = (props) => {

  console.log('props in Recipes', props)
  return (
    <>
      <button onClick={props.dataBtn}>Let's see delicious results</button>


      {/* <div> */}
        {/* {props.recipeData && props.recipeData.map((recipe, index) => (
          <div key={index} className='recipe'>
            <h3 >{recipe.course} course: {recipe.name}</h3>
          </div>
        ))} */}
      {/* </div> */}


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