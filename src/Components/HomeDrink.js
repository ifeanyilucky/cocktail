import React, { Component } from "react";
import { Card } from "./Card";
import { Loading } from "./Icons";
export class HomeDrink extends Component {
  constructor() {
    super();
    this.state = {
      drinks: [],
      isFetching: false,
      visible: 12,
    };
  }

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.drinks);
        this.setState({ isFetching: true, drinks: result.drinks });
      });
  }
  componentDidUpdate() {
    localStorage.setItem("drinks", JSON.stringify(this.state.drinks));
  }
  loadMore = () => {
    this.setState((old) => {
      return {
        visible: old.visible + 6,
      };
    });
  };
  render() {
    const { drinks, isFetching } = this.state;
    return (
      <div>
        <div className="row py-5">
          {isFetching ? (
            drinks
              .slice(0, this.state.visible)
              .map((drink) => <Card drink={drink} />)
          ) : (
            <div className="col-12 mx-auto">
              <Loading />
            </div>
          )}
        </div>
        <div className="col-10 mx-auto py-5">
          <button className="golden-btn" onClick={this.loadMore}>
            Load more
          </button>
        </div>
      </div>
    );
  }
}
