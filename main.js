$(function(){
// document ready

newCocktail()

async function newCocktail() {
  try {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    const response = await axios.get(url)
    console.log(response.data.drinks[0].strDrink)
    console.log(response.data.drinks[0])
  } catch (error) {
    console.log(error)
  }
}



// end document ready  //
})
