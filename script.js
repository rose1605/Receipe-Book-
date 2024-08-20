// Sample data for recipes
const recipes = [
    {
        name: "Spaghetti Carbonara",
        image: "C:/Users/Dell/Pictures/Screenshots/sphagetti_carbonara.jpg",
        description: "A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
        ingredients: [
            "200g Spaghetti",
            "100g Pancetta",
            "2 large eggs",
            "50g Pecorino cheese",
            "50g Parmesan cheese",
            "Black pepper"
        ]
    },
    {
        name: "Chicken Curry",
        image: "C:/Users/Dell/Pictures/Screenshots/chickencurry.jpg",
        description: "A flavorful chicken curry made with a blend of spices and coconut milk.",
        ingredients: [
            "500g Chicken",
            "2 onions",
            "3 tomatoes",
            "1 cup coconut milk",
            "Spices (cumin, coriander, turmeric)",
            "Salt"
        ]
    },
    {
        name: "Paneer Butter Masala",
        image: "C:/Users/Dell/Pictures/Screenshots/paneer.jpg",
        description: "Paneer Butter Masala, also known as butter paneer is a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.",
        ingredients: [
            "½ cup vegetable oil.",
            "½ pound paneer, cut into 1/2-inch cubes.",
            "2 tablespoons butter.",
            "2 onions, finely chopped.",
            "1 teaspoon ginger paste.",
            "1 teaspoon garlic paste.",
            "1 tablespoon ground cashews.",
            "1 teaspoon ground red chiles."
        ]
    },
    {
        name: "Tomato Pachadi",
        image: "C:/Users/Dell/Pictures/Screenshots/Tomato.jpg",
        description: "Tomato Pachadi is a spicy, sour, and tangy chutney from the Andhra cuisine of Southern India.",
        ingredients: [
            "4 tomatoes (medium-sized)",
            "5-6 dried chilies",
            "2 tablespoons chana dal (chickpea lentils)",
            "2 tablespoons urad dal (black lentils)",
            "1 teaspoon Sarson seeds (mustard seeds)",
            "1 teaspoon salt",
            "1 teaspoon jeera (cumin)",
            "16 methi seeds (fenugreek seeds)",
            "1 teaspoon hing (asafoetida)",
            "20 curry leaves",
            "1 teaspoon Imli juice (tamarind)",
            "1/2 teaspoon haldi (turmeric)",
            "3-4 cloves",
            "garlic",
            "2-3 tablespoons of water"
        ]
    }
];

// Function to create a recipe card
function createRecipeCard(recipe) {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}">
        <div class="content">
            <h2>${recipe.name}</h2>
            <p>${recipe.description}</p>
            <button onclick="alert('Ingredients: ${recipe.ingredients.join(', ')}')">View Ingredients</button>
        </div>
    `;

    return card;
}

// Function to display recipes on the page
function displayRecipes(recipes) {
    const recipesContainer = document.getElementById("recipes");
    recipesContainer.innerHTML = "";
    recipes.forEach(recipe => {
        const card = createRecipeCard(recipe);
        recipesContainer.appendChild(card);
    });
}

// Function to search recipes
function searchRecipes(event) {
    const query = event.target.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query)
    );
    displayRecipes(filteredRecipes);
}

// Initialize the recipe display
document.getElementById("search").addEventListener("input", searchRecipes);
displayRecipes(recipes);
