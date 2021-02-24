// const searchUri = ``;
import styled from "styled-components";
import React, { Component } from "react";
import { Form } from "./Form";
import { Card } from "./Card";
import { HomeDrink } from "./HomeDrink";

class Drinks extends Component {
  state = {
    drinks: [],
  };
  getWord = async (e) => {
    const word = e.target.elements.word.value;
    e.preventDefault();

    const apiCall = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${word}`
    );
    const data = await apiCall.json();

    this.setState({ drinks: data.drinks });
    console.log(this.state.drinks);
  };

  render() {
    return (
      <Drink>
        <div className="col-10 mx-auto">
          <div className="py-4 text-capitalize">
            <h1>Our Drinks</h1>{" "}
            <p className="mx-auto col-7 text-center">
              Researchers in Scotland find that drinking is an important element
              of the young adult social experience. Group settings can make
              binge-drinking seem normal and like a rite of passage.
            </p>
          </div>

          <Form getWord={this.getWord} />
          <div>
            <ul>
              {this.state.drinks.map((drink) => (
                <li key={drink.idDrink}>
                  <h1>{drink.strDrink}</h1>
                  <img src={drink.strDrinkThumb} alt={drink.idDrink} />
                  <span style={{ color: "rebeccapurple" }}>
                    {drink.strAlcoholic}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <HomeDrink />
        </div>
      </Drink>
    );
  }
}

const Drink = styled.div`
  h1 {
    text-align: center;
  }
`;
export default Drinks;
