import styled from "@emotion/styled";

export const Container = styled.div`
  width: calc(100% - 1.5rem);
  height: calc(100% * 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  & > *:nth-of-type(4) {
    margin-top: 1.5rem;
    width: 23rem;
    display: flex;
    justify-content: flex-end;
  }
`;
