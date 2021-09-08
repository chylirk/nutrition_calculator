const petFoodData = [
  {
    name: 'Blue Buffalo Wilderness Chicken',
    macronutrients: {
      proteinPercentage: 34,
      fatPercentage: 15,
      calorieDensity: 3599,
      proteinGrams: 99,
      fatGrams: 44,
      carbohydrateGrams: 79,
    },
    image: 'imgs/blue_buffalo_wilderness_chicken.jpg'
  },
]

const nomNomData = [
  {}
]
document.addEventListener('DOMContentLoaded', (event) => {
  const callToCompare = document.querySelector('.call-to-compare');
  const nutritionComparison = document.querySelector('.nutrition-comparison');
  const nutritionPercentages = document.querySelector('.nutrition-percentages');
  const petFoodSelector = document.querySelector('#pet-food-select');

  petFoodSelector.addEventListener('change', (event) => {
    let option = parseInt(event.target.value, 10);
    let selectedBrand = petFoodData[option];

    if (!callToCompare.classList.contains('hidden')) {
      callToCompare.classList.add('hidden');
    }

    if (nutritionComparison.classList.contains('hidden')) {
      nutritionComparison.classList.remove('hidden');
    }

    let { macronutrients } = selectedBrand;
    nutritionPercentages.innerText = `${selectedBrand.name} contains \ 
          ${macronutrients.proteinPercentage}% min protein, \
          ${macronutrients.fatPercentage}% min fat and \
          has a calorie density of ${macronutrients.calorieDensity}kcal/kg.`
  })
});