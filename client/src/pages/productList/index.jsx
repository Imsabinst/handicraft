import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Announcement from "../../components/announcement";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Newsletter from "../../components/newsletter";
import PopularProducts from "../../components/products";
import { mobile } from "../../components/Responsive";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    width: "0px 20px",
    diplay: "flex",
    flexDirection: "column",
    alignItems: "center",
  })}
`;
const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 28px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{category}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="types" onChange={handleFilters}>
            <Option disabled>Types</Option>
            {/*  <Option>SINGING BOWLS</Option>
            <Option>GONGS</Option>
            <Option>TINGSA MEDITATION CUSHION THANGKA / WALL HANGING</Option>
            <Option>
              RITUAL ITEM INCENSE / BURNER & HOLDER STATUES/ MASK NEPALI
            </Option>
            <Option>CULTURAL ITEM</Option>
            <Option>mask</Option> */}

            <Option>statue</Option>
            <Option>wooden Carving</Option>
            <Option>mask</Option>
            <Option>woodworking</Option>
            <Option>sculpture</Option>
            <Option>pottery</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="dsc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <PopularProducts category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
