import Drinks from "../Components/drinks";
import Layout from "../Components/Layout";
import styled from "styled-components";
import { ImageSearchRounded, TableChart } from "@material-ui/icons";

const Index = () => {
  return (
    <Layout>
      <div className="hero">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <a className="navbar-brand" href="#">
              <h1>Cock</h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
            >
              <TableChart style={{ fontSize: "30px", color: "white" }} />
            </button>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="col-md-6">
            <div className="heroText">
              <h3 className="hero__subHead">We are</h3>
              <h1 className="hero__header">HazyOwl</h1>
              <p className="subTitle text-muted">
                Classic Irish Pub in the heart of the East Village, Manhattan, a
                great place to catch the game with solid drink prices, Ideal for
                those wanting to meet up with friends to chill, have a drink in
                a proper New York bar, and watch a bit of sports.
              </p>
              <div className="hero__btn__wrapper">
                <a href="#search">
                  <button className="golden-btn">Get started</button>
                </a>
              </div>
            </div>
          </div>
          <div />
        </div>
      </div>
      <section id="search">
        <Drinks />
      </section>
    </Layout>
  );
};

export default Index;
