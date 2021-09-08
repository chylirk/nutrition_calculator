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
  {
    name: 'Blue Buffalo Wilderness Duck',
    macronutrients: {
      proteinPercentage: 34,
      fatPercentage: 15,
      calorieDensity: 3596,
      proteinGrams: 99,
      fatGrams: 44,
      carbohydrateGrams: 79,
    },
    image: 'imgs/blue_buffalo_duck.jpg'
  },
]

const catFoodData = [
  {
    name: 'Blue Buffalo Wilderness Chicken',
    macronutrients: {
      proteinPercentage: 40,
      fatPercentage: 18,
      calorieDensity: 3832,
      proteinGrams: 108,
      fatGrams: 50,
      carbohydrateGrams: 57,
    },
    image: 'imgs/blue_buffalo_cat_chicken.jpg'
  },
  {
    name: 'Blue Buffalo Wilderness Salmon',
    macronutrients: {
      proteinPercentage: 40,
      fatPercentage: 18,
      calorieDensity: 3850,
      proteinGrams: 108,
      fatGrams: 49,
      carbohydrateGrams: 58,
    },
    image: 'imgs/blue_buffalo_cat_salmon.jpg'
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
      proteinGrams: 163,
      fatGrams: 42,
      carbohydrateGrams: 21,
    },
    image: 'imgs/bowl_cat_chicken_square.png'
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
  const dogRecipesRadio = document.querySelector('#dog-recipes');
  const catRecipesRadio = document.querySelector('#cat-recipes');

  let petType = 'dog';

  let resetPetFoodOptions = () => {
    petFoodSelector.selectedIndex = 0;
    petFoodSelector.options.length = 1;

    for (let i = 1; i < petFoodSelector.options.length; i++) {
      petFoodSelector.options[i] = null;
    }
  }

  let resetNomNomOptions = () => {
    for (let i = 0; i < nomNomSelector.options.length; i++) {
      nomNomSelector.options[i] = null;
    };
  }

  let addDogFoodOptions = () => {
    resetPetFoodOptions();

    dogFoodData.forEach((data, idx) => {
      let newOption = document.createElement('option');
      let optionText = document.createTextNode(data.name);
      newOption.appendChild(optionText);
      newOption.setAttribute('value', idx);
      petFoodSelector.appendChild(newOption);
    })
  }

  let addDogNomNomOptions = () => {
    resetNomNomOptions();

    dogNomNomData.forEach((data, idx) => {
      let newOption = document.createElement('option');
      let optionText = document.createTextNode(data.name);
      newOption.appendChild(optionText);
      newOption.setAttribute('value', idx);
      nomNomSelector.appendChild(newOption);
    })
  }

  let addCatFoodOptions = () => {
    resetPetFoodOptions();

    catFoodData.forEach((data, idx) => {
      let newOption = document.createElement('option');
      let optionText = document.createTextNode(data.name);
      newOption.appendChild(optionText);
      newOption.setAttribute('value', idx);
      petFoodSelector.appendChild(newOption);
    })
  }

  let addCatNomNomOptions = () => {
    resetNomNomOptions();

    catNomNomData.forEach((data, idx) => {
      let newOption = document.createElement('option');
      let optionText = document.createTextNode(data.name);
      newOption.appendChild(optionText);
      newOption.setAttribute('value', idx);
      nomNomSelector.appendChild(newOption);
    })
  }

  addDogFoodOptions();
  addDogNomNomOptions();

  catRecipesRadio.addEventListener('click', (event) => {
    addCatFoodOptions();
    addCatNomNomOptions();
    petType = 'cat';
    if (callToCompare.classList.contains('hidden')) {
      callToCompare.classList.remove('hidden');
    }

    if (!nutritionComparison.classList.contains('hidden')) {
      nutritionComparison.classList.add('hidden');
    }
  });

  dogRecipesRadio.addEventListener('click', (event) => {
    addDogFoodOptions();
    addDogNomNomOptions();
    petType = 'dog';
    if (callToCompare.classList.contains('hidden')) {
      callToCompare.classList.remove('hidden');
    }

    if (!nutritionComparison.classList.contains('hidden')) {
      nutritionComparison.classList.add('hidden');
    }
  });

  petFoodSelector.addEventListener('change', (event) => {
    let option = parseInt(event.target.value, 10);
    let nomNomOption = parseInt(nomNomSelector.value, 10);
    let selectedBrand;
    let selectedNomNom;
    if (petType === 'cat') {
      selectedBrand = catFoodData[option];
      selectedNomNom = catNomNomData[nomNomOption];
    } else {
      selectedBrand = dogFoodData[option];
      selectedNomNom = dogNomNomData[nomNomOption];
    }

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
      <div class="padding-bottom-small flex-item">\
        <img src=${selectedBrand.image} class="brand-image padding-bottom-small">\
      </div>\
      <div class="flex-item">\
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
      <div class="padding-bottom-small flex-item">\
        <div class="logo">
          <img src="imgs/nom_nom_logo.svg" class="nom-nom-logo padding-bottom-small">\
        </div>
        <h2>${selectedNomNom.name}</h2>\
        <img src=${selectedNomNom.image} class="brand-image padding-bottom-small">\
      </div>\
      <div class="flex-item">\
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