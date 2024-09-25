const entree1 = {
    starter : "Bacon Cheese Fries",
    main: "Beef Burger and Coleslaw",
    dessert: "Deep Fried Ice-Cream"
};

const entree2 = {
    starter : "Smoked Salmon On Rye",
    main: "Vegetarian Couscous Rolls",
    dessert: "Fruit Plate"
};

const entree3 = {
    starter : "Chips and Hummus",
    main: "Grilled Chicken in Hot Sauce",
    dessert: "Chocolate Ganache Cake"
};

const entree4 = {
    starter: "rolls and butter",
    main: "Grilled salmon",
    dessert: "mursmello"
};

const entree5 = {
    starter: "french fries",
    main: "steak",
    desssert: "cheesecake"
}

const meals = [entree1, entree2, entree3, entree4, entree5];


const randomMeal = function() {
    // Get a random number between 0 and the length of the array, meals
    let mealNumber = Math.floor(Math.random() * meals.length);
    showMeal(mealNumber);
    }

const showMeal = (mealNumber)=> {
    let str = `Start with ${meals[mealNumber].starter}, 
 followed by ${meals[mealNumber].main}, 
 and finish off your meal with ${meals[mealNumber].dessert}`;
    let area = document.querySelector(".randomMeal")
    area.innerHTML = str;
}

// ... add more meal objects

// Add more choices and update the array

