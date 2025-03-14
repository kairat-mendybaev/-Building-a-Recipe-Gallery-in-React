import React from 'react';

// Sample data for the recipe gallery
const recipes = [
  { id: 1, title: "Spaghetti Carbonara", ingredients: ["Pasta", "Eggs", "Cheese", "Bacon"], image: "https://example.com/carbonara.jpg" },
  { id: 2, title: "Chicken Tikka Masala", ingredients: ["Chicken", "Yogurt", "Spices", "Tomatoes"], image: "https://example.com/tikka.jpg" },
  { id: 3, title: "Beef Stroganoff", ingredients: ["Beef", "Mushrooms", "Onion", "Sour Cream"], image: "https://example.com/stroganoff.jpg" },
];

function RecipeGallery() {
  return (
    <div style={galleryStyle}>
      {recipes.map((recipe) => (
        <div key={recipe.id} style={cardStyle}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title} style={imageStyle} />
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Styling
const galleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '20px',
  padding: '20px'
};

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '15px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover'
};

export default RecipeGallery;
