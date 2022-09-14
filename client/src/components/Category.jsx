import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "./Responsive";

const Container = styled.div`
  flex: 1;
  margin: 4px;
  padding: 8px;
  height: 70vh;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 8px;
  border: 1px #e0e0d1 solid;
`;

const Image = styled.img`
  width: 100%;
  height: 60%;
  margin: 0 auto;
  ${mobile({ height: "34vh" })}
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
`;
const Button = styled.button`
  border: 1px solid white;
  border-radius: 10px;
  font-size: 16px;
  padding: 8px;
  cursor: pointer;
  font-weight: 400;
  background-color: #ad7c6a;
  color: white;
`;

const CategoryItem = ({ catItem }) => {
  return (
    <Container>
      <Link to={`/products/${catItem.cat}`} style={{ textDecoration: "none" }}>
        <Image src={catItem.img} />
        <Info>
          <Title>{catItem.title}</Title>
          <Button>SHOW MORE</Button>
        </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
