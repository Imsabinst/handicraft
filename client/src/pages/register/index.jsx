import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../../components/Responsive";

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
  width: 40%;
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
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  padding: 10px;
  margin: 20px 20px 0px 0px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
`;

const Register = () => {
  return (
    <Container>
      <Logo>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Title>CraftCandu</Title>
        </Link>
      </Logo>
      <WrapperContainer>
        <Wrapper>
          <Title>Crate An Account</Title>
          <Form>
            <Input placeholder="first name" />
            <Input placeholder="last name" />
            <Input placeholder="username" />
            <Input placeholder="email" />
            <Input placeholder="password" />
            <Input placeholder="confirm password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </WrapperContainer>
    </Container>
  );
};

export default Register;
