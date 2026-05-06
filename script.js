const recipes = [
    {name: "Pasta", desc: "Delicious Italian pasta"},
    {name: "Fried Rice", desc: "Simple rice dish"},
    {name: "Pancake", desc: "Sweet breakfast recipe"}
];

function displayRecipes(list) {
    const container = document.getElementById("recipes");
    container.innerHTML = "";

    list.forEach(r => {
        container.innerHTML += `
            <div class="recipe">
                <h2>${r.name}</h2>
                <p>${r.desc}</p>
            </div>
        `;
    });
}

document.getElementById("search").addEventListener("input", function() {
    const value = this.value.toLowerCase();
    const filtered = recipes.filter(r => r.name.toLowerCase().includes(value));
    displayRecipes(filtered);
});

displayRecipes(recipes);
