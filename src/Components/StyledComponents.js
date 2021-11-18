import { Form, Field } from "formik";
import styled from "styled-components";

export const FormDiv = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding: 1.5rem 0;
  margin: 3rem auto;
  background-color: #47624f;
  color: #000;
  border: 1px solid black;
  border-radius: 0.5rem;
  -webkit-box-shadow: 0 1rem 1rem black;
  -moz-box-shadow: 0 1rem 1rem black;
  box-shadow: 0 1rem 1rem black;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 300;
  text-align: center;
  padding-top: 4rem;
`;

export const Input = styled(Field)`
  margin: 1rem auto;
  width: 70%;
  height: 2rem;
  border: none;
  padding: 0.5rem;
  font-size: 1.5rem;
  background-color: #447604;
  color: #fff;
  &::placeholder {
    color: #9ffcdf;
  }
`;

export const Button = styled.button`
  height: 2.5rem;
  margin: 0.5rem auto;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
  border: none;
  background-color: #fff;
  transition: all 0.3s ease-in;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export const Error = styled.p`
  width: 70%;
  height: 1.5rem;
  font-size: 0.75rem;
  text-align: center;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 5px 10px;
  margin: -8px auto -1rem;
  z-index: 3;
`;
export const Nav = styled.nav`
  background-color: #7ca7ad;
`;
export const Herocont = styled.div`
  position: relative;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  margin-left: auto;
  margin-right: auto;
`;
export const Herovideocont = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
export const Herovideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover; ;
`;
export const Herotextcont = styled.div`
  padding: 256px 32px;
  position: relative;
  color: white;
`;
export const Herotitle = styled.h1`
  text-align: center;
  font-size: 60px;
  margin-bottom: 0;
`;
export const Herosub = styled.p`
  font-size: 24px;
  margin-top: 0;
  font-style: italic;
`;
export const Herovidoverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #47624f;

  mix-blend-mode: multiply;
`;
