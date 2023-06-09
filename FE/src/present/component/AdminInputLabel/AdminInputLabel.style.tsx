import styled from "@emotion/styled";
import { theme } from "@constant/theme";
import SCDream4 from "../../../assets/fonts/SCDream4.otf";

const fontStyles = `
@font-face{
  font-family: "SCDream4";
  src:url(${SCDream4});
}`;

export const inputBox = styled.div<{ width: string; height: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  // margin: auto;
  user-select: "none";
  margin-bottom: 10px;
`;

export const label = styled.label`
  /* width: 300px; */
`;

export const input = styled.input<{
  height: string;
  fontSize: string;
}>`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  ${fontStyles}
  font-family:"SCDream4";
  font-size: ${(props) => props.fontSize};
  width: 80%;
  height: 60%;
  border-radius: 8px;
  padding-left: 15px;
  border: ${theme.colors.greyscale.dark3} 2px solid;
  &:focus {
    outline: none;
    border: ${theme.colors.point.point} 2px solid;
    &::placeholder {
      color: black;
    }
  }
  /* @media only screen and (max-width: 768px) {
    height: 25px;
  } */
`;

export const p = styled.p<{ errorFontSize: string }>`
  ${fontStyles}
  font-family:"SCDream4";
  color: ${theme.colors.point.warning};
  font-size: ${(props) => props.errorFontSize};
  margin-top: 7px;
  text-align: left;
  margin-left: 10%;
  font-size: 10px;
  @media (max-width: 1024px) {
    font-size: 8px;
  }
  @media (max-width: 800px) {
    font-size: 7px;
  };
`;
export const pp = styled.p<{ errorFontSize: string }>`
  ${fontStyles}
  font-family:"SCDream4";
  color: ${theme.colors.greyscale.light3};
  font-size: ${(props) => props.errorFontSize};
  margin-top: 7px;
  margin-left: 8px;
  visibility: hidden;
  font-size: 10px;
  @media (max-width: 1024px) {
    font-size: 8px;
  }
  @media (max-width: 800px) {
    font-size: 7px;
  }; 
`;
