$(function(){
// document ready
$('.hidden-by-default').hide();

$('button').click(

async function newCocktail() {
  $('.hidden-by-default').show();
  $('#ingredients-list').html(" ")
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
  $('#cocktailName').html(response.data.drinks[0].strDrink)
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

  // console.log(ingredients);

  ingredients.forEach((ingredient, measure) => {
    $('#ingredients-list').append(
      `<li> ${ingredient.measure} ${ingredient.ingredient}</li>`)
   // console.log(ingredient.measure)
   // console.log(ingredient.ingredient)
  })
  //
}


// end document ready  //
})
