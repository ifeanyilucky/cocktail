import React, { Component } from "react";
import Layout from "../../Components/Layout";

class Cocktails extends Component {
  state = {
    activeDrink: [],
  };

  componentDidMount = () => {};
  render() {
    console.log(this.props);
    return (
      <Layout title="Cocktail name here too">
        <div>
          <h2 style={{ color: "white" }}>COCKTAIL TITLE HERE</h2>
          {/* <img src={drink.strDrinkThumb} alt="Loveth" /> */}
        </div>
      </Layout>
    );
  }
}
export default Cocktails;

// `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.idDrink}`
