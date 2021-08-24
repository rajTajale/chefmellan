import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import content from "../../static/images/one-edit.jpg";
import finalLogo from "../../static/images/finalLogo.png";
import FoodLottie from "../FoodLottie";
import PreparingLottie from "../PreparingLottie";
import EatingLottie from "../EatingLottie";
import WaveBackground from "../WaveBackground";

function IndexPage() {
  
  return (
    <MainWrapper>
      <Header>
        <Logo src={finalLogo} alt="logo"></Logo>
        <Text>Coming soon !</Text>
      </Header>
      <Content1>
        <TextWrapper>
          <span>Get your meal plans from the chefs near you.</span>
          Connecting everyone and building a community.
          <br />
          <br />
          <span>Chefs, don't miss this opportunity.</span>
          <Link to="/register"><RegisterButton>Register</RegisterButton></Link>
        </TextWrapper>
        <Image src={content} style={{ top: "50px"}} alt="pix" />
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
              <PreparingLottie />
              Verified Chefmellans' offer you meal plans based on your cart
            </Part2>
            <Part3>
              <EatingLottie />
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
`;

const Text = styled.p`
  position: absolute;
  right: 0;
  margin-right: 7%;
  font-size: 15px;
  color: red;
`;

const RegisterButton = styled.button`
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  border: 0px;
  background: red;
  margin-top: 25px;
  font-size: 18px;
  line-height: 1.47059;
  font-weight: 800;
  letter-spacing: 0.022em;
  font-family: "Montserrat", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  /* background-color: #fff; */
  color: white;
  height: 60px;
  width: 180px;

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
    grid-template-columns: auto auto;
    gap: 6px;

    justify-content: center;
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
`;

const MenuItems = styled.div`
  
  position: absolute;
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 500px;
  margin-top: 15%;
  align-self: center;
`;

const Image = styled.img`
  background-image: url("../images/two.png");
  position: absolute;
  justify-content: center;
  display: grid;
  left: 45%;
  margin-top: 5%;
  height: 500px;
  width: 700px;
  z-index: 1;
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
    height: 100%;
    width: 100vw;
  }
  @media (max-width: 750px) {
    height: 100vh;
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
    overflow: hidden;
    width: 100vw;
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
      font-size: 35px;
    }
  }
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;

const TextWrapper2 = styled.div`
  position: absolute;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 500px;
  margin-top: 60px;
  padding: 1em;
  z-index: 3;
  font-size: 28px;
  line-height: 1.47059;
  font-weight: 800;
  letter-spacing: 0.062em;
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
    font-size: 33px;

    @media (max-width: 450px) {
      font-size: 35px;
    }
  }
  @media (max-width: 450px) {
    font-size: 32px;
  }
`;

const Content2 = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 4;
  background: whitesmoke;
  @media (max-width: 450px) {
    overflow: hidden;
    width: 100vw;
  }
  @media (max-width: 750px) {
    overflow-x: hidden;
    width: 100vw;
  }
`;
