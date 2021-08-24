import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import finalLogo from "../../static/images/finalLogo.png";
import content from "../../static/images/bg2-edit2.jpg";
import { FormGroup, Label, Input, Message } from "../Forms";

function RegisterPage() {
  return (
    <Wrapper>
      <Header>
        <Link to="/">
          <Logo src={finalLogo} alt="logo"></Logo>
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
            <Label>Email address</Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label>Interested cusines</Label>
            <Input />
          </FormGroup>
          <Link to="/" style={{ textDecoration: "none" }}>
            <SubmitButton>Submit</SubmitButton>
          </Link>
        </RegisterForm>
      </Content>
      <ImageContent>
        <ContentImage
          src={content}
          style={{ top: "50px" }}
          alt="pix"
        ></ContentImage>
      </ImageContent>
    </Wrapper>
  );
}

export default RegisterPage;

const SubmitButton = styled.div`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  margin-left: 20px;
  margin-top: 40px;
  border-radius: 20px;
  background: red;
  display: flex;
  align-self: center;
  justify-content: center;
  align-content: center;

  font-size: 12px;
  font-smooth: inherit;
  font-family: "Montserrat", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  /* background-color: #fff; */
  color: white;
  height: 24px;
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
    width: 280px;
    height: 80px;
    gap: 6px;
  }
`;

const ContentImage = styled.img`
  position: absolute;
  right: 0;
  justify-content: center;
  height: 500px;
  width: 700px;
  z-index: 1;
`;

const ImageContent = styled.div`
  position: absolute;
  top: 30px;
  height: 600px;
  width: 49%;
  right: 0;
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
  font-size: 18px;
`;

const Logo = styled.img`
  height: 150px;
  width: 150px;
  margin-left: 9px;
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
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 100vh;
  width: 50%;
  //background: #f7f3ef;
  font-size: 23px;
  @media (max-width: 450px) {
    overflow: hidden;
    width: 100vw;
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
    height: 100vh;
    width: 100vw;
  }
  @media (max-width: 750px) {
    height: 100%;
    width: 100%;
  }
`;
