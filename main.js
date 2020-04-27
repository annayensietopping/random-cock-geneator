$(function(){
// document ready

$('button').click(
async function newCocktail() {
  try {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    const response = await axios.get(url)
    console.log(response.data.drinks[0].strDrink)
    console.log(response.data.drinks[0])
    updateDrink(response)
  } catch (error) {
    console.log(error)
  }

}
)

///
function updateDrink(response) {
  $('span').html(response.data.drinks[0].strDrink)
  $('#cocktail-pic').html(`<img src="${response.data.drinks[0].strDrinkThumb}" alt="" style="width:200px;">`)
  $('#instructions').html(response.data.drinks[0].strInstructions)

  const ingredients = [];
  for (let i = 0; i < 15; i++) {
    if (response.data.drinks[0][`strIngredient${i}`] != null) {
      ingredients.push({
        measure: response.data.drinks[0][`strMeasure${i}`],
        ingredient: response.data.drinks[0][`strIngredient${i}`]
      });
    }
  }

  console.log(ingredients);

  ingredients.forEach((ingredient, measure) => {
    $('#ingredients-list').append(
      `<li> ${ingredient.measure} ${ingredient.ingredient}</li>`)
   // console.log(ingredient.measure)
   // console.log(ingredient.ingredient)
  })



  // [{ingredient: string, measure: string}]

  // loop over that array and append li to #ingredients-list for each item
//
// $('#ingredients-list').append();
//
//   $('#ingredient1').html(response.data.drinks[0].strIngredient1)
//   $('#measure1').html(response.data.drinks[0].strMeasure1)
//
//
//   $('#ingredient2').html(response.data.drinks[0].strIngredient2)
//   $('#ingredient3').html(response.data.drinks[0].strIngredient3)
//   $('#ingredient4').html(response.data.drinks[0].strIngredient4)
//   $('#ingredient5').html(response.data.drinks[0].strIngredient5)
//   $('#ingredient6').html(response.data.drinks[0].strIngredient6)
//   $('#ingredient7').html(response.data.drinks[0].strIngredient7)
//   $('#ingredient8').html(response.data.drinks[0].strIngredient8)
//   $('#ingredient9').html(response.data.drinks[0].strIngredient9)
//   $('#ingredient10').html(response.data.drinks[0].strIngredient10)
}


// end document ready  //
})
