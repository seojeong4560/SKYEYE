import styled from "@emotion/styled";
import { theme } from "@constant/theme";

export const ThirdPage = styled("div")({
  width: "100vw",
  height: "auto",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  position: "relative",
});

export const bottomBox1 = styled("div")({
  width: "85vw",
  height: "35vw",
  maxHeight: "600px",
  backgroundColor: `${theme.colors.point.point}`,
  // display: "flex",
  // flexDirection: "column",
  // justifyContent: "center",
  borderRadius: "8px",
  marginLeft: "7.5vw",
  marginBottom: "3vh",
  marginTop: "1vh",
});

export const innerBox1 = styled("div")({
  width: "90%",
  marginLeft: "2.2vw",
  // display: "flex",
  // justifyContent: "space-between",
  // alignItems: "center",
});

export const title = styled("p")({
  fontStyle: "normal",
  fontSize: "5vw",
  lineHeight: "10%",
  color: `${theme.colors.greyscale.light3}`,
});

export const HrLine = styled("hr")({
  width: "80vw",
  color: `${theme.colors.greyscale.dark1}`,
  marginBottom: "1vw",
});

export const lineBox = styled("div")({
  width: "42vw",
  marginLeft: "38vw",
});

export const sHrLineBox = styled("div")({
  display: "flex",
});

export const circle = styled("div")({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: `${theme.colors.greyscale.light3}`,
  marginRight: "1vw",
  marginTop: "1vw",

  "@media(max-width: 1024px)": {
    width: "7px",
    height: "7px",
  },
  "@media(max-width: 768px)": {
    width: "4px",
    height: "4px",
  },
});

export const sHrLine = styled("hr")({
  width: "42vw",
  color: `${theme.colors.greyscale.light3}`,
  marginTop: "2.5vw",
});

export const bottomBox2 = styled("div")({
  width: "85vw",
  height: "20vw",
  maxHeight: "300px",
  backgroundColor: `${theme.colors.point.point}`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  borderRadius: "8px",
  marginLeft: "7.5vw",
  marginBottom: "3vh",
  marginTop: "1vh",
});

export const textBox = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  width: "90%",
  marginLeft: "4.2vw",
});

export const text = styled("p")({
  color: `${theme.colors.greyscale.light2}`,
  fontSize: "1.2vw",
});

export const text2 = styled("p")({
  color: `${theme.colors.greyscale.light2}`,
  fontSize: "1.2vw",
  cursor: "pointer",
});