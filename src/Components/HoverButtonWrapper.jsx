import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  .item13 {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: none;
    transition: backdrop-filter 0.3s ease;
    position: relative;
  }

  .item13:hover {
    backdrop-filter: blur(10px);
  }

  .hover-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .item13:hover .hover-button {
    opacity: 1;
    pointer-events: auto;
  }
`;

const HoverButtonWrapper = () => {
  return (
    <Wrapper>
      <div className="item13">
        Hover Me
        <div className="hover-button">
          <Button />
        </div>
      </div>
    </Wrapper>
  );
};

export default HoverButtonWrapper;
