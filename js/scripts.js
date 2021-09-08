const dogFoodData = [
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

const catFoodData = [
  {
    name: 'Blue Buffalo Wilderness Chicken - for Cats!',
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

const dogNomNomData = [
  {
    name: 'BEEF MASH',
    macronutrients: {
      proteinPercentage: 34,
      fatPercentage: 15,
      calorieDensity: 3599,
      proteinGrams: 93,
      fatGrams: 48,
      carbohydrateGrams: 75,
    },
    image: 'imgs/bowl_beef_square.png'
  },
]

const catNomNomData = [
  {
    name: 'CHICKEN CUISINE',
    macronutrients: {
      proteinPercentage: 34,
      fatPercentage: 15,
      calorieDensity: 3599,
      proteinGrams: 93,
      fatGrams: 48,
      carbohydrateGrams: 75,
    },
    image: 'imgs/bowl_beef_square.png'
  },
]

document.addEventListener('DOMContentLoaded', (event) => {
  const callToCompare = document.querySelector('.call-to-compare');
  const nutritionComparison = document.querySelector('.nutrition-comparison');
  const petFoodNutritionData = document.querySelector('.pet-food-brand-nutrition-data');
  const nomNomNutritionData = document.querySelector('.nomnom-nutrition-data');
  const nutritionPercentages = document.querySelector('.nutrition-percentages');
  const petFoodSelector = document.querySelector('#pet-food-select');
  const nomNomSelector = document.querySelector('#nomnom-food-select');

  let addDogFoodOptions = () => {
    for (let i = 1; i < petFoodSelector.options.length; i++) {
      petFoodSelector.options[i] = null;
    }

    dogFoodData.forEach((data, idx) => {
      let newOption = document.createElement('option');
      let optionText = document.createTextNode(data.name);
      newOption.appendChild(optionText);
      newOption.setAttribute('value', idx);
      petFoodSelector.appendChild(newOption);
    })
  }

  let addDogNomNomOptions = () => {
    for (let i = 0; i < nomNomSelector.options.length; i++) {
      nomNomSelector.options[i] = null;
    }
    dogNomNomData.forEach((data, idx) => {
      let newOption = document.createElement('option');
      let optionText = document.createTextNode(data.name);
      newOption.appendChild(optionText);
      newOption.setAttribute('value', idx);
      nomNomSelector.appendChild(newOption);
    })
  }

  addDogFoodOptions();
  addDogNomNomOptions();

  // add listener to radio buttons
  //    update the petType
  //    update the selector options

  petFoodSelector.addEventListener('change', (event) => {
    let option = parseInt(event.target.value, 10);
    let nomNomOption = parseInt(nomNomSelector.value, 10);
    let selectedBrand;
    let selectedNomNom;
    if (petType === 'dog') {
      selectedBrand = dogFoodData[option];
      selectedNomNom = dogNomNomData[nomNomOption];
    }
    // let selectedBrand = petFoodData[option];
    // let selectedNomNom = nomNomData[nomNomOption];

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
    
    petFoodNutritionData.innerHTML = `\
    <img src=${selectedBrand.image} class="brand-image padding-bottom-small">\
    <div>\
    <p>Protein</p>\
    <p>${macronutrients.proteinGrams}</p>\
    <p>Fat</p>\
    <p>${macronutrients.fatGrams}</p>\
    <p>Carbohydrates</p>\
    <p>${macronutrients.carbohydrateGrams}</p>\
    </div>\
    `

    let nomNomMacronutrients = selectedNomNom.macronutrients;

    nomNomNutritionData.innerHTML = `\
    <img src="imgs/nom_nom_logo.svg" class="nom-nom-logo padding-bottom-small">\
    ${selectedNomNom.name}\
    <img src=${selectedNomNom.image} class="brand-image padding-bottom-small">\
    <div>\
    <p>Protein</p>\
    <p>${nomNomMacronutrients.proteinGrams}</p>\
    <p>Fat</p>\
    <p>${nomNomMacronutrients.fatGrams}</p>\
    <p>Carbohydrates</p>\
    <p>${nomNomMacronutrients.carbohydrateGrams}</p>\
    </div>\
    `
  })
});