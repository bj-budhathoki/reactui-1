import React from "react";
import { Card, SecondaryCard } from "../Card";
import { CardlistWrapper, CardsWrapper } from "./CardListStyles";
import { Title } from "../Title";
const CardList = () => {
  return (
    <>
      <CardlistWrapper>
        <Title title="Most popular" />
        <CardsWrapper>
          <Card />
        </CardsWrapper>
      </CardlistWrapper>
      <CardlistWrapper>
        <Title title="New Arrival" />
        <CardsWrapper>
          <SecondaryCard />
        </CardsWrapper>
      </CardlistWrapper>
    </>
  );
};
export default CardList;
