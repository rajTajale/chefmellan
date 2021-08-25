import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import FoodLottie from "../FoodLottie";
import PreparingLottie from "../PreparingLottie";
import EatingLottie from "../EatingLottie";
import WaveBackground from "../WaveBackground";

function IndexPage() {
  return (
    <MainWrapper>
      <Header>
        <Logo src="/images/finalLogo.png" alt="logo"></Logo>
        <Text>Coming soon !</Text>
      </Header>
      <Content1>
        <TextWrapper>
          <span>Get your meal plans from the chefs near you.</span>
          Connecting everyone and building a community.
          <br />
          <br />
          <span>Chefs, don't miss this opportunity.</span>
          <Link to="/register">
            <RegisterButton>Register</RegisterButton>
          </Link>
        </TextWrapper>
        <Image src="/images/one-edit.jpg" style={{ top: "50px" }} alt="pix" />
      </Content1>
      <Content2>
        <WaveBackground />
        <MiniContent>
          <TextWrapper2>
            <span>HOW Chefmellan WORKS</span>
          </TextWrapper2>
          <MenuItems>
            <Part1>
              <FoodLottie className="foodLottie" />
              Users create a collection of groceries
            </Part1>
            <Part2>
              <PreparingLottie className="preparingLottie" />
              Verified Chefmellans' offer you meal plans based on your cart
            </Part2>
            <Part3>
              <EatingLottie className="eatingLottie" />
              Confirm the meal plan and get it delivered
            </Part3>
          </MenuItems>
        </MiniContent>
      </Content2>
    </MainWrapper>
  );
}

export default IndexPage;

const MiniContent = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 3;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: row;
  }
`;

const Text = styled.p`
  position: absolute;
  right: 0;
  margin-right: 7%;
  font-size: 15px;
  color: red;
  @media (max-width: 768px) {
  }
  @media (max-width: 450px) {
    visibility: hidden;
  }
`;

const RegisterButton = styled.button`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  background: red;
  margin-top: 25px;
  font-size: 16px;
  line-height: 1.47059;
  font-weight: 800;
  letter-spacing: 0.022em;
  font-family: "Montserrat", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  /* background-color: #fff; */
  color: white;
  height: 50px;
  width: 160px;

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
    width: 160px;
    height: 40px;
    justify-content: center;
    margin-top: 10px;
    font-size: 14px;
    margin-left: 45%;
  }
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
  width: 100vw;
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

const Part1 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  height: 400px;
  width: 250px;
  margin-top: 4%;
  font-size: 20px;

  @media (max-width: 450px) {
    font-size: 16px;
    height: 150px;
    width: 250px;

    .foodLottie {
      height: 10px;
      width: 150px;
    }
  }
`;

const Part2 = styled.div`
  align-items: center;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  height: 400px;
  width: 250px;
  margin-top: 4%;

  @media (max-width: 450px) {
    font-size: 16px;
    height: 150px;
    width: 250px;
  }
`;

const Part3 = styled.div`
  align-items: center;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  height: 400px;
  width: 250px;
  margin-top: 4%;

  @media (max-width: 450px) {
    font-size: 16px;
    height: 150px;
    width: 250px;
  }
`;

const MenuItems = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 500px;
  margin-top: 15%;
  align-self: center;

  @media (max-width: 450px) {
    flex-direction: column;
    justify-content: space-evenly;
    gap: 9em;
    margin-top: 5%;
    
    transform: scale(0.6);
    
  }
`;

const Image = styled.img`
  position: absolute;
  justify-content: center;
  left: 45%;
  margin-top: 5%;
  height: 500px;
  width: 700px;
  z-index: 1;

  @media (max-width: 450px) {
    width: 200px;
    height: 180px;
    margin-top: 70%;
    left: 40%;
    bottom: 0;
  }
`;

const MainWrapper = styled.div`
  overflow: hidden;
  display: grid;
  position: relative;
  background-color: #f7f3ef;
  height: 100%;
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
    height: 100%;
    flex-direction: column;
  }
  @media (max-width: 750px) {
    height: 100%;
    width: 100vw;
  }
`;

const Content1 = styled.div`
  height: 100%;
  width: 100%;
  background: #f7f3ef;
  font-size: 23px;
  line-height: 1.47059;
  font-weight: 800;
  letter-spacing: 0.022em;
  font-family: "Montserrat", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  /* background-color: #fff; */
  color: #1d1d1f;

  @media (max-width: 450px) {
    font-size: 16px;
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 750px) {
    overflow-x: hidden;
    width: 100vw;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-left: 10px;
  height: 500px;
  margin-top: 50px;
  padding: 1em;
  z-index: 3;
  font-size: 23px;
  line-height: 1.47059;
  font-weight: 800;
  letter-spacing: 0.022em;
  font-family: "Montserrat", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  /* background-color: #fff; */
  color: black;
  span {
    text-shadow: 2px 2px black;
    background: red; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      red,
      yellow
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      orange,
      lightblue
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 33px;

    @media (max-width: 450px) {
      font-size: 18px;
    }
  }

  @media (max-width: 450px) {
    font-size: 16px;
    height: 400px;
    gap: 1em;
  }
`;

const TextWrapper2 = styled.div`
  position: absolute;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 500px;
  margin-top: 60px;
  z-index: 3;
  font-weight: 800;

  font-family: "Montserrat", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  span {
    text-shadow: 2px 2px black;
    background: red; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      white,
      green
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      orange,
      lightblue
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    font-size: 30px;

    @media (max-width: 450px) {
      font-size: 20px;
    }
  }

  @media (max-width: 450px) {
    height: 200px;
    font-size: 16px;
    margin-top: 80px;
  }
`;

const Content2 = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 4;
  background: whitesmoke;

  @media (max-width: 450px) {
    display: flex;
    flex-direction: row;
  }
  @media (max-width: 750px) {
    height: 100vh;
    width: 100vw;
  }
`;
