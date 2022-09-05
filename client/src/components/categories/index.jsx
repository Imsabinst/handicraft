import React from "react";
import styled from "styled-components";
import { categories } from "../../data";
import CategoryItem from "../category";
import { mobile } from "../Responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem catItem={item} key={item.catId} />
      ))}
    </Container>
  );
};

export default Categories;
