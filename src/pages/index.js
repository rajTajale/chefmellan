import React from "react";
import styled from "styled-components";
import content from "../images/one.png";
import grocery from "../images/kitchen.png";
import chef from "../images/cook.png";

function IndexPage() {
  return (
    <MainWrapper>
      <Content1>
        <TextWrapper>
          <span>Order your meals from local chefs,</span>
          <br />
          connecting everyone and building a community.
        </TextWrapper>

        <Image src={content} style={{ top: "50px" }} alt="pix" />
      </Content1>
      <Content2>
        <TextWrapper2>HOW IT WORKS</TextWrapper2>
        <MenuItems>
          <Part1>
            <Groceries src={grocery} style={{ top: "0" }} alt="pix"></Groceries>
            Make the list of Groceries
          </Part1>
          <Part2>
            <Chef src={chef} style={{ top: "0" }} alt="pix"></Chef>
            Verified Chefs offers you meal plans
          </Part2>
          <Part3>Confirm the meal plan and Enjoy</Part3>
        </MenuItems>
      </Content2>
    </MainWrapper>
  );
}

export default IndexPage;

const Chef = styled.img`
  margin-top: 20px;
  height: 200px;
  width: 200px;
`;

const Groceries = styled.img`
  margin-top: 20px;
  height: 200px;
  width: 200px;
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
`;

const Part2 = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  height: 400px;
  width: 250px;
  margin-top: 4%;
`;

const Part3 = styled.div`
  background: yellow;
  text-align: center;
  height: 400px;
  width: 250px;
  margin-top: 4%;
`;

const MenuItems = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 80%;
  height: 500px;
  margin-top: 12%;
  align-self: center;
  margin-left: 10%;
`;

const Image = styled.img`
  background-image: url("../images/two.png");
  position: absolute;
  justify-content: center;
  display: grid;
  left: 45%;
  height: 600px;
  width: 700px;
  z-index: 1;
`;

const MainWrapper = styled.div`
  display: grid;
  position: relative;

  height: 100%;
  width: 100%;
  font-size: 28px;
  line-height: 1.47059;
  font-weight: 800;
  letter-spacing: 0.022em;
  font-family: "Montserrat", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  /* background-color: #fff; */
  color: #1d1d1f;

  @media (max-width: 450px) {
    height: 100vh;
    width: 100vw;
  }
  @media (max-width: 750px) {
    height: 100vh;
    width: 100vw;
  }
`;

const Content1 = styled.div`
  height: 100vh;
  width: 100vw;
  background: #f7f3ef;
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
  width: 40%;
  height: 500px;
  margin-top: 200px;
  padding: 1em;
  z-index: 3;

  font-size: 28px;
  line-height: 1.47059;
  font-weight: 800;
  letter-spacing: 0.022em;
  font-family: "Montserrat", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
  /* background-color: #fff; */
  color: #1d1d1f;
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
  margin-left: 40%;

  width: 40%;
  height: 500px;
  margin-top: 30px;
  padding: 1em;
  z-index: 3;

  font-size: 28px;
  line-height: 1.47059;
  font-weight: 800;
  letter-spacing: 0.022em;
  font-family: "Montserrat", "SF Pro Text", "SF Pro Icons", "Helvetica Neue",
    "Helvetica", "Arial", sans-serif;
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

const Content2 = styled.div`
  height: 100vh;
  width: 100vw;
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
