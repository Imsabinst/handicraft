import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { mobile } from "../components/Responsive";
import { login } from "../redux/apiCalls";

const Container = styled.div``;
const Logo = styled.div`
  margin-left: 50px;
`;

const WrapperContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #ebf0ec;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 10px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;

  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;
const LinkItem = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Logo>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>CraftCandu</Title>
        </Link>
      </Logo>
      <WrapperContainer>
        <Wrapper>
          <Title>Login</Title>
          <Form>
            <Input
              placeholder="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleClick} disabled={isFetching}>
              LOGIN
            </Button>
            {error && <Error>Opps! Something went wrong</Error>}
            <LinkItem>Forget Password?</LinkItem>
            <LinkItem>Create a new Account</LinkItem>
          </Form>
        </Wrapper>
      </WrapperContainer>
    </Container>
  );
};

export default Login;
