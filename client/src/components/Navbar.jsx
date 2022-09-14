import React from "react";
import { Badge } from "@material-ui/core";

import { Search, ShoppingCartOutlined } from "@material-ui/icons";

import styled from "styled-components";
import { mobile } from "./Responsive";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 80px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 4px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "2px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "20px", marginLeft: "4px" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  margin-left: 25px;
  padding: 2px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin: 24px;
  ${mobile({ fontSize: "12px", marginLeft: "8px", margin: "12px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>CraftCandu</Logo>
        </Center>
        <Right>
          <Link to={`/login`} style={{ textDecoration: "none" }}>
            <MenuItem>Login</MenuItem>
          </Link>
          <Link to={`/register`} style={{ textDecoration: "none" }}>
            <MenuItem>Register</MenuItem>
          </Link>
          <Link to={`/cart`} style={{ textDecoration: "none" }}>
            <MenuItem>
              <Badge
                badgeContent={quantity}
                color="primary"
                overlap="rectangular"
              >
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
