import "./HomePage.scss";

function HomePage() {
  fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then((response) => response.json())
    .then((data) => console.log({ data }));

  return <div>Home</div>;
}

export default HomePage;
