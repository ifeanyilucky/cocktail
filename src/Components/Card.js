import styled from "styled-components";
import Link from "next/link";
export const Card = ({ drink }) => {
  return (
    <CardStyle className="col-md-4 py-3">
      <div className="cards ">
        <div className="cards__two"></div>
        <Link
          href={{
            pathname: `/cocktails/${drink.idDrink}`,
            state: { strDrink: drink.strDrink },
          }}
        >
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="w-75"
          />
        </Link>

        <div className="cards__title">
          <h5>
            {drink.strDrink < 20
              ? `${drink.strDrink}`
              : `${drink.strDrink.substring(0, 25)}...`}
          </h5>
        </div>
      </div>
    </CardStyle>
  );
};
const CardStyle = styled.div`
  .cards {
    position: relative;

    flex-flow: row nowrap;
    justify-content: center;

    .cards__two {
      border-top: 1px solid white;
      border-left: 1px solid white;
      border-color: var(--primary-color);

      width: 80px;
      height: 80px;
      position: absolute;
      top: 0;
      left: 10;
    }
    img {
      margin-left: 15px;
      margin-top: 15px;
      z-index: 1;
      cursor: pointer;
    }
    .cards__title {
      color: var(--primary-color);
      text-align: center;
    }
  }
`;
