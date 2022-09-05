import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram, Twitter, WhatsApp } from "@material-ui/icons";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { mobile } from "../Responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Logo = styled.h2``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContanctItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>CraftCandu</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          nihil magni voluptate odit? Veritatis omnis, excepturi quod aut autem
          magni officia maiores exercitationem blanditiis a pariatur hic iure
          sit incidunt.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="F56040">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="075E54">
            <WhatsApp />
          </SocialIcon>
          <SocialIcon color="1DA1F2">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Wall Hanging</ListItem>
          <ListItem>Statues</ListItem>
          <ListItem>Mask</ListItem>
          <ListItem>Burner</ListItem>
          <ListItem>Meditation</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContanctItem>
          <RoomIcon style={{ marginRight: "10px" }} />
          234 Flexi Path, Helsinki 54566
        </ContanctItem>
        <ContanctItem>
          <PhoneIcon style={{ marginRight: "10px" }} />
          +1 234 52 45
        </ContanctItem>
        <ContanctItem>
          <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@test.com
        </ContanctItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
