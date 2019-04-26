import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.public};
`;

const Label = styled.h1`
  font-size: 4rem;
  font-weight: 400;
  color: white;
`;

const Public = () => {
  return (
    <Wrapper>
      <Label>Public route</Label>
    </Wrapper>
  );
};

export default Public;
