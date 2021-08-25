import styled from "styled-components";

export const FormGroup = styled.div`
  color: palevioletred;
  display: block;
  width: 200px;
  margin-top: 20px;

  @media (max-width: 450px) {
    width: 200px;

    margin-top: 5px;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: black;
  display: block;
  @media (max-width: 450px) {
    font-size: 14px;
    margin-bottom: 0.2em;
  }
`;

export const Input = styled.input`
  padding: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
  @media (max-width: 450px) {
    font-size: 14px;
    margin-bottom: 0.2em;
  }
`;
