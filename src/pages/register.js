import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FormGroup, Label, Input} from "../Forms";

function RegisterPage() {
  return (
    <Wrapper>
      <Header>
        <Link to="/">
          <Logo src="/images/finalLogo.png" alt="logo"></Logo>
        </Link>
      </Header>
      <Content>
        <span>Pre-register for chefs only! Thank you.</span>
        <RegisterForm>
          <FormGroup>
            <Label htmlFor="label">Full Name</Label>
            <Input id="label" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email address</Label>
            <Input  id="email"/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cuisines">Interested cuisines</Label>
            <Input id="cuisines"/>
          </FormGroup>
          <Link to="/" style={{ textDecoration: "none" }}>
            <SubmitButton>Submit</SubmitButton>
          </Link>
        </RegisterForm>
      </Content>
      <ImageContent>
        <ContentImage
          src="/images/bg2-edit2.jpg"
          style={{ top: "50px" }}
          alt="pix"
        ></ContentImage>
      </ImageContent>
    </Wrapper>
  );
}

export default RegisterPage;

const SubmitButton = styled.button`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  margin-left: 20px;
  margin-top: 40px;
  text-align: center;
  border-radius: 20px;
  background: red;
  font-size: 12px;
  font-smooth: inherit;
  font-family: "Montserrat", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  /* background-color: #fff; */
  color: white;
  height: 34px;
  left: 35px;
  position: absolute;
  width: 120px;

  *,
  & {
    transition: 2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    background: black;
  }

  @media (max-width: 450px) {
    width: 100px;
    height: 40px;
    font-size: 12px;
    
  }
`;

const ContentImage = styled.img`
  position: absolute;
  right: 0;
  justify-content: center;
  height: 500px;
  width: 700px;
  z-index: 1;

  @media (max-width: 450px) {
    height: 250px;
    width: 350px;
    right: 0;
    bottom: 0;
  }
`;

const ImageContent = styled.div`
  position: absolute;
  top: 30px;
  height: 600px;
  width: 49%;
  right: 0;

  @media (max-width: 450px) {
    height: 400px;
    width: 49%;
    top: 60%;
  }
`;

const RegisterForm = styled.div`
  margin-top: 100px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-self: flex-start;
  height: 400px;
  width: 70%;
 

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

const Logo = styled.img`
  height: 150px;
  width: 150px;
  margin-left: 9px;

  @media (max-width: 450px) {
    height: 150px;
    width: 150px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: space-between;
  position: sticky;
  width: 100%;
  background: #f7f3ef;
  height: 120px;
  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    flex-direction: column;
    top: 0;
  }
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 100vh;
  width: 50%;
  //background: #f7f3ef;
  font-size: 18px;

  @media (max-width: 450px) {
    font-size: 16px;
    margin-top: 100px;
    overflow: hidden;
    height: 50vh;
    width: 100vw;
    align-items: center;
  }
  @media (max-width: 750px) {
    overflow-x: hidden;
    width: 100vw;
  }

  span {
    position: relative;
    top: 40px;
    left: 20px;
    color: black;
    @media (max-width: 450px) {
        left: 0;
        font-size: 15px;
  }
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  background: #f7f3ef;
  height: 100vh;
  width: 100vw;
  font-size: 23px;
  line-height: 1.47059;
  font-weight: 800;
  letter-spacing: 0.022em;
  font-family: "Montserrat", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  color: #1d1d1f;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }
  @media (max-width: 750px) {
    height: 100vh;
    width: 100vw;
  }
`;
