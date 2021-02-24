import Drinks from "../Components/drinks";
import Layout from "../Components/Layout";
import styled from "styled-components";

const Index = () => {
  return (
    <Layout>
      <div className="hero">
        <div className="row container">
          <div className="col-xl-6">
            <div className="heroText">
              <h3 className="hero__subHead">We are</h3>
              <h1 className="hero__header">HazyOwl</h1>
              <p className="subTitle">
                Classic Irish Pub in the heard of the East Village, Manhattan, a
                great place to catch the game with solid drink prices, Ideal for
                those wanting to meet up with friends to chill, have a drink in
                a proper New York bar, and watch a bit of sports.
              </p>
              <a href="#search">
                <button className="golden-btn">Get started</button>
              </a>
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
